import React from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Features from './Features';

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[600px] md:min-h-[800px] w-full overflow-hidden bg-black">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>

        <div className="relative container-custom h-full flex flex-col items-center justify-center py-32">
          <div className="w-full text-center max-w-3xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gradient">#VONBROS4BROS</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Energy Drinks und Snacks von Bros für Bros.
                <span className="block mt-4">Werde Teil der Community! 🚀</span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-custom rounded-full font-medium text-white flex items-center justify-center gap-2 hover:glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Shop</span>
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                </motion.button>

                <motion.button
                  className="group px-6 sm:px-8 py-3 sm:py-4 border border-purple-500/30 rounded-full font-medium text-white flex items-center justify-center gap-2 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>BRO APP</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 md:mt-20 w-full max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1527960471264-932f39eb5846"
                alt="4BRO Energy Drinks"
                className="w-full h-full object-cover hover-glow"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <Features />
    </>
  );
}
