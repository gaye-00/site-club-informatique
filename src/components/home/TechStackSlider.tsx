import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code, Cpu, Zap } from "lucide-react";

interface Technology {
  name: string;
  logo: string; // URL du logo
  category: string; // Type de techno
  color: string; // Couleur de la marque
}

const TechStackSlider: React.FC = () => {
  // Technologies et langages de programmation
  const technologies: Technology[] = [
    // Langages
    {
      name: "Python",
      logo: "https://cdn.simpleicons.org/python/3776AB",
      category: "Langage",
      color: "#3776AB",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
      category: "Langage",
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.simpleicons.org/typescript/3178C6",
      category: "Langage",
      color: "#3178C6",
    },
    {
      name: "Java",
      logo: "https://cdn.simpleicons.org/openjdk/000000",
      category: "Langage",
      color: "#ED8B00",
    },
    {
      name: "C++",
      logo: "https://cdn.simpleicons.org/cplusplus/00599C",
      category: "Langage",
      color: "#00599C",
    },
    {
      name: "PHP",
      logo: "https://cdn.simpleicons.org/php/777BB4",
      category: "Langage",
      color: "#777BB4",
    },
    {
      name: "Go",
      logo: "https://cdn.simpleicons.org/go/00ADD8",
      category: "Langage",
      color: "#00ADD8",
    },
    {
      name: "Rust",
      logo: "https://cdn.simpleicons.org/rust/000000",
      category: "Langage",
      color: "#000000",
    },
    // Frameworks Frontend
    {
      name: "React",
      logo: "https://cdn.simpleicons.org/react/61DAFB",
      category: "Framework",
      color: "#61DAFB",
    },
    {
      name: "Vue.js",
      logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
      category: "Framework",
      color: "#4FC08D",
    },
    {
      name: "Angular",
      logo: "https://cdn.simpleicons.org/angular/DD0031",
      category: "Framework",
      color: "#DD0031",
    },
    {
      name: "Next.js",
      logo: "https://cdn.simpleicons.org/nextdotjs/000000",
      category: "Framework",
      color: "#000000",
    },
    // Frameworks Backend
    {
      name: "Node.js",
      logo: "https://cdn.simpleicons.org/nodedotjs/339933",
      category: "Runtime",
      color: "#339933",
    },
    {
      name: "Django",
      logo: "https://cdn.simpleicons.org/django/092E20",
      category: "Framework",
      color: "#092E20",
    },
    {
      name: "Flask",
      logo: "https://cdn.simpleicons.org/flask/000000",
      category: "Framework",
      color: "#000000",
    },
    {
      name: "Laravel",
      logo: "https://cdn.simpleicons.org/laravel/FF2D20",
      category: "Framework",
      color: "#FF2D20",
    },
    // Outils & DevOps
    {
      name: "Git",
      logo: "https://cdn.simpleicons.org/git/F05032",
      category: "Outil",
      color: "#F05032",
    },
    {
      name: "Docker",
      logo: "https://cdn.simpleicons.org/docker/2496ED",
      category: "DevOps",
      color: "#2496ED",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.simpleicons.org/kubernetes/326CE5",
      category: "DevOps",
      color: "#326CE5",
    },
    {
      name: "VS Code",
      logo: "https://cdn.simpleicons.org/visualstudiocode/007ACC",
      category: "Outil",
      color: "#007ACC",
    },
    // Bases de données
    {
      name: "MySQL",
      logo: "https://cdn.simpleicons.org/mysql/4479A1",
      category: "Database",
      color: "#4479A1",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.simpleicons.org/postgresql/4169E1",
      category: "Database",
      color: "#4169E1",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.simpleicons.org/mongodb/47A248",
      category: "Database",
      color: "#47A248",
    },
    {
      name: "Redis",
      logo: "https://cdn.simpleicons.org/redis/DC382D",
      category: "Database",
      color: "#DC382D",
    },
  ];

  // Dupliquer pour défilement infini fluide
  const duplicatedTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <section
      // MODIFICATION ICI : Démarrage en dark-900 pour la fusion, puis transition vers le blanc
      className="relative py-20 lg:py-28 bg-gradient-to-b from-dark-900 via-dark-800 to-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs (ajustement des couleurs pour le fond sombre/clair) */}
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary-200/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float"></div>
        <div
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent-200/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Grid pattern (ajustement de l'opacité et de la couleur pour le fond sombre) */}
        <div
          className="absolute inset-0 opacity-[0.08]" // Opacité légèrement augmentée
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Radial gradient overlay pour aider la transition au centre */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-900/10 to-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            // Ajustement des couleurs du badge pour être lisible sur fond sombre
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 shadow-xl"
          >
            <Code className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Technologies Maîtrisées
            </span>
            <Sparkles className="w-5 h-5 text-accent-400 animate-pulse" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // Titre en blanc
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
          >
            Notre{" "}
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Stack Tech
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            // Texte en gris clair
            className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Les langages, frameworks et outils que nous utilisons au quotidien
          </motion.p>
        </motion.div>

        {/* Technologies Marquee - Row 1 (Left to Right) */}
        <div className="relative mb-6">
          {/* Gradient fade edges (Ajustement pour fond sombre/clair) */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-dark-900 via-dark-800/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-dark-900 via-dark-800/80 to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden py-6">
            {/* Container with slight rotation */}
            <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-700">
              <motion.div
                className="flex gap-4 lg:gap-6"
                animate={{
                  x: [0, -2880], // Ajusté pour la largeur des cartes
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedTechnologies.map((tech, index) => (
                  <TechCard
                    key={`row1-${tech.name}-${index}`}
                    technology={tech}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Technologies Marquee - Row 2 (Right to Left - Reverse) */}
        <div className="relative">
          {/* Gradient fade edges (Ajustement pour fond sombre/clair) */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-dark-900 via-dark-800/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-dark-900 via-dark-800/80 to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden py-6">
            {/* Container with slight rotation (opposite direction) */}
            <div className="transform rotate-1 hover:rotate-0 transition-transform duration-700">
              <motion.div
                className="flex gap-4 lg:gap-6"
                animate={{
                  x: [-2880, 0], // Direction inverse
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 55,
                    ease: "linear",
                  },
                }}
              >
                {[...duplicatedTechnologies].reverse().map((tech, index) => (
                  <TechCard
                    key={`row2-${tech.name}-${index}`}
                    technology={tech}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Call to Action - Plus de 20 technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Cpu className="w-6 h-6" />
            <span className="text-lg">+ de 20 technologies à découvrir</span>
            <Zap className="w-6 h-6 animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm lg:text-base font-semibold mt-6"
          >
            Et ce n'est que le début de notre aventure tech ! 🚀
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

// Le composant TechCard n'a pas besoin de modifications majeures car il utilise des couleurs dynamiques et sa propre couleur de fond blanc/gris,
// qui ressort très bien sur le fond sombre et clair.

interface TechCardProps {
  technology: Technology;
}

const TechCard: React.FC<TechCardProps> = ({ technology }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -6, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex-shrink-0 w-36 h-36 lg:w-40 lg:h-40 group cursor-pointer"
    >
      <div className="relative w-full h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-300">
        {/* Gradient background subtle */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${technology.color}08, transparent)`,
          }}
        ></div>

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            boxShadow: [
              `0 0 20px ${technology.color}40`,
              `0 0 30px ${technology.color}60`,
              `0 0 20px ${technology.color}40`,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        ></motion.div>

        {/* Content - Plus compact */}
        <div className="relative h-full flex flex-col items-center justify-center p-4 lg:p-5">
          {/* Logo Container - Plus petit */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-14 h-14 lg:w-16 lg:h-16 mb-2 flex items-center justify-center"
          >
            <img
              src={technology.logo}
              alt={technology.name}
              className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Technology Name - Police plus petite */}
          <div className="text-sm lg:text-base font-black text-gray-700 group-hover:text-gray-900 transition-colors duration-300 tracking-tight text-center">
            {technology.name}
          </div>

          {/* Category Badge - Plus compact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="mt-2 px-2.5 py-1 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0 border border-primary-200"
          >
            <span className="text-[10px] lg:text-xs font-bold text-primary-700 uppercase tracking-wide">
              {technology.category}
            </span>
          </motion.div>
        </div>

        {/* Shine effect diagonal - Plus rapide */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent"
          initial={{ x: "-100%", y: "-100%" }}
          whileHover={{
            x: "100%",
            y: "100%",
            transition: { duration: 0.8 },
          }}
        ></motion.div>

        {/* Corner accent - Plus petit */}
        <div
          className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-bl-2xl"
          style={{
            background: `linear-gradient(225deg, ${technology.color}20, transparent)`,
          }}
        ></div>

        {/* Bottom left accent */}
        <div
          className="absolute bottom-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tr-2xl"
          style={{
            background: `linear-gradient(45deg, ${technology.color}20, transparent)`,
          }}
        ></div>
      </div>
    </motion.div>
  );
};

export default TechStackSlider;
