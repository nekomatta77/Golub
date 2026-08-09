export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-black text-xl tracking-tighter text-white opacity-80">
          GOLUBKOVA<span className="text-[#CCFF00]">.</span>
        </div>
        
        {/* Изменен год на 2025 */}
        <p className="text-stone-500 text-sm font-light">
          © 2025 Marathon Golubkova. Все права защищены.
        </p>
        
        <div className="flex gap-6 text-sm text-stone-500 font-light">
          <a href="#" className="hover:text-[#CCFF00] transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-[#CCFF00] transition-colors">Оферта</a>
        </div>
      </div>
    </footer>
  );
}