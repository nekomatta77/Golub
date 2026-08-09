import { ArrowRight, Trophy } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] pt-28 pb-16 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-12 bg-linear-to-b from-[#050505] to-[#121212] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 md:w-200 h-96 md:h-200 bg-[#CCFF00] rounded-full blur-[100px] md:blur-[150px] opacity-10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 md:w-150 h-80 md:h-150 bg-[#00FFFF] rounded-full blur-[100px] md:blur-[150px] opacity-10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="w-full lg:w-1/2 flex flex-col items-start z-10 max-w-2xl">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs md:text-sm font-semibold text-[#00FFFF] mb-6">
          <span>Новый сезон скоро начнется</span>
        </div>
        
        {/* Адаптивный размер текста: от 4xl на мобилках до 8xl на ПК */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter text-white mb-6 uppercase">
          Марафон <br />
          Похудения <br />
          <span className="text-[#CCFF00] drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">GOLUBKOVA</span>
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-stone-400 mb-8 md:mb-10 max-w-md font-light leading-relaxed">
          НАЧНИ СВОЮ ТРАНСФОРМАЦИЮ СЕГОДНЯ. Присоединяйся к самому эффективному сообществу для достижения фигуры мечты.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={onOpenModal}
            className="flex items-center justify-center gap-2 bg-[#CCFF00] hover:bg-[#b3e600] text-[#050505] px-8 py-4 rounded-full text-base md:text-lg font-bold transition-all shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] hover:-translate-y-0.5"
          >
            УЧАСТВОВАТЬ
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mt-10 md:mt-12 flex items-center gap-4">
          <div className="flex -space-x-3">
            {[
              'https://wsrv.nl/?url=images.unsplash.com/photo-1534528741775-53994a69daeb&w=150&q=80&output=webp',
              'https://wsrv.nl/?url=images.unsplash.com/photo-1506794778202-cad84cf45f1d&w=150&q=80&output=webp',
              'https://wsrv.nl/?url=images.unsplash.com/photo-1494790108377-be9c29b29330&w=150&q=80&output=webp',
            ].map((src, i) => (
              <img key={i} src={src} alt="Участница" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#121212] object-cover bg-stone-800" />
            ))}
          </div>
          <div className="text-xs md:text-sm font-medium text-stone-400">
            <span className="text-white font-bold">5,000+</span> довольных участниц
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative z-10 flex justify-center mt-16 lg:mt-0">
        <div className="relative w-full max-w-sm md:max-w-lg">
          <div className="relative rounded-[2rem] md:rounded-4xl overflow-hidden shadow-2xl shadow-black/50 aspect-3/4 border border-white/5 bg-stone-900">
            <img 
              src="https://wsrv.nl/?url=images.unsplash.com/photo-1606902965551-dce093cda6e7&w=1000&q=80&output=webp" 
              alt="Голубкова в темном спортивном костюме" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
          </div>
          
          {/* Адаптивная карточка слева внизу: scale-90 и left-2 на мобилках */}
          <div className="absolute -bottom-4 left-2 md:-bottom-6 md:-left-6 scale-90 md:scale-100 origin-bottom-left bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center gap-3 md:gap-4 animate-[bounce_4s_ease-in-out_infinite]">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#CCFF00]/10 text-[#CCFF00] rounded-xl flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <p className="text-xs md:text-sm text-stone-400 font-medium leading-tight">Цель достигнута</p>
              <p className="text-lg md:text-xl font-bold text-white leading-tight">-10 кг</p>
            </div>
          </div>
          
          {/* Адаптивная карточка справа сверху: scale-90 и right-2 на мобилках */}
          <div className="absolute top-6 right-2 md:top-12 md:-right-8 scale-90 md:scale-100 origin-top-right bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-[#00FFFF]/10 text-[#00FFFF] rounded-full flex items-center justify-center font-black text-sm md:text-base tracking-tighter border border-[#00FFFF]/20">
              100%
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold text-white leading-tight">Индивидуальный</p>
              <p className="text-[10px] md:text-xs text-stone-400 font-medium leading-tight">План Питания</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}