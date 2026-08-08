import { TrendingUp } from 'lucide-react';

export function BeforeAfter() {
  const cases = [
    {
      before: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800',
      after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
      name: 'Елена',
      result: '-12 кг',
      percent: '18%',
      time: 'за 3 месяца'
    },
    {
      before: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=800',
      after: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
      name: 'Анна',
      result: '-8 кг',
      percent: '14%',
      time: 'за 2 месяца'
    }
  ];

  return (
    <section id="results" className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] relative overflow-hidden">
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
          <button className="text-sm font-bold text-[#00FFFF] hover:text-[#7dffff] transition-colors border-b-2 border-[#00FFFF]/30 hover:border-[#00FFFF] pb-1">
            СМОТРЕТЬ БОЛЬШЕ
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-xl p-4 md:p-6 rounded-[2rem] shadow-xl border border-white/10 flex flex-col md:flex-row gap-4 group hover:border-white/20 transition-colors">
              <div className="flex-1 relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-80 border border-white/5">
                <img src={item.before} alt="До" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-stone-300 text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">ДО</div>
              </div>
              <div className="flex-1 relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-80 border border-[#00FFFF]/20">
                <img src={item.after} alt="После" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-[#CCFF00] text-[#050505] text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(204,255,0,0.5)]">ПОСЛЕ</div>
                
                {/* Floating Cyan Stat overlay */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md border border-[#00FFFF]/30 p-3 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00FFFF]/20 flex items-center justify-center text-[#00FFFF]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#00FFFF] font-bold text-sm drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">Жир: -{item.percent}</div>
                  </div>
                </div>
              </div>
              
              {/* Floating label */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#121212] px-8 py-4 rounded-2xl shadow-2xl border border-white/10 flex flex-col items-center min-w-[200px] backdrop-blur-md">
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
