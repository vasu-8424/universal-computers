import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, MessageSquare, Tag } from 'lucide-react';
import { products, Laptop } from '../data/products';

interface ProductCardProps {
  product: Laptop;
  key?: React.Key;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="glass rounded-3xl overflow-hidden group border-white/5 hover:border-brand-blue/30 transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {product.tag && (
          <div className="absolute top-4 left-4 z-10">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg ${
              product.tag === 'Best Seller' ? 'bg-brand-blue text-white' : 
              product.tag === 'New' ? 'bg-brand-orange text-white' : 'bg-green-500 text-white'
            }`}>
              <Tag size={10} />
              {product.tag}
            </span>
          </div>
        )}
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue">{product.brand}</span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">{product.category}</span>
        </div>
        <h4 className="text-2xl font-black mb-4 uppercase tracking-normal leading-none group-hover:text-brand-orange transition-colors">{product.name}</h4>
        <p className="text-white/40 text-xs mb-8 line-clamp-1 font-bold">
          {product.specs}
        </p>
        
        <motion.a
          href={`https://wa.me/918712173339?text=Hi, I am interested in ${product.name} (${product.specs})`}
          target="_blank"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 border border-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group/btn"
        >
          WHATSAPP INQUIRY
        </motion.a>
      </div>
    </motion.div>
  );
};

export const ProductsSection = () => {
  const [filter, setFilter] = useState<'All' | Laptop['category']>('All');
  const [search, setSearch] = useState('');

  const categories: ('All' | Laptop['category'])[] = [
    'All', 'Business', 'High Performance', 'Graphics', 'Student', 'Developer', 'Accessories'
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesFilter = filter === 'All' || p.category === filter;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                           p.brand.toLowerCase().includes(search.toLowerCase()) ||
                           p.specs.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-orange mb-6">LIVE INVENTORY</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-normal leading-tight uppercase">
              PREMIUM <br /> 
              <span className="text-brand-blue italic">COLLECTIONS.</span>
            </h3>
          </motion.div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-brand-blue transition-colors" />
              <input 
                type="text" 
                placeholder="Search models..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 outline-none focus:border-brand-blue/50 w-full md:w-64 transition-all"
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              <Filter className="w-4 h-4 text-gray-500 shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    filter === cat 
                      ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 glass rounded-3xl"
          >
            <p className="text-gray-500 text-xl font-medium">No products match your criteria.</p>
            <button 
              onClick={() => {setFilter('All'); setSearch('');}}
              className="mt-4 text-brand-blue font-bold underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
