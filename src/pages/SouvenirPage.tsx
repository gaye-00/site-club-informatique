import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react";
import SouvenirHero from "../components/souvenir/Souvenirhero";
import MemoriesGallery from "../components/souvenir/Souvenirmemoriesgallery";
import StatsShowcase from "../components/souvenir/Statsshowcase";
import MemoriesWall from "../components/souvenir/Memorieswall";
import MemoriesTimeline from "../components/souvenir/Memoriestimeline";
import DataNexusStream from "../components/evenement/DataNexusStream";
import HolographicSeparator from "../components/home/HolographicSeparator";

// Types
interface Memory {
  id: number;
  event: string;
  category: string;
  date: string;
  images: string[];
  color: string;
}

// Données des souvenirs basées sur les assets
const memoriesData: Memory[] = [
  {
    id: 1,
    event: "Journées Portes Ouvertes - Jour 1",
    category: "Événement",
    date: "10 Novembre 2024",
    color: "from-blue-500 to-cyan-500",
    images: [
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0000.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0001.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0004.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0005.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0006.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0008.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0009.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0010.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0011.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0015.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0019.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0020.jpg",
    ],
  },
  {
    id: 2,
    event: "Journées Portes Ouvertes - Jour 2",
    category: "Événement",
    date: "8 Novembre 2024",
    color: "from-purple-500 to-pink-500",
    images: [
      "/src/assets/journee-portes-ouvertes-2eme-journee/20251108_125730.jpg",
      "/src/assets/journee-portes-ouvertes-2eme-journee/20251108_125756.jpg",
      "/src/assets/journee-portes-ouvertes-2eme-journee/20251108_130549.jpg",
      "/src/assets/journee-portes-ouvertes-2eme-journee/20251108_130659.jpg",
      "/src/assets/journee-portes-ouvertes-2eme-journee/20251108_130702.jpg",
      "/src/assets/journee-portes-ouvertes-2eme-journee/20251108_132137.jpg",
      "/src/assets/journee-portes-ouvertes-2eme-journee/20251108_134233.jpg",
      "/src/assets/journee-portes-ouvertes-2eme-journee/Sans-titre-11.png",
      "/src/assets/journee-portes-ouvertes-2eme-journee/Sans-titre-14.png",
      "/src/assets/journee-portes-ouvertes-2eme-journee/Sans-titre-18.png",
    ],
  },
  {
    id: 3,
    event: "Journée Maintenance",
    category: "Workshop",
    date: "11 Novembre 2024",
    color: "from-orange-500 to-red-500",
    images: [
      "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0001.jpg",
      "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0002.jpg",
      "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0004.jpg",
      "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0005.jpg",
      "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0006.jpg",
      "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0007.jpg",
      "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0008.jpg",
      "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0020.jpg",
    ],
  },
  {
    id: 4,
    event: "Formation Photoshop",
    category: "Formation",
    date: "29 Novembre 2024",
    color: "from-green-500 to-emerald-500",
    images: [
      "/src/assets/Formation_Photoshop/20251129_183442.jpg",
      "/src/assets/Formation_Photoshop/20251129_183449.jpg",
      "/src/assets/Formation_Photoshop/20251129_183455.jpg",
      "/src/assets/Formation_Photoshop/20251129_183457.jpg",
      "/src/assets/Formation_Photoshop/20251129_183500.jpg",
      "/src/assets/Formation_Photoshop/20251129_183511.jpg",
      "/src/assets/Formation_Photoshop/20251129_183525.jpg",
      "/src/assets/Formation_Photoshop/20251129_183529.jpg",
      "/src/assets/Formation_Photoshop/20251129_183535.jpg",
      "/src/assets/Formation_Photoshop/20251129_183540.jpg",
    ],
  },
];

export default function SouvenirPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    event: string;
    index: number;
    total: number;
  } | null>(null);

  // Toutes les images avec métadonnées
  const allImages = useMemo(() => {
    return memoriesData.flatMap((memory) =>
      memory.images.map((img, idx) => ({
        src: img,
        event: memory.event,
        category: memory.category,
        color: memory.color,
        date: memory.date,
        index: idx,
        total: memory.images.length,
      }))
    );
  }, []);

  // Filtrage
  const filteredImages = useMemo(() => {
    if (selectedCategory === "Tous") return allImages;
    return allImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory, allImages]);

  // Navigation lightbox
  const handlePrevImage = () => {
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.src === lightboxImage.src
    );
    const prevIndex =
      currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    const prevImg = filteredImages[prevIndex];
    setLightboxImage({
      src: prevImg.src,
      event: prevImg.event,
      index: prevImg.index,
      total: prevImg.total,
    });
  };

  const handleNextImage = () => {
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.src === lightboxImage.src
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    const nextImg = filteredImages[nextIndex];
    setLightboxImage({
      src: nextImg.src,
      event: nextImg.event,
      index: nextImg.index,
      total: nextImg.total,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <SouvenirHero totalPhotos={allImages.length} />

      {/* Timeline */}
      <MemoriesTimeline memories={memoriesData} />

      {/* Gallery principale */}
      <MemoriesGallery
        images={filteredImages}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onImageClick={(img) =>
          setLightboxImage({
            src: img.src,
            event: img.event,
            index: img.index,
            total: img.total,
          })
        }
      />

      {/* Stats */}
      <StatsShowcase memories={memoriesData} />

      {/* Wall */}
      <MemoriesWall images={allImages.slice(0, 20)} />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox
            image={lightboxImage}
            onClose={() => setLightboxImage(null)}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
          />
        )}
      </AnimatePresence>
      <HolographicSeparator />
    </div>
  );
}

// Lightbox Component
const Lightbox = ({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: { src: string; event: string; index: number; total: number };
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-7xl w-full"
      >
        {/* Boutons contrôle */}
        <div className="absolute top-0 right-0 z-20 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
          >
            <Download className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={image.src}
            alt={image.event}
            className="w-full max-h-[80vh] object-contain rounded-2xl"
          />

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Info */}
        <div className="mt-6 text-center">
          <h3 className="text-2xl font-black text-white mb-2">{image.event}</h3>
          <p className="text-white/60 text-sm">
            Photo {image.index + 1} sur {image.total}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
