import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onOpenModal: () => void;
  isAuth: boolean;
}

export function Navbar({ onOpenModal, isAuth }: NavbarProps) {
  // Добавляем состояние для мобильного меню
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="px-6 py-4 md:px-12 md:py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="font-black text-xl tracking-tighter text-white z-50">
          GOLUBKOVA<span className="text-[#CCFF00]">.</span>
        </div>
        
        {/* Меню для ПК (Скрыто на мобильных) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-stone-300">
          <a href="#program" className="hover:text-white transition-colors">Программа</a>
          <a href="#results" className="hover:text-white transition-colors">Результаты</a>
          <a href="#pricing" className="hover:text-white transition-colors">Цены</a>
        </div>
        
        {/* Кнопка для ПК */}
        <div className="hidden md:block">
          {!isAuth ? (
            <button 
              onClick={onOpenModal}
              className="bg-white/10 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-all backdrop-blur-md border border-white/10"
            >
              Войти
            </button>
          ) : (
            <span className="text-[#CCFF00] font-bold text-sm bg-white/5 px-6 py-2.5 rounded-full border border-white/10">Авторизован</span>
          )}
        </div>

        {/* Гамбургер для Мобилок */}
        <button 
          className="md:hidden text-white z-50 relative p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Выпадающее Мобильное Меню */}
      <div className={`md:hidden absolute top-0 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 flex flex-col items-center pt-24 pb-8 gap-6 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
      }`}>
        <a href="#program" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Программа</a>
        <a href="#results" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Результаты</a>
        <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Цены</a>
        
        {!isAuth ? (
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenModal();
            }}
            className="mt-4 bg-[#CCFF00] text-black px-8 py-3 rounded-full text-base font-bold shadow-[0_0_20px_rgba(204,255,0,0.2)]"
          >
            Войти
          </button>
        ) : (
          <span className="mt-4 text-[#CCFF00] font-bold text-base bg-white/5 px-8 py-3 rounded-full border border-white/10">Вы авторизованы</span>
        )}
      </div>
    </nav>
  );
}