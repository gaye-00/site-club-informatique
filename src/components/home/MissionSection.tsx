import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Code2,
  Users,
  Lightbulb,
  Target,
  Rocket,
  Brain,
  Heart,
} from "lucide-react";

const MissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Repousser les limites du possible avec des idées nouvelles et des technologies de pointe",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      glowColor: "shadow-yellow-500/20",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Ensemble, nous sommes plus forts. Partage de connaissances et entraide au quotidien",
      color: "from-primary-500 to-accent-500",
      bgColor: "bg-primary-50",
      borderColor: "border-primary-200",
      glowColor: "shadow-primary-500/20",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "Viser l'excellence dans chaque projet, chaque ligne de code, chaque apprentissage",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      glowColor: "shadow-blue-500/20",
    },
    {
      icon: Brain,
      title: "Apprentissage",
      description:
        "Apprendre continuellement, évoluer constamment, grandir ensemble",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      glowColor: "shadow-pink-500/20",
    },
  ];

  // Floating code snippets
  const codeSnippets = [
    "function innovate() {",
    "const passion = true;",
    "while(learning) {",
    "return success;",
    "} // keep coding",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #0C1223 0%, #1E293B 20%, #F8FAFC 50%, #FFFFFF 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Code Snippets */}
        {codeSnippets.map((code, index) => (
          <motion.div
            key={index}
            className="absolute text-primary-400/10 font-mono text-sm md:text-base font-bold"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [0, 0.3, 0.3, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Infinity,
              delay: index * 2,
              ease: "linear",
            }}
            style={{
              left: `${index * 20 + 10}%`,
            }}
          >
            {code}
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 -left-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 142, 60, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 142, 60, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-200/50 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">
              Notre Mission
            </span>
          </motion.div>

          {/* Main Title with Gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-white">Transformer </span>
            <span className="block mt-2 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-600 bg-clip-text text-transparent">
              La Passion en Expertise
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-dark-100 leading-relaxed max-w-3xl mx-auto"
          >
            Au Club Informatique de l'Université Assane Seck de Ziguinchor, nous
            formons la
            <span className="text-primary-400 font-semibold">
              {" "}
              prochaine génération{" "}
            </span>
            de développeurs, innovateurs et leaders technologiques du Sénégal.
          </motion.p>

          {/* Animated Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-32 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* Mission Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-24"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Card */}
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl border border-white/50">
              <div className="flex items-start space-x-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                >
                  <Rocket className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark-800 mb-4">
                    Notre Vision
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Nous croyons que{" "}
                    <span className="text-primary-600 font-semibold">
                      chaque étudiant
                    </span>{" "}
                    peut devenir un acteur du changement technologique. À
                    travers des{" "}
                    <span className="text-accent-600 font-semibold">
                      workshops interactifs
                    </span>
                    , des{" "}
                    <span className="text-primary-600 font-semibold">
                      projets collaboratifs
                    </span>{" "}
                    et une communauté soudée, nous construisons ensemble
                    l'écosystème tech de demain.
                  </p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-neutral-200">
                {[
                  { value: "200+", label: "Membres" },
                  { value: "💻+", label: "Projets" },
                  { value: "30+", label: "Événements" },
                  { value: "100%", label: "Passion" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-tertiary uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
              Nos Valeurs Fondamentales
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Les piliers qui guident notre communauté et nos actions au
              quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Glow on Hover */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  {/* Card */}
                  <div
                    className={`relative ${value.bgColor} rounded-2xl p-6 border-2 ${value.borderColor} hover:border-transparent transition-all duration-300 h-full shadow-lg hover:shadow-2xl ${value.glowColor}`}
                  >
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-dark-800 mb-3 group-hover:text-primary-600 transition-colors">
                      {value.title}
                    </h4>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {value.description}
                    </p>

                    {/* Decorative Element */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} rounded-b-2xl`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center mt-20"
        >
          <div className="flex items-center justify-center space-x-2 text-primary-600 mb-4">
            <Heart className="w-5 h-5 fill-current" />
            <Code2 className="w-5 h-5" />
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <p className="text-lg md:text-xl text-text-secondary italic">
            "Ensemble, nous ne codons pas seulement des applications, nous
            codons notre avenir"
          </p>
          <p className="text-sm text-text-tertiary mt-2">
            — Club Informatique UASZ
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
};

export default MissionSection;
