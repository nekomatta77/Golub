export function Footer() {
  return (
    <footer className="bg-[#050505] text-stone-500 py-12 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-black text-2xl tracking-tighter text-white">
          GOLUBKOVA<span className="text-[#CCFF00]">.</span>
        </div>
        
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-[#CCFF00] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#00FFFF] transition-colors">Telegram</a>
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-white transition-colors">Оферта</a>
        </div>
        
        <div className="text-sm font-light">
          &copy; {new Date().getFullYear()} Марафон Голубкова. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
