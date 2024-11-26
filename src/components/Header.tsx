import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom h-[80px] md:h-[120px] flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            4BRO
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <a href="#products" className="hover:text-purple-400 transition-colors text-sm lg:text-base">Shop</a>
          <a href="#testimonials" className="hover:text-purple-400 transition-colors text-sm lg:text-base">Community</a>
          <a href="#mobile" className="hover:text-purple-400 transition-colors text-sm lg:text-base">BRO APP</a>
          <motion.button 
            className="bg-purple-600 hover:bg-purple-700 px-4 lg:px-6 py-2 rounded-full transition-colors flex items-center gap-2 text-sm lg:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="hidden sm:inline">Warenkorb</span>
            <span>(0)</span>
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-[80px] left-0 w-full bg-black/95 backdrop-blur-lg mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col p-6 gap-4">
              <a 
                href="#products" 
                className="hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </a>
              <a 
                href="#testimonials" 
                className="hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <a 
                href="#mobile" 
                className="hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                BRO APP
              </a>
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Warenkorb (0)
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}