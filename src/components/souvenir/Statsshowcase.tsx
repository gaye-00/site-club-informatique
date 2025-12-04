import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Heart,
  Users,
  Calendar,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface Memory {
  id: number;
  event: string;
  category: string;
  date: string;
  images: string[];
  color: string;
}

interface StatsShowcaseProps {
  memories: Memory[];
}

const StatsShowcase: React.FC<StatsShowcaseProps> = ({ memories }) => {
  const totalPhotos = memories.reduce((acc, m) => acc + m.images.length, 0);

  const stats = [
    {
      icon: Camera,
      value: totalPhotos,
      label: "Photos Capturées",
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
      description: "Chaque instant immortalisé",
    },
    {
      icon: Calendar,
      value: memories.length,
      label: "Événements Mémorables",
      suffix: "",
      color: "from-purple-500 to-pink-500",
      description: "Des moments inoubliables",
    },
    {
      icon: Users,
      value: 300,
      label: "Participants Actifs",
      suffix: "+",
      color: "from-orange-500 to-red-500",
      description: "Une communauté engagée",
    },
    {
      icon: Heart,
      value: 100,
      label: "Passionnés Réunis",
      suffix: "%",
      color: "from-primary-500 to-accent-500",
      description: "L'esprit du club",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Excellence en Image",
      description: "Collection premium de souvenirs",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Sparkles,
      title: "Moments Magiques",
      description: "Chaque photo raconte une histoire",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Croissance Continue",
      description: "Notre galerie s'enrichit chaque jour",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-accent-50 to-primary-50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-primary-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.06, 0.12, 0.06],
            rotate: [180, 90, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 lg:w-[500px] lg:h-[500px] bg-accent-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-xl rounded-full border border-primary-200/50 mb-6 shadow-lg"
          >
            <TrendingUp className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Nos Chiffres
            </span>
            <Sparkles className="w-5 h-5 text-accent-500 animate-pulse" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            L'impact de nos{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              souvenirs
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Des chiffres qui témoignent de notre passion pour capturer chaque
            instant mémorable
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Value avec animation compteur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className={`text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                  {stat.suffix}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </p>

                {/* Corner decoration */}
                <div
                  className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${stat.color} opacity-0 group-hover:opacity-10 rounded-tl-3xl transition-opacity duration-500`}
                />

                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl`}
                  initial={{ boxShadow: `0 0 0px transparent` }}
                  whileHover={{
                    boxShadow: `0 0 30px rgba(56, 142, 60, 0.3)`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 text-center overflow-hidden">
                  {/* Gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${achievement.color} mb-4 shadow-md`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-lg font-black text-gray-900 mb-2">
                    {achievement.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-2xl font-black text-gray-900 mb-6">
            Et ce n'est que le{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              début ! 🚀
            </span>
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chaque nouvel événement ajoute de nouveaux souvenirs à notre
            collection. Rejoignez-nous pour faire partie de cette aventure !
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsShowcase;
