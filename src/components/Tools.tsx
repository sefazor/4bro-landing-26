import React from 'react';
import { Zap, Gift, Trophy, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Energy Drinks',
    description: 'Pure Energie mit einzigartigem Geschmack. Perfekt für dein nächstes Event!',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Lifestyle',
    description: 'Genieße das Leben mit der 4BRO Community. Sei dabei bei unseren Events!',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'BRO POINTS',
    description: 'Sammle bei jedem Kauf Punkte und sichere dir exklusive Rewards!',
    gradient: 'from-cyan-500 to-purple-500',
  },
  {
    icon: <Gift className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Goodies',
    description: 'Von der Community für die Community - limitierte Editionen und mehr!',
    gradient: 'from-purple-500 to-cyan-500',
  },
];

export default function Tools() {
  return (
    <section id="products" className="py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_50%)]"></div>
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">4BRO Lifestyle</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Energy, Style und Community - Das ist 4BRO!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="h-full p-6 sm:p-8 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)"
                }}
              >
                <motion.div 
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${product.gradient} p-3 sm:p-4 mb-4 sm:mb-6 text-white`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {product.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{product.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{product.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}