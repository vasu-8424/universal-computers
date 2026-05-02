import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Instagram, Youtube, Facebook, Mail, Phone, MapPin, Send } from 'lucide-react';

export const WhyChooseUs = () => {
  const points = [
    "Scratch-less A+++ Imported Quality",
    "40-Point Rigorous Quality Testing",
    "9+ Years of Trusted Service",
    "Bulk Availability for Businesses",
    "Affordable Student-Friendly Models",
    "Dedicated Post-Purchase Warranty",
    "Original Accessories Included",
    "Top Google-Rated Store in Proddatur"
  ];

  return (
    <section className="py-24 bg-surface-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue mb-6">WHY CHOOSE UC</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-normal leading-snug mb-12 uppercase">
              RELIABILITY <br /> 
              <span className="text-brand-orange italic">THAT MATTERS.</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((pt, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 bg-black/5 border border-black/10 rounded-2xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-black/70">{pt}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] rounded-full" />
            <div className="glass p-8 rounded-[40px] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200" 
                alt="Quality Check" 
                className="rounded-3xl shadow-2xl mb-8"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 glass rounded-2xl">
                  <div className="text-2xl font-black text-brand-blue">100%</div>
                  <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Genuine Parts</div>
                </div>
                <div className="text-center p-4 glass rounded-2xl">
                  <div className="text-2xl font-black text-brand-orange">48Hrs</div>
                  <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Testing Period</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1504707748692-419802cf939d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1580522151917-c5ec52902d51?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="gallery" className="py-32">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-orange mb-6 text-center">CURRENT STOCK</h2>
        <h3 className="text-4xl md:text-7xl font-black tracking-normal leading-snug text-center mb-20 uppercase">
          REAL DEVICES. <br/><span className="text-black/20 italic">REAL DEALS.</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className="relative aspect-video rounded-2xl overflow-hidden glass group cursor-zoom-in"
            >
              <img 
                src={img} 
                alt={`Stock ${i}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-mesh relative overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue mb-6">GET IN TOUCH</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-normal leading-snug mb-10 uppercase">
              VISIT OUR <br /> 
              <span className="text-brand-orange italic">EXPERIENCE STORE.</span>
            </h3>

            <div className="space-y-10 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-blue-500/20">
                  <MapPin className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-black/40 mb-2">Location</h4>
                  <p className="text-lg font-bold leading-tight">
                    Proddatur, AP, India.
                  </p>
                  <p className="text-sm text-black/40 mt-1">D.N0, 14/331, Church Complex Upstairs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-orange-500/20">
                  <Phone className="text-brand-orange w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-black/40 mb-2">Phone</h4>
                  <p className="text-2xl font-mono font-black">+91 87121 73339</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/_universal_computers_" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors group">
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="https://www.youtube.com/@UniversalComputerspdtr" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors group">
                <Youtube className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="https://www.facebook.com/share/14bJmiFVj6T/" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors group">
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-[40px] p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Send size={120} className="rotate-12" />
            </div>
            
            <h4 className="text-2xl font-black mb-8 tracking-tight">Drop us a message</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-black/5 border border-black/10 rounded-2xl p-4 outline-none focus:border-brand-blue/50 w-full text-black placeholder:text-black/50"
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="bg-black/5 border border-black/10 rounded-2xl p-4 outline-none focus:border-brand-blue/50 w-full text-black placeholder:text-black/50"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-black/5 border border-black/10 rounded-2xl p-4 outline-none focus:border-brand-blue/50 w-full text-black placeholder:text-black/50"
              />
              <textarea 
                rows={4} 
                placeholder="What laptop are you looking for?" 
                className="bg-black/5 border border-black/10 rounded-2xl p-4 outline-none focus:border-brand-blue/50 w-full text-black placeholder:text-black/50"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-blue text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-brand-blue/20"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-24 border-t border-black/5 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <img src="/logo.jpg" alt="Universal Computers Logo" className="w-16 h-16 object-contain" />
              <span className="text-3xl font-black tracking-normal uppercase text-black">Universal <br/>Computers.</span>
            </div>
            <p className="text-black/60 max-w-sm mb-10 leading-relaxed font-medium">
              Bringing premium technology within everyone's reach. Trusted by over 1k+ 
              satisfied customers for more than 9 years in Proddatur.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.4em] text-brand-blue">Store Info</h4>
            <div className="space-y-4 font-black uppercase text-[10px] tracking-widest">
              <p className="text-black/50">MON-SAT 9AM-8:30PM</p>
              <p className="text-brand-orange">SUN 10AM-6:00PM</p>
              <p className="text-black">PRODDATUR, AP</p>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.4em] text-brand-orange">Socials</h4>
            <div className="flex gap-4">
              <a href="#" className="text-xs font-black uppercase tracking-widest text-black/40 hover:text-black transition-all">INSTAGRAM</a>
              <a href="#" className="text-xs font-black uppercase tracking-widest text-black/40 hover:text-black transition-all">YOUTUBE</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-black/30 uppercase tracking-[0.5em]">
          <div>© 2024 UNIVERSAL COMPUTERS</div>
          <div>ESTD 2015</div>
        </div>
      </div>
    </footer>
  );
};
