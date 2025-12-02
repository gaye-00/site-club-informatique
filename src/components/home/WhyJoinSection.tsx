import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  Code,
  Rocket,
  Users,
  Calendar,
  Award,
  BookOpen,
  Lightbulb,
  Zap,
  ArrowRight,
  TrendingUp,
  Trophy,
  X,
  Phone,
  Mail,
} from "lucide-react";

const WhyJoinSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Configuration du scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // OPTIMISATION CHROME : Lissage du scroll avec useSpring
  // Cela élimine l'effet saccadé sur Chrome/Edge en ajoutant de la physique au scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Animations basées sur le scroll lissé
  const darkCardY = useTransform(smoothProgress, [0, 1], ["100%", "0%"]);
  // On accélère un peu l'opacité pour éviter le scintillement
  const darkCardOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);

  const whiteContentScale = useTransform(smoothProgress, [0, 1], [1, 0.92]); // Réduit légèrement moins pour éviter le flou
  const whiteContentOpacity = useTransform(smoothProgress, [0.7, 1], [1, 0]);

  // Données
  const topFeatures = [
    {
      icon: Code,
      title: "Compétences Tech",
      description: "Maîtrise des langages modernes",
      iconBg: "bg-primary-50",
      iconColor: "text-primary-600",
      stat: "10+",
    },
    {
      icon: Rocket,
      title: "Projets Réels",
      description: "Expérience pratique concrète",
      iconBg: "bg-accent-50",
      iconColor: "text-accent-600",
      stat: "50+",
    },
    {
      icon: Users,
      title: "Communauté Active",
      description: "Réseau de passionnés et experts",
      iconBg: "bg-primary-50",
      iconColor: "text-primary-700",
      stat: "200+",
    },
    {
      icon: Calendar,
      title: "Événements",
      description: "Hackathons et conférences",
      iconBg: "bg-accent-50",
      iconColor: "text-accent-700",
      stat: "30+",
    },
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Membres", color: "text-primary-600" },
    { icon: Trophy, value: "50+", label: "Projets", color: "text-accent-600" },
    {
      icon: Calendar,
      value: "30+",
      label: "Events",
      color: "text-primary-700",
    },
    { icon: Award, value: "#1", label: "UASZ", color: "text-accent-700" },
  ];

  const bottomFeatures = [
    {
      icon: BookOpen,
      title: "Apprentissage",
      description: "Formation continue",
      gradient: "from-primary-500 to-primary-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Idées créatives",
      gradient: "from-accent-500 to-accent-600",
    },
    {
      icon: Zap,
      title: "Rapidité",
      description: "Évolution rapide",
      gradient: "from-primary-600 to-accent-500",
    },
    {
      icon: TrendingUp,
      title: "Croissance",
      description: "Carrière Tech",
      gradient: "from-accent-600 to-primary-700",
    },
  ];

  return (
    <section
      ref={containerRef}
      // FUSION VISUELLE : Le gradient commence par accent-50 pour matcher la fin de MemoriesGallery
      className="relative h-[150vh] bg-gradient-to-b from-accent-50 via-white to-dark-900"
    >
      {/* Élément de transition douce en haut */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-accent-50 to-transparent pointer-events-none z-10" />

      {/* Container Sticky */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-1000">
        {/* --- CARTE BLANCHE (ARRIÈRE-PLAN) --- */}
        <motion.div
          style={{
            scale: whiteContentScale,
            opacity: whiteContentOpacity,
            willChange: "transform, opacity", // Optimisation GPU
          }}
          className="absolute inset-2 md:inset-4 lg:inset-6 max-w-7xl mx-auto z-0 origin-center"
        >
          <div className="relative h-full w-full bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col transform-gpu">
            {/* Décorations optimisées */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 will-change-transform" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-50 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2 will-change-transform" />

            <div className="flex-1 flex flex-col justify-between p-6 lg:p-10 relative z-10">
              {/* En-tête */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center shrink-0"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-50 rounded-full mb-3 border border-neutral-200">
                  <Award className="w-4 h-4 text-primary-600" />
                  <span className="text-xs font-bold text-primary-700 uppercase tracking-wider">
                    Excellence Informatique
                  </span>
                </div>

                <h2 className="text-3xl lg:text-5xl font-black text-dark-800 leading-tight mb-2">
                  Pourquoi{" "}
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Nous Rejoindre?
                  </span>
                </h2>

                <p className="text-sm lg:text-base text-text-secondary font-medium max-w-md mx-auto">
                  Le club informatique de référence à l'UASZ
                </p>
              </motion.div>

              {/* Grille Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 py-2">
                {topFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{
                      scale: 1.01,
                      backgroundColor: "rgba(249, 250, 251, 0.8)",
                    }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-100 hover:border-primary-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 shrink-0 ${feature.iconBg} rounded-xl flex items-center justify-center`}
                    >
                      <feature.icon
                        className={`w-6 h-6 ${feature.iconColor}`}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <h3 className="font-bold text-dark-800 text-sm lg:text-base truncate">
                          {feature.title}
                        </h3>
                        <span className="text-xs font-black text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                          {feature.stat}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary truncate font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-2 shrink-0 border-t border-neutral-100 pt-4 mt-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`text-2xl lg:text-3xl font-black ${stat.color}`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[10px] lg:text-xs font-bold text-text-tertiary uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- CARTE DARK (AVANT-PLAN) --- */}
        <motion.div
          style={{
            y: darkCardY,
            opacity: darkCardOpacity,
            willChange: "transform, opacity", // Optimisation GPU
          }}
          className="absolute inset-2 md:inset-4 lg:inset-6 max-w-7xl mx-auto z-10"
        >
          <div className="relative h-full w-full bg-dark-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-dark-700 flex flex-col transform-gpu">
            {/* Background subtil pour la performance */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-dark-950/50 pointer-events-none" />

            {/* Effet lumineux central statique (moins couteux que l'animé) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[120px]" />

            <div className="flex-1 flex flex-col justify-center items-center p-6 lg:p-12 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h3 className="text-3xl lg:text-5xl font-black text-white mb-3">
                  Engagement{" "}
                  <span className="text-primary-500">Excellence</span>
                </h3>
                <p className="text-dark-200 text-sm lg:text-base max-w-lg mx-auto font-medium">
                  L'excellence en informatique, sans compromis sur la qualité et
                  l'innovation.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 w-full max-w-3xl mb-10">
                {bottomFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors group"
                  >
                    <div
                      className={`w-12 h-12 mb-3 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bold text-white text-base mb-1">
                      {feature.title}
                    </div>
                    <div className="text-xs text-dark-300">
                      {feature.description}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="relative px-8 py-4 bg-primary-600 text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-primary-900/50 hover:bg-primary-500 transition-all group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Rejoindre le Club
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal Contact */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                <X className="w-5 h-5 text-neutral-600" />
              </button>

              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>

                <h3 className="text-2xl font-black text-dark-900 mb-2">
                  Rejoignez-nous !
                </h3>
                <p className="text-text-secondary mb-8 text-sm">
                  Contactez-nous pour toutes les informations.
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+221774952024"
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary-200 hover:bg-white transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-text-tertiary uppercase">
                        Téléphone
                      </div>
                      <div className="font-bold text-dark-900 group-hover:text-primary-600">
                        +221 77 495 20 24
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:uaszclubinformatique@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-accent-200 hover:bg-white transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left overflow-hidden">
                      <div className="text-xs font-bold text-text-tertiary uppercase">
                        Email
                      </div>
                      <div className="font-bold text-dark-900 group-hover:text-accent-600 truncate">
                        uaszclubinformatique@gmail.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhyJoinSection;
