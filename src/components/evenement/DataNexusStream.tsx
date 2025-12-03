import React from "react";
import { motion } from "framer-motion";
import { Users, Code, CalendarCheck, Zap } from "lucide-react";

// --- Configuration des Stats (Simulé) ---
const stats = [
  {
    icon: Users,
    value: "800+",
    label: "Membres Connectés",
    color: "text-cyan-400",
  },
  {
    icon: Code,
    value: "24",
    label: "Projets Open Source",
    color: "text-purple-400",
  },
  {
    icon: CalendarCheck,
    value: "45",
    label: "Événements Réalisés (2024)",
    color: "text-emerald-400",
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Taux de Satisfaction",
    color: "text-yellow-400",
  },
];

const DataNexusStream: React.FC = () => {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* --- Effet de Vague de Données au Sol (Bottom Border) --- */}
      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse-slow pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Minimaliste et Focalisé */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-light text-gray-300 tracking-widest uppercase mb-2"
          >
            Nexus Data Stream
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 font-mono"
          >
            // ANALYSE DES PERFORMANCES DU CLUB EN TEMPS RÉEL //
          </motion.p>
        </div>

        {/* --- Grille des Cartes Holographiques --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative p-6 md:p-8 rounded-3xl overflow-hidden text-center backdrop-blur-sm 
                         bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500
                         shadow-lg hover:shadow-cyan-500/30"
            >
              {/* Effet d'Impulsion Lumineuse */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-transparent to-${stat.color.replace(
                  "text-",
                  ""
                )}/10 opacity-30 animate-pulse-slow`}
              />

              {/* Contenu */}
              <div className="relative z-10">
                <stat.icon
                  className={`w-10 h-10 mx-auto mb-4 ${stat.color} shadow-lg rounded-full p-1 bg-black/50`}
                />
                <div
                  className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-1 leading-none`}
                >
                  {stat.value}
                </div>
                <p className="text-sm text-gray-400 font-mono uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ligne de Séparation Holographique (Fin) */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-20"
        />
      </div>
    </section>
  );
};

export default DataNexusStream;
