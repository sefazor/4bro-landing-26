import React from 'react';
import { Zap, PartyPopper, Gift, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "4BRO Events",
      description: "Die krassesten Parties, Festivals und Events. Sei dabei und erlebe unvergessliche Momente mit der 4BRO Community!",
      icon: <PartyPopper className="w-6 h-6" />,
      buttonText: "Events entdecken",
      buttonLink: "https://events.4bro.de",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "4BRO Shop",
      description: "Energy Drinks, Snacks und Merch. Hole dir jetzt den besten Geschmack für deine Party!",
      icon: <Zap className="w-6 h-6" />,
      buttonText: "Zum Shop",
      buttonLink: "https://shop.4bro.de",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-[80%] mx-auto grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className="h-full p-8 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)"
              }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} p-4 mb-6 text-white flex items-center justify-center`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-8">{feature.description}</p>
              <motion.a
                href={feature.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-custom text-white font-medium hover:glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {feature.buttonText}
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}