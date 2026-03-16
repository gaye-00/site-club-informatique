import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Rocket, Target, Cpu, Flag, Sparkles } from "lucide-react";

const milestones = [
  {
    id: 1,
    year: "Q1 2026?",
    title: "Lancement Incubateur",
    description:
      "Inauguration de notre espace dédié aux startups étudiantes. 5 projets sélectionnés pour un accompagnement intensif.",
    icon: Rocket,
    color: "text-cyan-400",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.5)]",
  },
  {
    id: 2,
    year: "Q2 2026?",
    title: "Hackathon National",
    description:
      "Le plus grand rassemblement de codeurs du Sénégal. 48h de code, 10 universités invitées, 1 objectif commun.",
    icon: Cpu,
    color: "text-fuchsia-400",
    glow: "shadow-[0_0_30px_rgba(232,121,249,0.5)]",
  },
  {
    id: 3,
    year: "Q3 2026?",
    title: "UASZ Tech Summit",
    description:
      "Une conférence internationale avec des experts de Google, Microsoft et Wave. Le futur de la tech se dessine ici.",
    icon: Target,
    color: "text-emerald-400",
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.5)]",
  },
  {
    id: 4,
    year: "Q4 2026?",
    title: "Expansion Régionale",
    description:
      "Ouverture d'antennes du club dans les lycées de Ziguinchor pour former la prochaine génération dès maintenant.",
    icon: Flag,
    color: "text-amber-400",
    glow: "shadow-[0_0_30px_rgba(251,191,36,0.5)]",
  },
];

const RoadmapVision: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-dark-900 overflow-hidden"
    >
      {/* Fond étoilé subtil */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-pulse"></div>

      {/* Titre */}
      <div className="relative z-10 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4"
        >
          <Sparkles className="w-4 h-4 text-primary-400 animate-spin-slow" />
          <span className="text-gray-300 text-xs font-bold uppercase tracking-[0.2em]">
            Vision 2026
          </span>
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
          La Route vers <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-accent-400">
            L'Excellence
          </span>
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* --- LIGNE LASER CENTRALE --- */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 md:-ml-0.5 bg-white/10 rounded-full">
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute top-0 left-0 right-0 w-full bg-gradient-to-b from-primary-500 via-accent-400 to-fuchsia-500 shadow-[0_0_20px_rgba(34,197,94,0.8)] rounded-full"
          />
        </div>

        {/* --- MILESTONES --- */}
        <div className="space-y-24">
          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex items-center md:justify-between ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Point Central Connecteur */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-dark-900 border-2 border-white/30 md:-translate-x-1/2 z-20 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className={`w-2 h-2 rounded-full ${item.color.replace(
                      "text-",
                      "bg-",
                    )} shadow-[0_0_10px_currentColor]`}
                  />
                </div>

                {/* Espace vide pour l'alignement */}
                <div className="hidden md:block w-5/12" />

                {/* Carte de Contenu */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div
                    className={`relative group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 ${item.glow} hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]`}
                  >
                    {/* Effet Glitch/Deco au survol */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-3xl" />

                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-sm font-black px-3 py-1 rounded-lg bg-white/5 border border-white/10 ${item.color}`}
                      >
                        {item.year}
                      </span>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Light Fog Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default RoadmapVision;
