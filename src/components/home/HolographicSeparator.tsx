// src/components/home/HolographicSeparator.tsx

import React from "react";
import { motion } from "framer-motion";

const HolographicSeparator: React.FC = () => {
  return (
    <div className="py-2 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative h-1 w-full transform origin-left"
        >
          {/* Ligne principale, très fine et futuriste */}
          <div className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-lg" />

          {/* Effet de scan/pulse */}
          <motion.div
            animate={{ x: ["-10%", "110%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1],
            }}
            className="absolute top-0 w-20 h-full bg-white opacity-20 blur-md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HolographicSeparator;
