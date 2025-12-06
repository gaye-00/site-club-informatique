import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Target,
  TrendingUp,
  Globe,
  Sparkles,
  Award,
  Users,
  Code,
  Zap,
  ArrowRight,
  X,
  Mail,
  Phone,
  User,
  Heart,
} from "lucide-react";

interface VisionGoal {
  year: string;
  title: string;
  goals: string[];
  icon: React.ElementType;
  color: string;
}

const ClubVision: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roadmap: VisionGoal[] = [
    {
      year: "2025",
      title: "Consolidation & Croissance",
      goals: [
        "Atteindre 300+ membres actifs",
        "Lancer 10+ projets d'envergure",
        "Établir 15+ partenariats stratégiques",
        "Organiser 50+ événements tech",
      ],
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2026",
      title: "Rayonnement National",
      goals: [
        "Devenir le hub tech #1 au Sénégal",
        "Organiser le premier TechFest UASZ",
        "Créer un incubateur de startups",
        "Former 500+ développeurs",
      ],
      icon: Globe,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2027",
      title: "Innovation & Excellence",
      goals: [
        "Lancer notre propre accélérateur",
        "Participer à des compétitions internationales",
        "Développer des solutions pour l'UASZ",
        "Créer des emplois tech",
      ],
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
    {
      year: "2030",
      title: "Leadership Régional",
      goals: [
        "Hub tech de référence en Afrique de l'Ouest",
        "1000+ alumni dans la tech",
        "Écosystème startup florissant",
        "Impact social mesurable",
      ],
      icon: Award,
      color: "from-primary-500 to-accent-500",
    },
  ];

  const pillars = [
    {
      icon: Code,
      title: "Excellence Technique",
      description: "Former les meilleurs développeurs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Communauté Forte",
      description: "Un réseau soudé et engagé",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Innovation Continue",
      description: "Toujours à la pointe",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Target,
      title: "Impact Réel",
      description: "Transformer notre société",
      color: "from-primary-500 to-accent-500",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary-50 via-dark-900 to-dark-800 overflow-hidden">
      {/* Background effects futuristes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid futuriste */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,142,60,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,142,60,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Orbes lumineux */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500 rounded-full blur-3xl"
        />

        {/* Particules flottantes */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
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
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6 shadow-2xl"
          >
            <Rocket className="w-5 h-5 text-accent-400" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Vision 2030
            </span>
            <Sparkles className="w-5 h-5 text-primary-400 animate-pulse" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">
            Notre destination :{" "}
            <span className="block mt-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              l'excellence
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Une vision ambitieuse pour faire du Club Informatique UASZ une
            référence continentale
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmap.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 overflow-hidden">
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Year badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white font-black text-2xl mb-4 shadow-lg`}
                  >
                    <milestone.icon className="w-6 h-6" />
                    {milestone.year}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-white mb-4">
                    {milestone.title}
                  </h3>

                  {/* Goals */}
                  <div className="space-y-3">
                    {milestone.goals.map((goal, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-2"
                      >
                        <div
                          className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${milestone.color} flex-shrink-0`}
                        />
                        <span className="text-sm text-gray-300 leading-tight">
                          {goal}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Corner glow */}
                  <div
                    className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${milestone.color} opacity-0 group-hover:opacity-20 rounded-tl-3xl transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pillars Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
            Les 4 piliers de notre{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              succès
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group"
              >
                <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 text-center hover:shadow-2xl transition-all duration-500">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pillar.color} mb-4 shadow-lg`}
                  >
                    <pillar.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-lg font-black text-white mb-2">
                    {pillar.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-400">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl max-w-3xl">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-flex p-5 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 mb-6 shadow-2xl"
            >
              <Rocket className="w-12 h-12 text-white" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Rejoignez l'aventure
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Cette vision ne se réalisera pas sans vous. Chaque membre compte,
              chaque contribution a un impact. Ensemble, écrivons l'avenir de la
              tech au Sénégal.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <span className="text-lg">Devenir membre</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Wave transition vers Footer */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 lg:h-32 text-dark-800"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          fill="currentColor"
        >
          <path d="M0,60 Q360,120 720,60 T1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* Modal de Contact pour Devenir Membre */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header avec gradient */}
              <div className="relative p-8 bg-gradient-to-br from-primary-500 to-accent-500 text-white overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-2">
                    Rejoignez-nous ! 🎉
                  </h3>
                  <p className="text-white/90 text-sm">
                    Devenez membre du Club Informatique UASZ et faites partie de
                    l'aventure !
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6">
                {/* Info principale */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border-2 border-primary-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900">Contact Club</h4>
                      <p className="text-xs text-gray-600">
                        Pour toute information sur l'adhésion
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    Contactez-nous pour rejoindre le club et profiter de toutes
                    nos activités, formations et événements !
                  </p>

                  {/* Email */}
                  <a
                    href="mailto:uaszclubinformatique@gmail.com"
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] mb-3"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg group-hover:shadow-xl transition-shadow">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Email
                      </div>
                      <div className="font-bold text-gray-900 break-all text-sm">
                        uaszclubinformatique@gmail.com
                      </div>
                    </div>
                  </a>

                  {/* Téléphone */}
                  <a
                    href="tel:+221774952024"
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg group-hover:shadow-xl transition-shadow">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Téléphone
                      </div>
                      <div className="font-bold text-gray-900">
                        +221 77 495 20 24
                      </div>
                    </div>
                  </a>
                </div>

                {/* Avantages d'adhérer */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1 text-sm">
                        Pourquoi nous rejoindre ?
                      </h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>✅ Formations techniques gratuites</li>
                        <li>✅ Accès aux événements et workshops</li>
                        <li>✅ Networking avec passionnés tech</li>
                        <li>✅ Projets collaboratifs innovants</li>
                        <li>✅ Certificats de participation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Note adhésion gratuite */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-green-700">
                    <Heart className="w-5 h-5 fill-current" />
                    <p className="font-bold text-sm">
                      Adhésion 100% GRATUITE pour tous les étudiants UASZ !
                    </p>
                  </div>
                </div>

                {/* Bouton Fermer */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(false)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Compris, merci !
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClubVision;
