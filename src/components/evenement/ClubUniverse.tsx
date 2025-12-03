import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import {
  Github,
  Globe,
  Code,
  Database,
  Server,
  Terminal,
  Share2,
} from "lucide-react";

// Carte flottante individuelle
const FloatingCard = ({
  children,
  className,
  depth = 1,
  mouseX,
  mouseY,
}: {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  mouseX: any;
  mouseY: any;
}) => {
  // Plus le depth est grand, plus ça bouge (effet de proximité)
  const x = useTransform(mouseX, (value) => (value as number) * depth * -20);
  const y = useTransform(mouseY, (value) => (value as number) * depth * -20);

  const springConfig = { damping: 15, stiffness: 150 }; // Mouvement fluide
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className={`absolute ${className}`}
    >
      {children}
    </motion.div>
  );
};

const ClubUniverse: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  // Valeurs de souris normalisées (-1 à 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    // Calculer la position de la souris relative au centre du container
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-[80vh] min-h-[600px] bg-black overflow-hidden flex items-center justify-center cursor-crosshair"
    >
      {/* --- BACKGROUND GRID DYSTOPIAN --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* --- CENTRE : Le Noyau --- */}
      <div className="relative z-10 text-center pointer-events-none select-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-primary-500/20 border-dashed"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-accent-500/10 border-dotted"
        />

        <h2 className="text-6xl md:text-8xl font-black text-white mix-blend-difference tracking-tighter">
          JOIN THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
            NEXUS
          </span>
        </h2>
        <p className="mt-4 text-gray-400 font-mono text-sm tracking-widest">
          EST. 2025 • ZIGUINCHOR • SENEGAL
        </p>
      </div>

      {/* --- ELEMENTS FLOTTANTS (SATELLITES) --- */}

      {/* Carte Code */}
      <FloatingCard
        depth={2.5}
        mouseX={mouseX}
        mouseY={mouseY}
        className="top-[15%] left-[10%] z-20"
      >
        <div className="p-4 bg-dark-800/80 backdrop-blur-xl border border-primary-500/30 rounded-2xl shadow-2xl shadow-primary-500/20 transform -rotate-6 hover:scale-110 transition-transform">
          <Code className="w-8 h-8 text-primary-400 mb-2" />
          <div className="h-2 w-16 bg-primary-500/20 rounded-full mb-1" />
          <div className="h-2 w-10 bg-primary-500/20 rounded-full" />
        </div>
      </FloatingCard>

      {/* Carte Stats */}
      <FloatingCard
        depth={1.5}
        mouseX={mouseX}
        mouseY={mouseY}
        className="bottom-[20%] right-[15%] z-20"
      >
        <div className="px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transform rotate-3 hover:bg-white/10 transition-colors">
          <div className="text-3xl font-black text-white">200+</div>
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Membres Actifs
          </div>
        </div>
      </FloatingCard>

      {/* Carte Github */}
      <FloatingCard
        depth={3}
        mouseX={mouseX}
        mouseY={mouseY}
        className="top-[25%] right-[20%] z-0"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center shadow-xl opacity-80">
          <Github className="w-8 h-8 text-white" />
        </div>
      </FloatingCard>

      {/* Carte Terminal */}
      <FloatingCard
        depth={0.8}
        mouseX={mouseX}
        mouseY={mouseY}
        className="bottom-[15%] left-[20%] z-10"
      >
        <div className="w-64 bg-black/90 rounded-lg border border-green-500/30 p-3 font-mono text-xs shadow-lg">
          <div className="flex gap-1.5 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <div className="text-green-500">$ git commit -m "Future"</div>
          <div className="text-white">1 file changed, 2025 insertions(+)</div>
        </div>
      </FloatingCard>

      {/* Carte Globe */}
      <FloatingCard
        depth={1.8}
        mouseX={mouseX}
        mouseY={mouseY}
        className="top-[10%] left-[45%] z-0"
      >
        <Globe className="w-24 h-24 text-accent-900/40 animate-pulse" />
      </FloatingCard>

      {/* Carte Join */}
      <FloatingCard
        depth={4}
        mouseX={mouseX}
        mouseY={mouseY}
        className="bottom-[10%] right-[5%] md:right-[35%] z-30"
      >
        <button className="px-8 py-3 bg-white text-black font-black rounded-full shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform flex items-center gap-2">
          REJOINDRE LE CLUB
          <Share2 className="w-4 h-4" />
        </button>
      </FloatingCard>

      {/* Gradient Overlay Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black opacity-80 pointer-events-none" />
    </section>
  );
};

export default ClubUniverse;
