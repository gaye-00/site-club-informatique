import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Heart,
  Sparkles,
  Image as ImageIcon,
  Calendar,
  Users,
} from "lucide-react";

interface SouvenirHeroProps {
  totalPhotos: number;
}

const SouvenirHero: React.FC<SouvenirHeroProps> = ({ totalPhotos }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-accent-50">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbes animés */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -left-1/4 w-96 h-96 lg:w-[700px] lg:h-[700px] bg-primary-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.3, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/4 -right-1/4 w-96 h-96 lg:w-[700px] lg:h-[700px] bg-accent-400 rounded-full blur-3xl"
        />

        {/* Particules Camera flottantes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.15, 0.35, 0.15],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute text-primary-300"
            style={{
              top: `${15 + i * 6}%`,
              left: `${10 + i * 5}%`,
            }}
          >
            {i % 3 === 0 ? (
              <Camera className="w-8 h-8 lg:w-12 lg:h-12" />
            ) : i % 3 === 1 ? (
              <Heart className="w-6 h-6 lg:w-10 lg:h-10" />
            ) : (
              <Sparkles className="w-7 h-7 lg:w-11 lg:h-11" />
            )}
          </motion.div>
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,142,60,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,142,60,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge animé */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-xl rounded-full border border-primary-200/50 mb-8 shadow-xl"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Camera className="w-5 h-5 text-primary-600" />
            </motion.div>
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Nos Plus Beaux Souvenirs
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-accent-500" />
            </motion.div>
          </motion.div>

          {/* Titre Géant */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          >
            <span className="block text-gray-900 mb-3">Revivez les</span>
            <span className="block bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              moments magiques ✨
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Des centaines de photos capturant l'essence de nos événements et
            l'esprit du Club Informatique UASZ 📸
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto mb-12"
          >
            {[
              {
                icon: ImageIcon,
                value: `${totalPhotos}+`,
                label: "Photos",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Calendar,
                value: "4",
                label: "Événements",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Users,
                value: "300+",
                label: "Moments partagés",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Heart,
                value: "100%",
                label: "Passion",
                color: "from-primary-500 to-accent-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="relative p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 shadow-lg`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Value */}
                  <div
                    className={`text-3xl lg:text-4xl font-black mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-semibold text-gray-600">
                    {stat.label}
                  </div>

                  {/* Corner decoration */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${stat.color} opacity-0 group-hover:opacity-10 rounded-bl-3xl transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <ImageIcon className="w-6 h-6" />
              <span className="text-lg">Découvrir la galerie</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl"
              >
                →
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
            >
              <span className="text-sm font-medium">
                Défiler pour voir plus
              </span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave transition vers MemoriesTimeline */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 lg:h-32 text-accent-50"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          fill="currentColor"
        >
          <path d="M0,60 Q360,120 720,60 T1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default SouvenirHero;
