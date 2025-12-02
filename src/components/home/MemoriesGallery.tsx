import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Image as ImageIcon,
  Calendar,
  Download,
} from "lucide-react";
import { useState } from "react";

// Import des images
import portes1_1 from "../../assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0000.jpg";
import portes1_2 from "../../assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0015.jpg";
import portes1_3 from "../../assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0022.jpg";
import portes1_4 from "../../assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0037.jpg";
import portes1_5 from "../../assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0047.jpg";
import portes1_6 from "../../assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0061.jpg";
import portes2_1 from "../../assets/journee-portes-ouvertes-2eme-journee/20251108_130549.jpg";
import portes2_2 from "../../assets/journee-portes-ouvertes-2eme-journee/20251108_134304.jpg";
import portes2_3 from "../../assets/journee-portes-ouvertes-2eme-journee/Sans-titre-14.png";
import portes2_4 from "../../assets/journee-portes-ouvertes-2eme-journee/Sans-titre-31.png";
import portes2_5 from "../../assets/journee-portes-ouvertes-2eme-journee/Sans-titre-46.png";
import portes2_6 from "../../assets/journee-portes-ouvertes-2eme-journee/Sans-titre-66.png";
import maintenance1 from "../../assets/journee-maitenance-1-edi/IMG-20251111-WA0001.jpg";
import maintenance2 from "../../assets/journee-maitenance-1-edi/IMG-20251111-WA0005.jpg";
import maintenance3 from "../../assets/journee-maitenance-1-edi/IMG-20251111-WA0007.jpg";

interface Photo {
  id: number;
  src: string;
  category: "portes-ouvertes-1" | "portes-ouvertes-2" | "maintenance" | "all";
  title: string;
  date: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: portes1_1,
    category: "portes-ouvertes-1",
    title: "Journée Portes Ouvertes 1",
    date: "10 Nov 2024",
  },
  {
    id: 2,
    src: portes1_2,
    category: "portes-ouvertes-1",
    title: "Journée Portes Ouvertes 1",
    date: "10 Nov 2024",
  },
  {
    id: 3,
    src: portes2_1,
    category: "portes-ouvertes-2",
    title: "Journée Portes Ouvertes 2",
    date: "08 Nov 2024",
  },
  {
    id: 4,
    src: maintenance1,
    category: "maintenance",
    title: "Journée Maintenance",
    date: "11 Nov 2024",
  },
  {
    id: 5,
    src: portes1_3,
    category: "portes-ouvertes-1",
    title: "Journée Portes Ouvertes 1",
    date: "10 Nov 2024",
  },
  {
    id: 6,
    src: portes2_2,
    category: "portes-ouvertes-2",
    title: "Journée Portes Ouvertes 2",
    date: "08 Nov 2024",
  },
  {
    id: 7,
    src: portes1_4,
    category: "portes-ouvertes-1",
    title: "Journée Portes Ouvertes 1",
    date: "10 Nov 2024",
  },
  {
    id: 8,
    src: portes2_3,
    category: "portes-ouvertes-2",
    title: "Journée Portes Ouvertes 2",
    date: "08 Nov 2024",
  },
  {
    id: 9,
    src: maintenance2,
    category: "maintenance",
    title: "Journée Maintenance",
    date: "11 Nov 2024",
  },
  {
    id: 10,
    src: portes1_5,
    category: "portes-ouvertes-1",
    title: "Journée Portes Ouvertes 1",
    date: "10 Nov 2024",
  },
  {
    id: 11,
    src: portes2_4,
    category: "portes-ouvertes-2",
    title: "Journée Portes Ouvertes 2",
    date: "08 Nov 2024",
  },
  {
    id: 12,
    src: portes1_6,
    category: "portes-ouvertes-1",
    title: "Journée Portes Ouvertes 1",
    date: "10 Nov 2024",
  },
  {
    id: 13,
    src: portes2_5,
    category: "portes-ouvertes-2",
    title: "Journée Portes Ouvertes 2",
    date: "08 Nov 2024",
  },
  {
    id: 14,
    src: maintenance3,
    category: "maintenance",
    title: "Journée Maintenance",
    date: "11 Nov 2024",
  },
  {
    id: 15,
    src: portes2_6,
    category: "portes-ouvertes-2",
    title: "Journée Portes Ouvertes 2",
    date: "08 Nov 2024",
  },
];

