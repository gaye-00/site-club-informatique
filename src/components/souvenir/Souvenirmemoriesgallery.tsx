import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

interface Image {
  src: string;
  event: string;
  category: string;
  color: string;
  date: string;
  index: number;
  total: number;
}

interface MemoriesGalleryProps {
  images: Image[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onImageClick: (image: Image) => void;
}

const MemoriesGallery: React.FC<MemoriesGalleryProps> = ({
  images,
  selectedCategory,
  onCategoryChange,
  onImageClick,
}) => {
  const categories = ["Tous", "Événement", "Workshop", "Formation"];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary-50 via-gray-50 to-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header avec filtres */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-primary-200/50 mb-6 shadow-lg"
          >
            <Camera className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Galerie Complète
            </span>
            <Sparkles className="w-5 h-5 text-accent-500 animate-pulse" />
          </motion.div>

          {/* Titre */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Explorez tous nos{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              souvenirs
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Parcourez notre collection de {images.length} photos capturant les
            meilleurs moments du club
          </p>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange(cat)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-xl shadow-primary-200"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-300"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Counter */}
          <p className="text-sm text-gray-500 font-medium">
            {images.length} photo{images.length > 1 ? "s" : ""}{" "}
            {selectedCategory !== "Tous" && `· ${selectedCategory}`}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {images.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                onClick={() => onImageClick(image)}
                className="group cursor-pointer break-inside-avoid mb-6"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                  {/* Image */}
                  <motion.img
                    src={image.src}
                    alt={image.event}
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Overlay gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${image.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  />

                  {/* Info overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col justify-end p-4 text-white"
                  >
                    <div className="backdrop-blur-md bg-black/30 rounded-xl p-4">
                      <h4 className="font-black text-lg mb-1 line-clamp-1">
                        {image.event}
                      </h4>
                      <p className="text-xs text-white/80 font-medium">
                        {image.date}
                      </p>
                    </div>
                  </motion.div>

                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-gray-900 shadow-md">
                      {image.category}
                    </span>
                  </div>

                  {/* Icon hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                  >
                    <Camera className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Message si vide */}
        {images.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex p-6 rounded-full bg-gray-100 mb-4">
              <Camera className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-xl text-gray-500">
              Aucune photo dans cette catégorie
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MemoriesGallery;
