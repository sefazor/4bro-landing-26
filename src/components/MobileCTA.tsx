import React from 'react';
import { Smartphone, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MobileCTA() {
  return (
    <section id="mobile" className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            DIE BRO APP
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Lade dir jetzt deine 4BRO APP herunter.
            Mit der 4BRO APP sammelst du BRO POINTS, mit denen du dir exklusive Goodies kaufen kannst.
          </p>
          <p className="text-xl text-gray-400 mb-8">
            Setze die BRO POINTS für VIP Konzertkarten, Goodies, Gutscheine oder für 4BRO Food Boxen ein. 
            Mit jedem Produkt geben wir dir was zurück!
          </p>
          <div className="flex gap-4">
            <motion.button 
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Smartphone size={20} />
              Jetzt Downloaden
            </motion.button>
            <motion.button 
              className="flex items-center gap-2 border border-purple-600 hover:bg-purple-600/20 px-8 py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Gift size={20} />
              BRO POINTS
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
            alt="4BRO Mobile App"
            className="w-full rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}