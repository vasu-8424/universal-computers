import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bg-dark/90 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-laptop-34444-large.mp4" type="video/mp4" />
        </video>
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-20 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-black/5 border border-black/10 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange mb-8">
              TRUSTED STORE SINCE 2015
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-[90px] font-black tracking-normal leading-snug md:leading-tight mb-10 uppercase">
              UPGRADE <br />
              <span className="text-brand-blue italic pr-4">YOUR</span> 
              <span className="text-brand-orange">TECH.</span>
            </h1>
            <p className="text-lg md:text-xl text-black/60 mb-12 leading-relaxed max-w-xl font-medium">
              Premium Refurbished Laptops from Dell, HP & Lenovo. 
              High performance, verified quality, and student-friendly prices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="flex gap-10">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-brand-orange">1000+</span>
                  <span className="text-[10px] text-black/50 font-black uppercase tracking-widest">Happy Clients</span>
                </div>
                <div className="w-px h-12 bg-black/10 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-brand-blue">9+ YRS</span>
                  <span className="text-[10px] text-black/50 font-black uppercase tracking-widest">Market Leader</span>
                </div>
                <div className="w-px h-12 bg-black/10 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-black">500+</span>
                  <span className="text-[10px] text-black/50 font-black uppercase tracking-widest">Daily Inventory</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-16">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:bg-brand-orange hover:text-white"
              >
                View Inventory
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="https://wa.me/918712173339"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 glass rounded-full text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black/5 text-black"
              >
                <MessageSquare className="w-4 h-4 text-brand-orange" />
                Expert Inquiry
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Specs Grid (Techy detail) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 right-10 hidden xl:grid grid-cols-2 gap-4 pointer-events-none"
      >
        <div className="glass p-4 rounded-lg w-40">
          <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">Condition</div>
          <div className="text-sm font-mono font-bold">A+++ Scratchless</div>
        </div>
        <div className="glass p-4 rounded-lg w-40">
          <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">Testing</div>
          <div className="text-sm font-mono font-bold">40-Point QC</div>
        </div>
        <div className="glass p-4 rounded-lg w-40">
          <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">Warranty</div>
          <div className="text-sm font-mono font-bold">Standard Support</div>
        </div>
        <div className="glass p-4 rounded-lg w-40">
          <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">Region</div>
          <div className="text-sm font-mono font-bold">Imported Quality</div>
        </div>
      </motion.div>
    </section>
  );
};
