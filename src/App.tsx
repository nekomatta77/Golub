import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { BeforeAfter } from './components/BeforeAfter';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

export default function App() {
  // Глобальные состояния
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] font-sans antialiased text-white selection:bg-[#CCFF00]/20 selection:text-[#CCFF00]">
      <Navbar onOpenModal={() => setIsModalOpen(true)} isAuth={isAuth} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Features />
      <BeforeAfter />
      {/* Передаем статус авторизации в тарифы */}
      <Pricing isAuth={isAuth} onOpenModal={() => setIsModalOpen(true)} />
      <Footer />

      {/* Модалка теперь живет здесь */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={() => setIsAuth(true)}
      />
    </div>
  );
}