const categories = [
  {
    id: "all",
    name: "Tous",
    icon: ImageIcon,
    color: "from-primary-500 to-accent-500",
  },
  {
    id: "portes-ouvertes-1",
    name: "Portes Ouvertes 1",
    icon: Calendar,
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "portes-ouvertes-2",
    name: "Portes Ouvertes 2",
    icon: Calendar,
    color: "from-primary-500 to-accent-500",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    icon: Calendar,
    color: "from-orange-500 to-red-600",
  },
];

const MemoriesGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

  // Filtrer les photos
  const filteredPhotos =
    selectedCategory === "all"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  // Ouvrir le lightbox
  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    const index = filteredPhotos.findIndex((p) => p.id === photo.id);
    setCurrentPhotoIndex(index);
  };

  // Naviguer dans le lightbox
  const navigatePhoto = (direction: "prev" | "next") => {
    let newIndex = currentPhotoIndex;
    if (direction === "next") {
      newIndex = (currentPhotoIndex + 1) % filteredPhotos.length;
    } else {
      newIndex =
        currentPhotoIndex === 0
          ? filteredPhotos.length - 1
          : currentPhotoIndex - 1;
    }
    setCurrentPhotoIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  // Grid layout classes - Asymétrique
  const getGridClass = (index: number) => {
    const patterns = [
      "md:col-span-2 md:row-span-2", // Large
      "md:col-span-1", // Normal
      "md:col-span-1", // Normal
      "md:col-span-1 md:row-span-2", // Tall
      "md:col-span-2", // Wide
      "md:col-span-1", // Normal
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-neutral-50 via-white to-accent-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary-300 rounded-full blur-3xl"
        />

        {/* Floating Photo Icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
          >
            <ImageIcon className="w-8 h-8 text-primary-300" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-accent-100 to-primary-100 rounded-full mb-6 border border-accent-200"
          >
            <ImageIcon className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-semibold text-accent-700">
              Nos Souvenirs
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-dark-800">Galerie de </span>
            <span className="bg-gradient-to-r from-accent-600 via-primary-500 to-accent-600 bg-clip-text text-transparent">
              Souvenirs
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8"
          >
            Revivez les meilleurs moments du Club Informatique à travers notre
            collection de photos
          </motion.p>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all group overflow-hidden ${
                    isActive
                      ? "text-white shadow-lg"
                      : "bg-white text-text-secondary hover:text-primary-600 border border-neutral-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className={`absolute inset-0 bg-gradient-to-r ${category.color}`}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Photo Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-sm text-text-tertiary"
          >
            {filteredPhotos.length} photo{filteredPhotos.length > 1 ? "s" : ""}
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]"
            >
              {filteredPhotos.map((photo, index) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  index={index}
                  gridClass={getGridClass(index)}
                  onClick={() => openLightbox(photo)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        photo={selectedPhoto}
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={navigatePhoto}
        currentIndex={currentPhotoIndex}
        totalPhotos={filteredPhotos.length}
      />
    </section>
  );
};

// Photo Card Component
const PhotoCard = ({
  photo,
  index,
  gridClass,
  onClick,
}: {
  photo: Photo;
  index: number;
  gridClass: string;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${gridClass} group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
    >
      {/* Image */}
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      >
        <img
          src={photo.src}
          alt={photo.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hover Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col justify-end p-6 z-10"
      >
        <div className="flex items-center space-x-2 mb-2">
          <Calendar className="w-4 h-4 text-white" />
          <span className="text-sm text-white/90">{photo.date}</span>
        </div>
        <h3 className="text-lg font-bold text-white">{photo.title}</h3>
      </motion.div>

      {/* Zoom Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center z-20"
      >
        <ImageIcon className="w-5 h-5 text-white" />
      </motion.div>

      {/* Decorative Corner */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary-500/30 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

// Lightbox Component
const Lightbox = ({
  photo,
  isOpen,
  onClose,
  onNavigate,
  currentIndex,
  totalPhotos,
}: {
  photo: Photo | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
  currentIndex: number;
  totalPhotos: number;
}) => {
  if (!photo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-900/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Navigation Buttons */}
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate("prev");
            }}
            className="absolute left-6 w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
          >
            <ChevronLeft className="w-7 h-7" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate("next");
            }}
            className="absolute right-6 w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
          >
            <ChevronRight className="w-7 h-7" />
          </motion.button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl max-h-[85vh] w-full"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
            </AnimatePresence>

            {/* Info Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xl p-6 rounded-b-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {photo.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-white/80">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{photo.date}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-white/80 text-sm">
                    {currentIndex + 1} / {totalPhotos}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  >
                    <Download className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Keyboard Hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm"
          >
            Utilisez ← → pour naviguer • ESC pour fermer
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MemoriesGallery;
