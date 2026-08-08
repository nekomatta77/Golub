import { Salad, Dumbbell, MessageCircle, LineChart } from 'lucide-react';

const features = [
  {
    title: 'План Питания',
    description: 'Вкусные, сбалансированные рецепты, адаптированные под ваши цели и особенности организма.',
    icon: Salad,
    glow: 'group-hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]',
    iconColor: 'text-[#CCFF00]',
  },
  {
    title: 'Домашние Тренировки',
    description: 'Короткие и эффективные тренировки без инвентаря. Занимайтесь в удобном для вас темпе.',
    icon: Dumbbell,
    glow: 'group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]',
    iconColor: 'text-[#00FFFF]',
  },
  {
    title: 'Поддержка Экспертов',
    description: 'Прямой доступ к нутрициологам и тренерам в нашем закрытом комьюнити.',
    icon: MessageCircle,
    glow: 'group-hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]',
    iconColor: 'text-[#CCFF00]',
  },
  {
    title: 'Видимые Результаты',
    description: 'Отслеживайте свой прогресс с помощью аналитики и празднуйте каждую победу.',
    icon: LineChart,
    glow: 'group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]',
    iconColor: 'text-[#00FFFF]',
  },
];

export function Features() {
  return (
    <section id="program" className="py-24 px-6 md:px-12 lg:px-24 bg-[#121212] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-[#CCFF00]/5 to-[#00FFFF]/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase">
            Всё необходимое <br /> для <span className="text-[#CCFF00]">успеха</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto font-light">
            Мы предлагаем комплексный подход. Никаких жестких диет и изнурительных тренировок — только умные и здоровые привычки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 flex flex-col items-center text-center ${feature.glow} hover:-translate-y-1`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-stone-400 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
