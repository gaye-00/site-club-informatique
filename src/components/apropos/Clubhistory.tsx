import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Award,
  Users,
  Rocket,
  TrendingUp,
  Sparkles,
  Code,
  Target,
} from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  achievements: string[];
}

const ClubHistory: React.FC = () => {
  const milestones: Milestone[] = [
    {
      year: "2013",
      title: "La Naissance",
      description: "Fondation du Club Informatique UASZ",
      icon: Rocket,
      color: "from-gray-500 to-slate-600",
      achievements: [
        "Samedi 26 Janvier 2013: Création officielle du club",
        "Premiers membres fondateurs",
        "Établissement de la vision",
      ],
    },
    {
      year: "2019",
      title: "Consolidation",
      description: "Structuration et premiers événements",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      achievements: [
        "Premier grand événement",
        "Croissance des membres",
        "Partenariats initiaux",
      ],
    },
    {
      year: "2020",
      title: "Résilience",
      description: "Adaptation face aux défis",
      icon: Target,
      color: "from-indigo-500 to-purple-500",
      achievements: [
        "Passage au digital",
        "Ateliers en ligne",
        "Maintien de la communauté",
      ],
    },
    {
      year: "2021",
      title: "Expansion",
      description: "Croissance et diversification",
      icon: TrendingUp,
      color: "from-yellow-500 to-orange-500",
      achievements: [
        "Nouveaux formats d'événements",
        "Projets collaboratifs",
        "Réseau inter-universitaire",
      ],
    },
    {
      year: "2022",
      title: "Innovation",
      description: "Projets tech et formations avancées",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      achievements: [
        "Bootcamps intensifs",
        "Projets open-source",
        "Hackathons réguliers",
      ],
    },
    {
      year: "2023",
      title: "Excellence",
      description: "Rayonnement et reconnaissance",
      icon: Award,
      color: "from-orange-500 to-red-500",
      achievements: [
        "Prix et reconnaissances",
        "Partenariats majeurs",
        "Projets d'envergure",
      ],
    },
    {
      year: "2024",
      title: "Modernisation",
      description: "Digitalisation et innovation continue",
      icon: Sparkles,
      color: "from-primary-500 to-accent-500",
      achievements: [
        "Nouveau site web",
        "Processus digitalisés",
        "Vision 2025",
      ],
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary-300 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-primary-200/50 mb-6 shadow-lg"
          >
            <Calendar className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Notre Histoire
            </span>
            <Sparkles className="w-5 h-5 text-accent-500 animate-pulse" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            6 ans d'{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              innovation
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Depuis 2018, nous écrivons l'histoire de la tech à l'UASZ, une année
            à la fois
          </p>
        </motion.div>

        {/* Timeline Scrollable Horizontale sur mobile, Vertical sur desktop */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop: Vertical Timeline */}
          <div className="hidden lg:block relative">
            {/* Ligne centrale verticale */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-accent-300 to-primary-300 -translate-x-1/2" />

            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-center gap-8`}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`p-8 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 ${
                        index % 2 === 0
                          ? "text-right ml-auto"
                          : "text-left mr-auto"
                      }`}
                    >
                      {/* Year badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white font-black text-2xl mb-4 shadow-lg`}
                      >
                        <Calendar className="w-6 h-6" />
                        {milestone.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-black text-gray-900 mb-3">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 text-lg">
                        {milestone.description}
                      </p>

                      {/* Achievements */}
                      <div
                        className={`space-y-2 ${
                          index % 2 === 0 ? "text-right" : "text-left"
                        }`}
                      >
                        {milestone.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{
                              opacity: 0,
                              x: index % 2 === 0 ? -20 : 20,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className={`flex items-center gap-2 ${
                              index % 2 === 0 ? "justify-end" : "justify-start"
                            }`}
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${milestone.color}`}
                            />
                            <span className="text-sm text-gray-700">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.3 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} shadow-xl flex items-center justify-center border-4 border-white`}
                    >
                      <milestone.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Empty space for alternation */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto pb-8 -mx-4 px-4">
            <div className="flex gap-6 min-w-max">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-80 flex-shrink-0"
                >
                  <div className="p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 h-full">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${milestone.color} mb-4 shadow-lg`}
                    >
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Year */}
                    <div
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white font-black text-xl mb-3`}
                    >
                      {milestone.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-gray-900 mb-2">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">
                      {milestone.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {milestone.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${milestone.color}`}
                          />
                          <span className="text-sm text-gray-700">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubHistory;
