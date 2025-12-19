import React from "react";
import { motion } from "framer-motion";
import { Quote, Zap, Award } from "lucide-react";

const PresidentMessageSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-gray-50 to-primary-50 py-20 overflow-hidden">
      {/* --- FX DE FOND : ATHMOSPHÈRE --- */}
      <div className="absolute inset-0">
        {/* Radial gradient subtil */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(56,142,60,0.08)_0%,transparent_50%)] opacity-60" />

        {/* Ligne horizontale centrale */}
        <div className="absolute w-full h-px top-1/2 bg-gradient-to-r from-transparent via-primary-400/30 to-transparent shadow-[0_0_20px_rgba(56,142,60,0.3)]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,142,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,142,60,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Orbes lumineux */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- 50% GAUCHE : L'ENTONNOIR DE TEXTE --- */}
          <div className="relative perspective-2000">
            <motion.div
              initial={{
                opacity: 0,
                rotateX: 70,
                y: 300,
                z: -500,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                rotateX: 0,
                y: 0,
                z: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: [0.19, 1, 0.22, 1], // Expo out
                delay: 0.2,
              }}
              className="space-y-8"
            >
              {/* Surnom / Titre Flottant */}
              <div className="inline-flex items-center gap-3 px-3 py-1 border-l-2 border-primary-600 bg-primary-50 mb-4">
                <Zap className="w-4 h-4 text-primary-600 animate-pulse" />
                <span className="text-primary-700 font-mono text-xs tracking-[0.3em] uppercase font-bold">
                  Directives Exécutives
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-none">
                VISION <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 animate-text-shimmer">
                  2025-2026
                </span>
              </h2>

              <div className="relative">
                <Quote className="absolute -left-10 -top-6 w-16 h-16 text-primary-100" />
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  "Sacrifie-toi pour ce que tu veux, sinon ce que tu veux
                  deviendra le sacrifice. Tu veux la connaissance ?{" "}
                  <span className="text-gray-900 font-bold border-b-2 border-primary-600">
                    Sacrifie-toi pour elle.
                  </span>{" "}
                  "
                </p>
              </div>
              {/* <div className="relative">
                <Quote className="absolute -left-8 -top-8 w-20 h-20 text-primary-500/10 -z-10" />
                <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed italic">
                  "Sacrifie-toi pour ce que tu veux, sinon ce que tu veux
                  deviendra le sacrifice. Tu veux la connaissance ?{" "}
                  <span className="text-primary-400">
                    Sacrifie-toi pour elle.
                  </span>
                  "
                </p>
              </div> */}

              <div className="flex items-center gap-6 pt-10">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-2 border-primary-500 bg-white flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary-500 blur-md opacity-20 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-gray-900 tracking-tight">
                    Abdoulaye Gaye
                  </h4>
                  <p className="text-gray-600 font-mono text-sm uppercase tracking-widest">
                    Président • Nexus Leader
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- 50% DROITE : LA PHOTO (MIND BLOWING BORDER) --- */}
          <div className="relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative group"
            >
              {/* --- LE CADRE BORDURE ANIMÉ (VORTEX) --- */}
              <div className="relative w-[300px] h-[400px] md:w-[420px] md:h-[550px] rounded-[40px] p-[4px] overflow-hidden">
                {/* L'effet de rotation de lumière (Le gradient qui bouge) */}
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_120deg,#388E3C_180deg,transparent_240deg,transparent_360deg)] animate-[spin_3s_linear_infinite]" />
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_180deg,transparent_0deg,transparent_120deg,#059669_180deg,transparent_240deg,transparent_360deg)] animate-[spin_3s_linear_infinite_reverse]" />

                {/* Container Image */}
                <div className="relative w-full h-full bg-white rounded-[36px] overflow-hidden z-10 border border-gray-200 shadow-2xl">
                  <img
                    // src="/src/assets/presidents/Abdoulaye-Gaye.jpg"
                    src="/assets/presidents/Abdoulaye-Gaye.jpg"
                    alt="Abdoulaye Gaye"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Scanner Effect */}
                  <motion.div
                    animate={{ y: [-100, 600] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-x-0 h-[2px] bg-primary-500 shadow-[0_0_15px_#388E3C] z-20 opacity-50"
                  />

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-primary-400 animate-ping" />
                      <span className="text-primary-400 font-mono text-[10px] uppercase tracking-widest">
                        System Active
                      </span>
                    </div>
                    <p className="text-white/80 text-xs font-mono">
                      ID: CI-PREZ-2024-AG
                    </p>
                  </div>
                </div>
              </div>

              {/* Éléments de Déco Futuristes */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-primary-400 rounded-tl-3xl" />
              <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-accent-400 rounded-br-3xl" />

              {/* Glow effect autour de la photo */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- KEYFRAMES CUSTOM --- */}
      <style>{`
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 4s linear infinite;
        }
        .perspective-2000 {
          perspective: 2000px;
        }
      `}</style>
    </section>
  );
};

export default PresidentMessageSection;
