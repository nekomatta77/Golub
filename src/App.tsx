/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { BeforeAfter } from './components/BeforeAfter';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans antialiased text-white selection:bg-[#CCFF00]/20 selection:text-[#CCFF00]">
      <Navbar />
      <Hero />
      <Features />
      <BeforeAfter />
      <Pricing />
      <Footer />
    </div>
  );
}
