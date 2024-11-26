import React from 'react';
import { Twitch, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SocialCTA() {
  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      label: "Instagram",
      href: "#",
      gradient: "from-pink-500 to-purple-500",
      delay: 0.1
    },
    {
      icon: <Twitch size={24} />,
      label: "Twitch",
      href: "#",
      gradient: "from-purple-500 to-blue-500",
      delay: 0.2
    },
    {
      icon: <Youtube size={24} />,
      label: "YouTube",
      href: "#",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.3
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_50%)]"></div>
      
      <div className="max-w-[80%] mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Join the Movement 🚀</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Folge uns für die neuesten Drops, exklusive Events und die besten Vibes der 4BRO Community!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: social.delay }}
            >
              <motion.div
                className={`flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r ${social.gradient} hover:glow transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="group-hover:rotate-12 transition-transform duration-300">
                  {social.icon}
                </span>
                <span className="font-medium">{social.label}</span>
              </motion.div>
            </motion.a>
          ))}
        </div>

        <motion.p 
          className="mt-12 text-gray-400 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          #VONBROS4BROS – Sei Teil der Community und verpasse keine News! 🎉
        </motion.p>
      </div>
    </section>
  );
}