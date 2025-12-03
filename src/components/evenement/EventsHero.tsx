import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Award,
  Zap,
  Sparkles,
  TrendingUp,
  Target,
} from "lucide-react";

const EventsHero: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      value: "30+",
      label: "Événements/an",
      gradient: "from-primary-500 to-accent-500",
    },
    {
      icon: Users,
      value: "200+",
      label: "Participants",
      gradient: "from-accent-500 to-primary-600",
    },
    {
      icon: Award,
      value: "100%",
      label: "Gratuits",
      gradient: "from-primary-600 to-accent-600",
    },
  ];

  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-primary-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbes animés */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -left-1/4 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-primary-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/4 -right-1/4 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-accent-400 rounded-full blur-3xl"
        />

        {/* Floating Icons */}
        {[Calendar, Users, Award, Zap, Target, TrendingUp].map(
          (Icon, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(index) * 20, 0],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + index * 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
              className="absolute text-primary-300"
              style={{
                top: `${20 + index * 15}%`,
                left: `${10 + index * 12}%`,
              }}
            >
              <Icon className="w-12 h-12 lg:w-16 lg:h-16" />
            </motion.div>
          )
        )}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,142,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,142,60,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-primary-200/50 mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Calendar className="w-5 h-5 text-primary-600" />
            </motion.div>
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Nos Événements
            </span>
            <Sparkles className="w-5 h-5 text-accent-500 animate-pulse" />
          </motion.div>

          {/* Titre Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <span className="block text-gray-900 mb-2">Participez à nos</span>
            <span className="block bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent animate-gradient">
              événements tech ! 🚀
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Hackathons, workshops, formations, conférences... Découvrez tous nos
            événements et rejoignez la communauté tech de l'UASZ !
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              <span>Voir tous les événements</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border-2 border-primary-200 text-gray-900 font-bold rounded-xl hover:border-primary-400 transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-xl"
            >
              <Zap className="w-5 h-5 text-primary-600" />
              <span>Événements à venir</span>
            </motion.button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="relative p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient background au hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 shadow-lg`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Value */}
                  <div
                    className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-semibold text-gray-600">
                    {stat.label}
                  </div>

                  {/* Decorative corner */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-bl-3xl transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
            >
              <span className="text-sm font-medium">Défiler vers le bas</span>
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

      {/* Decorative wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 lg:h-32 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
          fill="currentColor"
        >
          <path d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default EventsHero;
