import React from "react";
import { motion } from "framer-motion";

/**
 * Composant de transition visuelle entre sections claires et sombres
 * À placer entre la section claire et EventTestimonials
 */
const TransitionGradient: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative h-32 lg:h-40 bg-gradient-to-b from-neutral-50 via-gray-200 to-dark-900 overflow-hidden"
    >
      {/* Effet de brume animée */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-3xl"
      />
    </motion.div>
  );
};

export default TransitionGradient;
