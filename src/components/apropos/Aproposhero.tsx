import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Users,
  Rocket,
  Heart,
  Code,
  Target,
  TrendingUp,
} from "lucide-react";

const AProposHero: React.FC = () => {
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orbes animés */}
        <motion.div
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-primary-500 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-accent-500 rounded-full blur-3xl"
        />

        {/* Icons flottants avec parallax */}
        {[Code, Users, Rocket, Heart, Target, TrendingUp].map((Icon, i) => (
          <motion.div
            key={i}
            style={{
              y: useTransform(scrollY, [0, 500], [0, (i + 1) * 50]),
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute text-white/20"
            style={{
              top: `${20 + i * 12}%`,
              left: `${15 + i * 10}%`,
            }}
          >
            <Icon className="w-16 h-16 lg:w-24 lg:h-24" />
          </motion.div>
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 shadow-2xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-accent-400" />
            </motion.div>
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              À Propos de Nous
            </span>
          </motion.div>

          {/* Titre avec effet 3D */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          >
            <motion.span
              className="block text-white mb-3"
              style={{
                textShadow: "0 0 80px rgba(56, 142, 60, 0.5)",
              }}
            >
              Club Informatique
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              UASZ 🚀
            </motion.span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Plus qu'un club, une{" "}
            <span className="text-primary-400 font-black">famille</span> de
            passionnés qui façonnent{" "}
            <span className="text-accent-400 font-black">l'avenir</span> de la
            tech au Sénégal
          </motion.p>

          {/* Stats cards en 3D */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            {[
              {
                icon: Users,
                value: "200+",
                label: "Membres",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Rocket,
                value: "6",
                label: "Ans d'histoire",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Code,
                value: "50+",
                label: "Projets",
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
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  z: 50,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="group relative"
              >
                <div className="relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 overflow-hidden">
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
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
                  <div className="text-sm font-semibold text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
            >
              <span className="text-sm font-medium">
                Découvrir notre histoire
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
      </motion.div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 lg:h-32 text-white"
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

export default AProposHero;
