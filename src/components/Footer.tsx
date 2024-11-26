import React from 'react';
import { Instagram, Twitch, Youtube, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-20 bg-black border-t border-gray-800">
      <div className="max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-6 bg-gradient-custom bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              4BRO
            </motion.h3>
            <p className="text-gray-400">
              Energy Drinks und Snacks von Bros für Bros. 
              Werde Teil der Community! 🚀
            </p>
            <div className="flex gap-4 mt-6">
              <motion.a 
                href="#" 
                className="p-2 rounded-full bg-gradient-custom hover:glow transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-2 rounded-full bg-gradient-custom hover:glow transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitch size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-2 rounded-full bg-gradient-custom hover:glow transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Shop</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Energy Drinks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Snacks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Merchandise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Limited Editions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Community</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BRO APP</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BRO POINTS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Versand & Lieferung</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Händler werden</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-800 text-center">
          <motion.p 
            className="text-gray-400 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by 4BRO Team
          </motion.p>
          <p className="text-gray-600 mt-4 text-sm">
            © 2024 4BRO. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}