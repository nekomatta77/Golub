import { useState } from 'react';
import { TrendingUp, Camera } from 'lucide-react';

export function BeforeAfter() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Полная база результатов
  const allCases = [
    { name: 'Елена', result: '-12 кг', percent: '18%', time: 'за 3 месяца' },
    { name: 'Анна', result: '-8 кг', percent: '14%', time: 'за 2 месяца' },
    { name: 'Кристина', result: '-15 кг', percent: '22%', time: 'за 4 месяца' },
    { name: 'Ольга', result: '-7 кг', percent: '11%', time: 'за 1.5 месяца' },
    { name: 'Мария', result: '-9 кг', percent: '15%', time: 'за 2 месяца' },
    { name: 'Дарья', result: '-11 кг', percent: '17%', time: 'за 2.5 месяца' }
  ];

  // Определяем, сколько карточек показывать
  const displayedCases = isExpanded ? allCases : allCases.slice(0, 2);

  return (
    <section id="results" className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] relative overflow-hidden transition-all duration-700">
      {/* Фоновое свечение секции */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase">
              Реальные <br /> <span className="text-[#00FFFF]">Результаты</span>
            </h2>
            <p className="text-lg text-stone-400 max-w-lg font-light">
              Вдохновляющие трансформации участниц, которые уже доверились методике GOLUBKOVA.
            </p>
          </div>
          
          {/* ИСПРАВЛЕНО: Интерактивная кнопка для раскрытия галереи */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-bold text-[#00FFFF] hover:text-[#7dffff] transition-colors border-b-2 border-[#00FFFF]/30 hover:border-[#00FFFF] pb-1 cursor-pointer"
          >
            {isExpanded ? 'СКРЫТЬ' : 'СМОТРЕТЬ БОЛЬШЕ'}
          </button>
        </div>

        {/* Сетка, которая автоматически адаптируется под количество элементов */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700">
          {displayedCases.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 backdrop-blur-xl p-4 md:p-6 rounded-4xl shadow-xl border border-white/10 flex flex-col group hover:border-white/20 transition-all duration-500"
            >
              
              {/* Красивый блок вместо фотографий */}
              <div className="relative w-full rounded-3xl overflow-hidden aspect-[4/3] md:aspect-video border border-white/5 bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-700">
                
                {/* Абстрактные свечения на фоне заглушки */}
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#CCFF00]/10 rounded-full blur-[60px] group-hover:bg-[#CCFF00]/20 transition-colors duration-700"></div>
                <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-[#00FFFF]/10 rounded-full blur-[60px] group-hover:bg-[#00FFFF]/20 transition-colors duration-700"></div>
                
                {/* Типографика и иконка */}
                <Camera className="w-12 h-12 text-stone-700 mb-4 group-hover:text-[#CCFF00]/60 transition-colors duration-700 z-10" />
                <span className="text-2xl md:text-4xl font-black text-stone-700 uppercase tracking-widest group-hover:text-white/80 transition-colors duration-700 z-10 text-center px-4">
                  Фото участниц
                </span>
                
                {/* Плавающая статистика (Жир %) */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md border border-[#00FFFF]/30 p-3 rounded-xl flex items-center gap-3 z-20">
                  <div className="w-8 h-8 rounded-full bg-[#00FFFF]/20 flex items-center justify-center text-[#00FFFF]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#00FFFF] font-bold text-sm drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">Жир: -{item.percent}</div>
                  </div>
                </div>
              </div>
              
              {/* Карточка с именем и результатом (Вынесена поверх рамки) */}
              <div className="relative -mt-8 mx-auto bg-[#121212] px-8 py-4 rounded-2xl shadow-2xl border border-white/10 flex flex-col items-center min-w-[240px] backdrop-blur-md z-30">
                <span className="font-bold text-white text-lg">{item.name}</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#CCFF00] font-black text-2xl drop-shadow-[0_0_10px_rgba(204,255,0,0.3)]">{item.result}</span>
                  <span className="text-stone-400 text-sm font-medium">{item.time}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}