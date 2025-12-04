import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Lightbulb,
  Trophy,
  Handshake,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";

interface Value {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  details: string[];
}

const ClubValues: React.FC = () => {
  const values: Value[] = [
    {
      id: 1,
      icon: Heart,
      title: "Passion",
      description: "L'amour de la technologie qui nous anime",
      color: "from-red-500 to-pink-500",
      details: [
        "Enthousiasme contagieux",
        "Motivation intrinsèque",
        "Apprentissage continu",
      ],
    },
    {
      id: 2,
      icon: Users,
      title: "Communauté",
      description: "Ensemble, nous sommes plus forts",
      color: "from-primary-500 to-accent-500",
      details: [
        "Entraide mutuelle",
        "Esprit d'équipe",
        "Inclusion et diversité",
      ],
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Innovation",
      description: "Oser explorer de nouveaux horizons",
      color: "from-yellow-500 to-orange-500",
      details: [
        "Créativité encouragée",
        "Technologies émergentes",
        "Solutions novatrices",
      ],
    },
    {
      id: 4,
      icon: Trophy,
      title: "Excellence",
      description: "La qualité dans tout ce que nous faisons",
      color: "from-blue-500 to-cyan-500",
      details: [
        "Standards élevés",
        "Rigueur professionnelle",
        "Amélioration continue",
      ],
    },
    {
      id: 5,
      icon: Handshake,
      title: "Partage",
      description: "Transmettre nos connaissances",
      color: "from-purple-500 to-pink-500",
      details: [
        "Mentorat actif",
        "Documentation ouverte",
        "Formations gratuites",
      ],
    },
    {
      id: 6,
      icon: Zap,
      title: "Impact",
      description: "Créer un changement positif",
      color: "from-orange-500 to-red-500",
      details: [
        "Projets concrets",
        "Responsabilité sociale",
        "Transformation digitale",
      ],
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-primary-50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hexagons flottants */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
            }}
          >
            <svg viewBox="0 0 100 100" className="text-primary-300">
              <polygon
                points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25"
                fill="currentColor"
              />
            </svg>
          </motion.div>
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
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-xl rounded-full border border-primary-200/50 mb-6 shadow-lg"
          >
            <Target className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Nos Valeurs
            </span>
            <Sparkles className="w-5 h-5 text-accent-500 animate-pulse" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Ce qui nous{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              définit
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Les principes fondamentaux qui guident chacune de nos actions et
            nous unissent en tant que communauté
          </p>
        </motion.div>

        {/* Values Grid - Hexagonal Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
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
                {/* Hexagonal container */}
                <div className="relative aspect-square">
                  {/* Background hexagon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${value.color} opacity-10 rounded-3xl`}
                      style={{
                        clipPath:
                          "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
                      }}
                    />
                  </motion.div>

                  {/* Content card */}
                  <div className="absolute inset-4 flex flex-col items-center justify-center text-center p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-200/50">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`p-5 rounded-2xl bg-gradient-to-br ${value.color} mb-4 shadow-lg`}
                    >
                      <value.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3
                      className={`text-2xl font-black mb-3 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}
                    >
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 w-full">
                      {value.details.map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-center gap-2 text-left"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${value.color}`}
                          />
                          <span className="text-xs text-gray-700 font-medium">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Decorative elements */}
                    <motion.div
                      className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity shadow-lg`}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 max-w-4xl mx-auto"
        >
          <div className="p-8 bg-gradient-to-br from-white to-primary-50 rounded-3xl shadow-xl border border-primary-200/50">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 mb-4 shadow-lg"
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-2xl font-black text-gray-900 mb-4">
              Ces valeurs sont notre{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                ADN
              </span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Elles ne sont pas de simples mots sur une page, mais des principes
              que nous vivons au quotidien. Chaque membre du club incarne ces
              valeurs et contribue à les faire rayonner dans toute notre
              communauté.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClubValues;
