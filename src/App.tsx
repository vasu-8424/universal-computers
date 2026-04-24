/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Navbar, WhatsAppButton } from './components/Navigation';
import { Hero } from './components/Hero';
import { About, Services } from './components/AboutServices';
import { ProductsSection } from './components/Products';
import { WhyChooseUs, Gallery, Contact, Footer } from './components/InfoSections';

export default function App() {
  useEffect(() => {
    // Force direct scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-bg-dark text-white selection:bg-brand-blue selection:text-white overflow-x-hidden">
      <Navbar />
      <WhatsAppButton />
      
      <main>
        <Hero />
        <About />
        <Services />
        <ProductsSection />
        <WhyChooseUs />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
