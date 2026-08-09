import { useState } from 'react';
import { TrendingUp, Camera } from 'lucide-react';

export function BeforeAfter() {
  const [isExpanded, setIsExpanded] = useState(false);

  const allCases = [
    { name: 'Елена', result: '-12 кг', percent: '18%', time: 'за 3 месяца' },
    { name: 'Анна', result: '-8 кг', percent: '14%', time: 'за 2 месяца' },
    { name: 'Кристина', result: '-15 кг', percent: '22%', time: 'за 4 месяца' },
    { name: 'Ольга', result: '-7 кг', percent: '11%', time: 'за 1.5 месяца' },
    { name: 'Мария', result: '-9 кг', percent: '15%', time: 'за 2 месяца' },
    { name: 'Дарья', result: '-11 кг', percent: '17%', time: 'за 2.5 месяца' }
  ];

  const displayedCases = isExpanded ? allCases : allCases.slice(0, 2);

  return (
    <section id="results" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#050505] relative overflow-hidden transition-all duration-700">
      <div className="absolute right-0 top-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#00FFFF]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3 md:mb-4 uppercase">
              Реальные <br className="hidden md:block"/> <span className="text-[#00FFFF]">Результаты</span>
            </h2>
            <p className="text-base md:text-lg text-stone-400 max-w-lg font-light">
              Вдохновляющие трансформации участниц, которые уже доверились методике GOLUBKOVA.
            </p>
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs md:text-sm font-bold text-[#00FFFF] hover:text-[#7dffff] transition-colors border-b-2 border-[#00FFFF]/30 hover:border-[#00FFFF] pb-1 cursor-pointer mt-4 md:mt-0 uppercase"
          >
            {isExpanded ? 'Скрыть результаты' : 'Смотреть больше'}
          </button>
        </div>

        {/* Адаптивная сетка: 1 колонка на мобильном, 2 на ПК */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 transition-all duration-700">
          {displayedCases.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 backdrop-blur-xl p-4 md:p-6 rounded-[2rem] md:rounded-4xl shadow-xl border border-white/10 flex flex-col group hover:border-white/20 transition-all duration-500"
            >
              
              <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] md:aspect-video border border-white/5 bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-700">
                <div className="absolute top-1/2 left-1/4 w-24 md:w-32 h-24 md:h-32 bg-[#CCFF00]/10 rounded-full blur-[40px] md:blur-[60px] group-hover:bg-[#CCFF00]/20 transition-colors duration-700"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 md:w-32 h-24 md:h-32 bg-[#00FFFF]/10 rounded-full blur-[40px] md:blur-[60px] group-hover:bg-[#00FFFF]/20 transition-colors duration-700"></div>
                
                <Camera className="w-10 h-10 md:w-12 md:h-12 text-stone-700 mb-3 md:mb-4 group-hover:text-[#CCFF00]/60 transition-colors duration-700 z-10" />
                <span className="text-xl sm:text-2xl md:text-4xl font-black text-stone-700 uppercase tracking-widest group-hover:text-white/80 transition-colors duration-700 z-10 text-center px-4">
                  Фото участниц
                </span>
                
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-black/60 backdrop-blur-md border border-[#00FFFF]/30 p-2 md:p-3 rounded-xl flex items-center gap-2 md:gap-3 z-20">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00FFFF]/20 flex items-center justify-center text-[#00FFFF] shrink-0">
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <div>
                    <div className="text-[#00FFFF] font-bold text-xs md:text-sm drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">Жир: -{item.percent}</div>
                  </div>
                </div>
              </div>
              
              {/* Адаптивная ширина плашки: min-w-[200px] для телефонов */}
              <div className="relative -mt-6 md:-mt-8 mx-auto bg-[#121212] px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-2xl border border-white/10 flex flex-col items-center min-w-[200px] md:min-w-[240px] backdrop-blur-md z-30">
                <span className="font-bold text-white text-base md:text-lg leading-tight">{item.name}</span>
                <div className="flex items-center gap-2 md:gap-3 mt-1">
                  <span className="text-[#CCFF00] font-black text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(204,255,0,0.3)]">{item.result}</span>
                  <span className="text-stone-400 text-xs md:text-sm font-medium">{item.time}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}