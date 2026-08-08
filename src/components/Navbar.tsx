import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Modal } from './Modal';

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 flex items-center justify-between">
        <div className="font-black text-xl tracking-tighter text-white">
          GOLUBKOVA<span className="text-[#CCFF00]">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-stone-300">
          <a href="#program" className="hover:text-white transition-colors">Программа</a>
          <a href="#results" className="hover:text-white transition-colors">Результаты</a>
          <a href="#pricing" className="hover:text-white transition-colors">Цены</a>
        </div>
        
        <div className="hidden md:block">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white/10 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-all backdrop-blur-md border border-white/10"
          >
            Войти
          </button>
        </div>

        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Вход в аккаунт"
      />
    </>
  );
}