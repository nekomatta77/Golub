import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Modal } from './Modal';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen pt-24 pb-12 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12 bg-linear-to-b from-[#050505] to-[#121212] overflow-hidden">
        {/* Decorative Blob */}
        <div className="absolute top-0 right-0 w-200 h-200 bg-[#CCFF00] rounded-full blur-[150px] opacity-10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-[#00FFFF] rounded-full blur-[150px] opacity-10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="w-full lg:w-1/2 flex flex-col items-start z-10 pt-12 lg:pt-0">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-semibold text-[#00FFFF] mb-6">
            <span>Новый сезон скоро начнется</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-white mb-6 uppercase">
            Марафон <br />
            Похудения <br />
            <span className="text-[#CCFF00] drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">GOLUBKOVA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-400 mb-10 max-w-md font-light leading-relaxed">
            НАЧНИ СВОЮ ТРАНСФОРМАЦИЮ СЕГОДНЯ. Присоединяйся к самому эффективному сообществу для достижения фигуры мечты.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-[#CCFF00] hover:bg-[#b3e600] text-[#050505] px-8 py-4 rounded-full text-lg font-bold transition-all shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] hover:-translate-y-0.5"
            >
              УЧАСТВОВАТЬ
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                'https://placehold.co/150x150/121212/CCFF00/png?text=U1',
                'https://placehold.co/150x150/121212/00FFFF/png?text=U2',
                'https://placehold.co/150x150/121212/FFFFFF/png?text=U3',
              ].map((src, i) => (
                <img key={i} src={src} alt="Участница" className="w-10 h-10 rounded-full border-2 border-[#121212] object-cover bg-stone-800" />
              ))}
            </div>
            <div className="text-sm font-medium text-stone-400">
              <span className="text-white font-bold">5,000+</span> довольных участниц
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative z-10 flex justify-center mt-12 lg:mt-0">
          <div className="relative w-full max-w-lg">
            
            {/* Главное фото заменено на стильную заглушку */}
            <div className="relative rounded-4xl overflow-hidden shadow-2xl shadow-black/50 aspect-3/4 border border-white/5 bg-stone-900">
              <img 
                src="https://placehold.co/800x1000/0a0a0a/CCFF00/png?text=MAIN+PHOTO\nGolubkova" 
                alt="Голубкова в темном спортивном костюме" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Плавающие карточки */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-[bounce_4s_ease-in-out_infinite]">
              <div className="w-12 h-12 bg-[#CCFF00]/10 text-[#CCFF00] rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-stone-300 font-medium">Цель достигнута</p>
                <p className="text-xl font-bold text-white">-10 кг</p>
              </div>
            </div>
            
            <div className="absolute top-12 -right-8 bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00FFFF]/10 text-[#00FFFF] rounded-full flex items-center justify-center font-bold text-lg border border-[#00FFFF]/20">
                100%
              </div>
              <div>
                <p className="text-sm font-bold text-white">Индивидуальный</p>
                <p className="text-xs text-stone-300 font-medium">План Питания</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Регистрация на марафон"
      />
    </>
  );
}