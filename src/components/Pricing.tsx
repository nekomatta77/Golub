import { Check } from 'lucide-react';

export function Pricing() {
  const tiers = [
    {
      name: 'Базовый',
      price: '4 990',
      currency: '₽',
      popular: false,
      features: [
        'План питания на 4 недели',
        'Библиотека домашних тренировок',
        'Доступ в общий чат',
        'Еженедельный трекер прогресса'
      ]
    },
    {
      name: 'VIP Марафон',
      price: '9 990',
      currency: '₽',
      popular: true,
      features: [
        'Индивидуальный план питания',
        'Прямые эфиры тренировок',
        'Личная поддержка эксперта',
        'Ежедневный контроль привычек',
        'Эксклюзивная книга рецептов'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24 bg-[#121212] relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase">
          Выбери свой <span className="text-[#CCFF00]">формат</span>
        </h2>
        <p className="text-lg text-stone-400 max-w-2xl mx-auto font-light mb-16">
          Инвестируй в свое здоровье сегодня. Прозрачные тарифы для любого уровня подготовки.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 text-left transition-all duration-300 ${
                tier.popular 
                ? 'border-2 border-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.1)] scale-100 md:scale-105 z-10' 
                : 'border border-white/10 hover:border-white/20 hover:shadow-2xl hover:bg-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-[#050505] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(204,255,0,0.5)]">
                  Самый популярный
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white">{tier.price}</span>
                <span className="text-2xl font-bold text-white">{tier.currency}</span>
                <span className="text-stone-400 font-medium ml-1">/ сезон</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-1 ${tier.popular ? 'bg-[#CCFF00]/20 text-[#CCFF00]' : 'bg-white/10 text-stone-300'}`}>
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span className="text-stone-300 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-xl text-lg font-bold transition-all ${
                  tier.popular 
                  ? 'bg-[#CCFF00] hover:bg-[#b3e600] text-[#050505] shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)]' 
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                Выбрать {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
