import React from "react";
import { motion } from "framer-motion";
import { Heart, Camera, Sparkles, Pin } from "lucide-react";

interface Image {
  src: string;
  event: string;
  category: string;
  color: string;
  date: string;
  index: number;
  total: number;
}

interface MemoriesWallProps {
  images: Image[];
}

const MemoriesWall: React.FC<MemoriesWallProps> = ({ images }) => {
  // Prendre seulement 16 photos pour le mur
  const wallImages = images.slice(0, 16);

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary-50 via-gray-50 to-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Confetti particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 6 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="w-4 h-4 text-red-400" />
            ) : i % 3 === 1 ? (
              <Camera className="w-3 h-3 text-primary-400" />
            ) : (
              <Sparkles className="w-3 h-3 text-accent-400" />
            )}
          </motion.div>
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-xl rounded-full border border-primary-200/50 mb-6 shadow-lg"
          >
            <Pin className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Mur des Souvenirs
            </span>
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Nos moments{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              favoris
            </span>
            💚
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une sélection des instants qui définissent l'esprit du Club
            Informatique UASZ
          </p>
        </motion.div>

        {/* Polaroid Wall Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {wallImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: Math.random() * 10 - 5,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
              >
                {/* Polaroid Card */}
                <div className="relative bg-white p-4 pb-16 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Pin decoration */}
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg z-10"
                  >
                    <Pin className="w-4 h-4 text-white" />
                  </motion.div>

                  {/* Photo */}
                  <div className="relative aspect-square overflow-hidden rounded-md mb-3">
                    <motion.img
                      src={image.src}
                      alt={image.event}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-t ${image.color} opacity-40`}
                    />

                    {/* Heart icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <Heart className="w-4 h-4 text-red-500" />
                    </motion.div>
                  </div>

                  {/* Caption handwritten style */}
                  <div className="text-center">
                    <p
                      className="text-sm font-bold text-gray-800 line-clamp-2 mb-1"
                      style={{ fontFamily: "cursive" }}
                    >
                      {image.event}
                    </p>
                    <p
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "cursive" }}
                    >
                      {image.date}
                    </p>
                  </div>

                  {/* Tape effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-6 bg-white/60 backdrop-blur-sm border-l border-r border-gray-200 transform -rotate-2"></div>
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
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200/50 max-w-2xl">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 mb-4 shadow-lg"
            >
              <Camera className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-2xl font-black text-gray-900 mb-3">
              Faites partie de{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                la prochaine photo !
              </span>
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez le Club Informatique UASZ et créez vos propres souvenirs
              inoubliables avec nous 📸✨
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <Heart className="w-5 h-5" />
              <span>Rejoindre le club</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative wave vers Footer */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 lg:h-24 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
          fill="currentColor"
        >
          <path d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default MemoriesWall;
