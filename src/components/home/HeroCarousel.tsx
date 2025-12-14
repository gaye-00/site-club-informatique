import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Sparkles,
  Cpu,
  Binary,
} from "lucide-react";

// Importation des images
import hero1 from "../../assets/heroImages/20251108_152608.jpg";
import hero2 from "../../assets/heroImages/IMG-20251110-WA0000.jpg";
import hero3 from "../../assets/heroImages/IMG-20251110-WA0015.jpg";
import hero4 from "../../assets/heroImages/IMG-20251110-WA0022.jpg";
import hero5 from "../../assets/heroImages/IMG-20251110-WA0061.jpg";
import hero6 from "../../assets/heroImages/IMG-20251110-WA0076.jpg";
import hero7 from "../../assets/heroImages/IMG-20251110-WA0096.jpg";

const heroImages = [
  {
    src: hero1,
    title: "Innovation Technologique",
    subtitle: "Créons l'avenir ensemble",
  },
  {
    src: hero2,
    title: "Événements & Workshops",
    subtitle: "Apprendre en pratiquant",
  },
  {
    src: hero3,
    title: "Communauté Active",
    subtitle: "Plus qu'un club, une famille",
  },
  {
    src: hero4,
    title: "Projets Collaboratifs",
    subtitle: "Ensemble, nous codons",
  },
  { src: hero5, title: "Portes Ouvertes", subtitle: "Découvrez notre univers" },
  {
    src: hero6,
    title: "Expertise Partagée",
    subtitle: "De l'apprentissage à la maîtrise",
  },
  {
    src: hero7,
    title: "Passion & Excellence",
    subtitle: "Club Informatique UASZ",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Mouse parallax effect
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Variants pour les animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  // Particles flottantes (code binaire)
  const BinaryParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-500 font-mono text-xs md:text-sm font-bold"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: window.innerHeight + 50,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          {Math.random() > 0.5 ? "01010101" : "10101010"}
        </motion.div>
      ))}
    </div>
  );

  // Effet de grille tech
  const TechGrid = () => (
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(56, 142, 60, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56, 142, 60, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-dark-900"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Effects */}
      <TechGrid />
      <BinaryParticles />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Main Carousel */}
      <div className="relative w-full h-full perspective-1000">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Image avec parallax */}
            <motion.div
              className="relative w-full h-full"
              animate={{
                x: mousePosition.x * 20,
                y: mousePosition.y * 20,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              {/* Image principale */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroImages[currentIndex].src})`,
                  filter: "brightness(0.7)",
                }}
              />

              {/* Overlay avec glassmorphism */}
              <div className="absolute inset-0 backdrop-blur-[2px] bg-dark-900/30 z-20" />
            </motion.div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-30 flex items-center justify-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Icônes décoratives */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex justify-center space-x-4 mb-6"
                  >
                    {[Code2, Cpu, Binary, Sparkles].map((Icon, idx) => (
                      <motion.div
                        key={idx}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: idx * 0.2,
                        }}
                        className="w-8 h-8 md:w-12 md:h-12 bg-primary-500/20 backdrop-blur-xl rounded-lg flex items-center justify-center border border-primary-500/30"
                      >
                        <Icon className="w-4 h-4 md:w-6 md:h-6 text-primary-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Titre */}
                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6"
                  >
                    <span className="inline-block">
                      {heroImages[currentIndex].title
                        .split(" ")
                        .map((word, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="inline-block mr-3 md:mr-4"
                          >
                            {word}
                          </motion.span>
                        ))}
                    </span>
                  </motion.h1>

                  {/* Sous-titre */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-xl sm:text-2xl md:text-3xl text-primary-200 mb-8 md:mb-12 font-light"
                  >
                    {heroImages[currentIndex].subtitle}
                  </motion.p>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="w-full max-w-md mx-auto h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-xl"
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
                      initial={{ width: "0%" }}
                      animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      key={currentIndex}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 right-0 z-40 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary-500/30 hover:border-primary-500/50 transition-all group"
          aria-label="Image précédente"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-[-2px] transition-transform" />
        </motion.button>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary-500/30 hover:border-primary-500/50 transition-all group"
          aria-label="Image suivante"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-[2px] transition-transform" />
        </motion.button>
      </div>

      {/* Dots Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-40 flex justify-center space-x-2 md:space-x-3">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="group relative"
            aria-label={`Aller à l'image ${index + 1}`}
          >
            {/* Dot */}
            <div
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary-500 w-8 md:w-12"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />

            {/* Glow effect */}
            {index === currentIndex && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 bg-primary-500 rounded-full blur-md opacity-50"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Corner Tech Details */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-8 left-4 md:left-8 z-40 hidden lg:block"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 space-y-2">
          <div className="flex items-center space-x-2 text-primary-400">
            <Code2 className="w-4 h-4" />
            <span className="text-xs font-mono">CLUB_INFO_UASZ</span>
          </div>
          <div className="text-white/60 text-xs font-mono">
            Slide {currentIndex + 1}/{heroImages.length}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-40 hidden md:flex flex-col items-center"
      >
        <span className="text-white/60 text-xs uppercase tracking-wider mb-2">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroCarousel;
