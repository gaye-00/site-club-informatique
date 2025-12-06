import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";
import { useState, useRef, type MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

// Import des images des événements
import portes1_1 from "../../assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0000.jpg";
import portes1_2 from "../../assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0015.jpg";
import portes1_3 from "../../assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0022.jpg";
import portes2_1 from "../../assets/journee-portes-ouvertes-2eme-journee/20251108_130549.jpg";
import portes2_2 from "../../assets/journee-portes-ouvertes-2eme-journee/20251108_134304.jpg";
import portes2_3 from "../../assets/journee-portes-ouvertes-2eme-journee/Sans-titre-14.png";
import maintenance1 from "../../assets/journee-maitenance-1-edi/IMG-20251111-WA0001.jpg";
import maintenance2 from "../../assets/journee-maitenance-1-edi/IMG-20251111-WA0005.jpg";

interface Event {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  participants: string;
  description: string;
  images: string[];
  badge: string;
  color: string;
  gradient: string;
  icon: typeof Calendar;
}

const events: Event[] = [
  {
    id: 1,
    title: "Journée Portes Ouvertes",
    subtitle: "1ère Édition",
    date: "26 Avril 2025",
    location: "Campus UASZ",
    participants: "150+ participants",
    description:
      "Une journée exceptionnelle de découverte du club avec des démonstrations en direct, des workshops interactifs et des sessions de networking.",
    images: [portes1_1, portes1_2, portes1_3],
    badge: "Succès 🎉",
    color: "from-blue-500 to-purple-600",
    gradient: "from-blue-50 to-purple-50",
    icon: Calendar,
  },
  {
    id: 2,
    title: "Journée Portes Ouvertes",
    subtitle: "2ème Édition",
    date: "08 Novembre 2025",
    location: "Campus UASZ",
    participants: "200+ participants",
    description:
      "Deuxième édition encore plus grande ! Des interactions en direct, du maitenance hardware, et des jeux gagnants.",
    images: [portes2_1, portes2_2, portes2_3],
    badge: "Événement Phare 🌟",
    color: "from-primary-500 to-accent-500",
    gradient: "from-primary-50 to-accent-50",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Journée Maintenance",
    subtitle: "1ère Édition EDI",
    date: "28 Juin 2025",
    location: "Salle ST-1 150",
    participants: "80+ participants",
    description:
      "Formation intensive sur la maintenance des systèmes informatiques, dépannage hardware et software, bonnes pratiques.",
    images: [maintenance1, maintenance2, portes1_2],
    badge: "Formation 🔧",
    color: "from-orange-500 to-red-600",
    gradient: "from-orange-50 to-red-50",
    icon: Award,
  },
];

const PastEventsHighlight = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  // Navigation vers la page événements
  const handleNavigateToEvents = () => {
    navigate("/evenement");
  };

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-0 w-96 h-96 bg-primary-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent-300 rounded-full blur-3xl"
        />

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          />
        ))}
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mb-6 border border-primary-200"
          >
            <Calendar className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">
              Nos Événements Passés
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
            <span className="text-dark-800">Moments </span>
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent">
              Inoubliables
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
          >
            Retour sur nos événements qui ont marqué l'histoire du club et
            transformé nos membres
          </motion.p>
        </motion.div>

        {/* Events Grid - Bento Box Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {events.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                isHovered={hoveredCard === event.id}
                onHover={() => setHoveredCard(event.id)}
                onLeave={() => setHoveredCard(null)}
                onNavigate={handleNavigateToEvents}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNavigateToEvents}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group"
          >
            <span>Voir Tous Les Événements</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Event Card Component with 3D Tilt Effect
const EventCard = ({
  event,
  index,
  isHovered,
  onHover,
  onLeave,
  onNavigate,
}: {
  event: Event;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onNavigate: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // State pour l'image active
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Mouse position tracking for tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  // Handle mouse move for 3D tilt
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;

    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onLeave();
  };

  // Changer l'image active au clic
  const handleImageClick = (imageIndex: number) => {
    setActiveImageIndex(imageIndex);
  };

  const Icon = event.icon;

  // Bento box layout classes
  const getGridClass = () => {
    if (index === 0) return "lg:col-span-7 lg:row-span-2"; // Large card
    if (index === 1) return "lg:col-span-5"; // Medium card
    return "lg:col-span-5"; // Medium card
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`${getGridClass()} group relative cursor-pointer`}
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${event.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
        animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Card */}
      <div
        className={`relative h-full bg-gradient-to-br ${event.gradient} rounded-3xl overflow-hidden border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-500`}
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Background Image with Parallax - IMAGE ACTIVE */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImageIndex}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{
                opacity: 1,
                scale: isHovered ? 1.1 : 1,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
              style={{
                filter: isHovered ? "brightness(0.9)" : "brightness(0.7)",
              }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${event.images[activeImageIndex]})`,
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent`}
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 md:p-8 z-10">
          {/* Top Section */}
          <div>
            {/* Badge */}
            <motion.div
              style={{ transform: "translateZ(40px)" }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 mb-4"
            >
              <Icon className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">
                {event.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              style={{ transform: "translateZ(50px)" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2"
            >
              {event.title}
            </motion.h3>
            <motion.p
              style={{ transform: "translateZ(45px)" }}
              className="text-lg text-white/90 font-medium mb-4"
            >
              {event.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              style={{ transform: "translateZ(40px)" }}
              className="text-white/80 text-sm md:text-base leading-relaxed mb-6"
            >
              {event.description}
            </motion.p>
          </div>

          {/* Bottom Section */}
          <div>
            {/* Info Pills */}
            <motion.div
              style={{ transform: "translateZ(35px)" }}
              className="flex flex-wrap gap-3 mb-4"
            >
              <div className="flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-xl rounded-lg border border-white/20">
                <Calendar className="w-4 h-4 text-white" />
                <span className="text-sm text-white">{event.date}</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-xl rounded-lg border border-white/20">
                <Users className="w-4 h-4 text-white" />
                <span className="text-sm text-white">{event.participants}</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-xl rounded-lg border border-white/20">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-sm text-white">{event.location}</span>
              </div>
            </motion.div>

            {/* Images Row - CLIQUABLES */}
            <motion.div
              style={{ transform: "translateZ(60px)" }}
              className="flex items-center space-x-2"
            >
              {event.images.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick(idx);
                  }}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 shadow-lg transition-all ${
                    idx > 0 ? "-ml-4" : ""
                  } ${
                    activeImageIndex === idx
                      ? "border-primary-400 ring-2 ring-primary-400 ring-offset-2 ring-offset-dark-900"
                      : "border-white/50 hover:border-white"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${event.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Indicateur d'image active */}
                  {activeImageIndex === idx && (
                    <motion.div
                      layoutId={`active-indicator-${event.id}`}
                      className="absolute inset-0 bg-primary-500/20 backdrop-blur-[1px] flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-3 h-3 bg-white rounded-full shadow-lg" />
                    </motion.div>
                  )}
                </motion.button>
              ))}

              {/* View More Button - Navigation vers /evenements */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate();
                }}
                className="ml-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-lg border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-all flex items-center space-x-1 group"
              >
                <span>Voir Plus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Compteur d'images */}
            <motion.div
              style={{ transform: "translateZ(30px)" }}
              className="mt-3 text-center"
            >
              <span className="text-white/60 text-xs">
                {activeImageIndex + 1} / {event.images.length}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Floating Icon */}
        <motion.div
          style={{ transform: "translateZ(70px)" }}
          animate={
            isHovered
              ? {
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30"
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PastEventsHighlight;
