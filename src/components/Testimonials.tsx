import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Der Geschmack ist unschlagbar! Perfekt für Festivals und Parties! 🔥",
    author: "MaxStyle",
    role: "Festival Lover",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    quote: "BRO POINTS sind der Hammer! Hab mir schon coole Event-Tickets gesichert! 💪",
    author: "LisaParty",
    role: "Event Enthusiast",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    quote: "4BRO Drinks sind meine erste Wahl für jedes Event! #VONBROS4BROS",
    author: "TimoFresh",
    role: "DJ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    gradient: "from-cyan-500 to-purple-500"
  },
  {
    quote: "Die Community Events sind immer der absolute Wahnsinn! Beste Vibes! ❤️",
    author: "JuliaVibe",
    role: "Influencer",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote: "Endlich ein Energy Drink der nicht künstlich schmeckt! 🚀",
    author: "DanielCool",
    role: "Lifestyle Blogger",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    quote: "Die 4BRO Events sind legendär! Immer dabei! 🎉",
    author: "SarahParty",
    role: "Event Photographer",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    quote: "Mit der APP sammle ich bei jedem Drink Punkte. Genial! 📱",
    author: "NikoBro",
    role: "Party Promoter",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    quote: "Bester Energy Drink für meine Workouts und Parties! 💪",
    author: "MariaFit",
    role: "Fitness Coach",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    quote: "4BRO ist mehr als ein Drink - es ist ein Lifestyle! 💯",
    author: "LukasLife",
    role: "Party Host",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    gradient: "from-purple-500 to-cyan-500"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15),transparent_50%)]"></div>
      
      <div className="max-w-[80%] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Squad Reviews</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Was die 4BRO Community sagt 🔥
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative"
            >
              <motion.div
                className="h-full p-8 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)"
                }}
              >
                <Quote className="w-10 h-10 text-purple-500 mb-4 opacity-50" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-purple-500 text-purple-500" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 text-lg">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} blur-md opacity-50`}></div>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="relative w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}