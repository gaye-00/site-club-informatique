import React from "react";
import { motion } from "framer-motion";
import { Crown, Star, Award, TrendingUp, Calendar, Quote } from "lucide-react";

interface President {
  id: number;
  name: string;
  mandate: string;
  level: string;
  photo: string;
  status: "future" | "current" | "past";
  quote: string;
  achievements: string[];
  color: string;
}

interface PresidentsRoadmapProps {
  presidents: President[];
}

const PresidentsRoadmap: React.FC<PresidentsRoadmapProps> = ({
  presidents,
}) => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-primary-50 to-accent-50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-300 rounded-full blur-3xl"
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
            <Crown className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Nos Leaders
            </span>
            <Star className="w-5 h-5 text-accent-500 animate-pulse" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Les présidents qui ont{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              marqué l'histoire
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Du futur au passé, découvrez ceux qui ont façonné et façonneront
            notre club
          </p>
        </motion.div>

        {/* Timeline Verticale */}
        <div className="max-w-6xl mx-auto relative">
          {/* Ligne centrale - visible uniquement sur desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 via-primary-300 via-accent-300 to-gray-300 hidden lg:block -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-16 lg:space-y-24">
            {presidents.map((president, index) => {
              const isLeft = index % 2 === 0;
              const StatusIcon =
                president.status === "future"
                  ? TrendingUp
                  : president.status === "current"
                  ? Crown
                  : Award;

              return (
                <motion.div
                  key={president.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`group relative p-8 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${
                        president.status === "current"
                          ? "border-primary-500"
                          : "border-gray-200/50"
                      } overflow-hidden ${
                        isLeft
                          ? "lg:text-right lg:ml-auto"
                          : "lg:text-left lg:mr-auto"
                      }`}
                    >
                      {/* Gradient background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${president.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      {/* Status Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 shadow-lg ${
                          president.status === "future"
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                            : president.status === "current"
                            ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white animate-pulse"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        <StatusIcon className="w-4 h-4" />
                        <span className="text-sm font-bold">
                          {president.status === "future"
                            ? "À venir"
                            : president.status === "current"
                            ? "Président actuel"
                            : "Ancien président"}
                        </span>
                      </div>

                      {/* Mandate */}
                      <div
                        className={`flex items-center gap-2 mb-3 ${
                          isLeft ? "lg:justify-end" : "lg:justify-start"
                        }`}
                      >
                        <Calendar className="w-4 h-4 text-primary-600" />
                        <span className="text-sm font-bold text-gray-600">
                          {president.mandate}
                        </span>
                        <span className="px-2 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-bold">
                          {president.level}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">
                        {president.name}
                      </h3>

                      {/* Quote */}
                      <div className="relative mb-6">
                        <Quote
                          className={`w-8 h-8 text-primary-200 mb-2 ${
                            isLeft ? "lg:ml-auto" : ""
                          }`}
                        />
                        <p className="text-gray-700 italic leading-relaxed">
                          "{president.quote}"
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase text-gray-500 tracking-wider">
                          Réalisations clés
                        </h4>
                        {president.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className={`flex items-start gap-3 ${
                              isLeft ? "lg:flex-row-reverse lg:text-right" : ""
                            }`}
                          >
                            <div
                              className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${president.color} flex-shrink-0`}
                            />
                            <span className="text-sm text-gray-700 leading-relaxed">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Decorative corner */}
                      <div
                        className={`absolute ${
                          isLeft ? "top-0 left-0" : "top-0 right-0"
                        } w-32 h-32 bg-gradient-to-br ${
                          president.color
                        } opacity-0 group-hover:opacity-10 ${
                          isLeft ? "rounded-br-3xl" : "rounded-bl-3xl"
                        } transition-opacity duration-500`}
                      />
                    </motion.div>
                  </div>

                  {/* Center - Photo & Dot */}
                  <div className="flex lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 justify-center lg:block z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative"
                    >
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${president.color} blur-xl opacity-50 animate-pulse`}
                      />

                      {/* Photo container */}
                      <div
                        className={`relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 ${
                          president.status === "current"
                            ? "border-primary-500"
                            : "border-white"
                        } shadow-2xl bg-white`}
                      >
                        <img
                          src={president.photo}
                          alt={president.name}
                          className="w-full h-full object-cover"
                        />

                        {/* Overlay gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${president.color} opacity-0 hover:opacity-30 transition-opacity duration-300`}
                        />
                      </div>

                      {/* Status icon badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + 0.5,
                          type: "spring",
                        }}
                        className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br ${president.color} flex items-center justify-center shadow-xl border-4 border-white`}
                      >
                        <StatusIcon className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Pulse animation pour président actuel */}
                      {president.status === "current" && (
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="absolute inset-0 rounded-full border-4 border-primary-500"
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Empty space for alternation */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to action pour futur président */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl border border-purple-200/50 max-w-2xl">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex p-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4 shadow-lg"
            >
              <Crown className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-2xl font-black text-gray-900 mb-3">
              Vous êtes le{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                prochain président ?
              </span>
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez le club, impliquez-vous dans les projets et écrivez le
              prochain chapitre de notre histoire ! 🚀
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <Star className="w-5 h-5" />
              <span>Rejoindre le bureau</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PresidentsRoadmap;
