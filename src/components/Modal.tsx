import { X, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function Modal({ isOpen, onClose, onSuccess }: ModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      // Отправляем данные на твой уникальный адрес Formspree
      const response = await fetch('https://formspree.io/f/xqpzenne', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSent(true); // Показываем галочку успеха
        onSuccess();     // Меняем статус в App.tsx на "Авторизован"
        
        // Закрываем окно через 2 секунды, чтобы пользователь успел прочитать
        setTimeout(() => {
          setIsSent(false);
          onClose();
        }, 2000);
      } else {
        console.error("Ошибка Formspree: неверный формат или спам-фильтр");
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#050505]/80 backdrop-blur-sm p-4 transition-all">
      <div className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-4xl p-8 shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-stone-400 hover:text-[#CCFF00] transition-colors">
          <X className="w-6 h-6" />
        </button>

        {isSent ? (
          <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
            <CheckCircle className="w-16 h-16 text-[#CCFF00] mb-4" />
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Успешно!</h2>
            <p className="text-stone-400 mt-2">Вы авторизованы. Теперь вам доступна связь в Telegram.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Регистрация</h2>
            <p className="text-stone-400 mb-8 font-light text-sm">
              Оставьте свои данные для доступа к тарифам.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                name="name"  // Formspree сохранит это как Имя
                type="text" 
                required
                placeholder="Ваше имя" 
                className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#CCFF00] focus:bg-white/10 transition-all font-light"
              />
              <input 
                name="email" // Formspree сохранит это как Email и сможет отправить тебе уведомление
                type="email" 
                required
                placeholder="Ваш Email" 
                className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#CCFF00] focus:bg-white/10 transition-all font-light"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 bg-[#CCFF00] hover:bg-[#b3e600] text-[#050505] font-bold text-lg rounded-xl px-6 py-4 shadow-[0_0_20px_rgba(204,255,0,0.2)] transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'ОТПРАВКА...' : 'ПОДТВЕРДИТЬ'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}