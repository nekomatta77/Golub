import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function Modal({ isOpen, onClose, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#050505]/80 backdrop-blur-sm p-4 transition-all">
      <div className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-4xl p-8 shadow-2xl">
        
        {/* Кнопка закрытия */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-[#CCFF00] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">{title}</h2>
        <p className="text-stone-400 mb-8 font-light text-sm">
          Оставьте свои данные, и мы свяжемся с вами в ближайшее время.
        </p>

        {/* Форма */}
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Ваше имя" 
            className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#CCFF00] focus:bg-white/10 transition-all font-light"
          />
          <input 
            type="text" 
            placeholder="Telegram или Email" 
            className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#CCFF00] focus:bg-white/10 transition-all font-light"
          />
          <button 
            type="button"
            className="w-full mt-4 bg-[#CCFF00] hover:bg-[#b3e600] text-[#050505] font-bold text-lg rounded-xl px-6 py-4 shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all hover:-translate-y-0.5"
          >
            ПОДТВЕРДИТЬ
          </button>
        </form>
      </div>
    </div>
  );
}