import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Users,
  Calendar,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import EventsHero from "../components/evenement/EventsHero";
import EventTestimonials from "../components/evenement/EventTestimonials";
import EventsCTA from "../components/evenement/EventsCTA";
import RoadmapVision from "../components/evenement/RoadmapVision";
import ClubUniverse from "../components/evenement/ClubUniverse";
import DataNexusStream from "../components/evenement/DataNexusStream";
import TransitionGradient from "../components/evenement/TransitionGradient";

// --- TYPES & DATA ---

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  category:
    | "Événement"
    | "Workshop"
    | "Formation"
    | "Bootcamp"
    | "Conférence"
    | "Vie du Club";
  participants?: number;
  image: string; // Image de couverture
  images?: string[]; // Galerie complète
  status: "À venir" | "En cours" | "Terminé";
  color: string;
}

// Données basées sur ton LS
const eventsData: Event[] = [
  {
    id: 1,
    title: "Journées Portes Ouvertes 2025",
    description:
      "L'événement phare de l'année ! Découverte des stands, présentations des projets étudiants, et immersion dans l'univers du Club Informatique.",
    date: "31 Mai 2025",
    location: "Campus UASZ",
    category: "Événement",
    participants: 200,
    status: "Terminé",
    color: "from-blue-500 to-indigo-600",
    image:
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0000.jpg",
    images: [
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0000.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0015.jpg",
      "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0047.jpg",
      "/src/assets/journee-portes-ouvertes-2eme-journee/20251108_125730.jpg",
      "/src/assets/journee-portes-ouvertes-2eme-journee/20251108_130549.jpg",
    ],
  },
  {
    id: 2,
    title: "Atelier Maintenance & Réseau",
    description:
      "Une journée technique dédiée à la maintenance hardware et à la configuration réseau. Démontage, nettoyage et optimisation des machines.",
    date: "28 Juin 2025",
    location: "Salle ST-150-1",
    category: "Workshop",
    participants: 45,
    status: "Terminé",
    color: "from-orange-500 to-red-600",
    image: "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0001.jpg",
    images: [
      "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0001.jpg",
      "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0005.jpg",
      "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0007.jpg",
      "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0021.jpg",
    ],
  },
  {
    id: 3,
    title: "Masterclass Photoshop",
    description:
      "Formation intensive sur le design graphique. Création d'affiches, retouche photo et maîtrise des outils essentiels d'Adobe Photoshop.",
    date: "30 Nov 2025",
    location: "Salle Info 3",
    category: "Formation",
    participants: 25,
    status: "Terminé",
    color: "from-purple-500 to-pink-600",
    image: "/src/assets/Formation_Photoshop/20251129_183442.jpg",
    images: [
      "/src/assets/Formation_Photoshop/20251129_183442.jpg",
      "/src/assets/Formation_Photoshop/20251129_183525.jpg",
      "/src/assets/Formation_Photoshop/20251129_202930.jpg",
    ],
  },
  {
    id: 4,
    title: "Vacance informatique",
    description:
      "Le club s'engage pour la communauté ! Des formations sont proposées durant les vacances scolaires.",
    date: "Durant les vacaances",
    location: "Incubateur UASZ",
    category: "Formation",
    participants: 10,
    status: "Terminé",
    color: "from-green-500 to-emerald-600",
    image: "/src/assets/Affiches-Evenements-Passers/bootcamp.png",
  },
  {
    id: 5,
    title: "Tech Solidaire",
    description:
      "Le club s'engage pour la communauté ! Journée ou des services sont offerts aux etudients comme l'installation de PC, activation office, etc",
    date: "Novembre 2025",
    location: "Ziguinchor",
    category: "Vie du Club",
    participants: 100,
    status: "À venir",
    color: "from-cyan-500 to-blue-600",
    image: "/src/assets/Affiches-Evenements-Passers/techsolidaire_journee1.png",
  },
  {
    id: 6,
    title: "The Débat ",
    description:
      "Etudiants et etudiantes, peut on vraiment etre libres a l'universite ? Le club s'engage pour la communauté !",
    date: "Juillet 2025",
    location: "Place des nations",
    category: "Conférence",
    status: "Terminé",
    color: "from-violet-600 to-indigo-600",
    image: "/src/assets/Affiches-Evenements-Passers/the_debat.png",
  },
  {
    id: 7,
    title: "Tutos Hebdo",
    description:
      "Chaque semaine, un nouveau sujet technique décortiqué par nos experts. Ouvert à tous les niveaux.",
    date: "Hebdomadaire",
    location: "En ligne / Présentiel",
    category: "Formation",
    status: "En cours",
    color: "from-yellow-500 to-orange-500",
    image: "/src/assets/Affiches-Evenements-Passers/tuto.png",
  },
  {
    id: 8,
    title: "Bach Club",
    description: "Represente le symbole, le club s'engage pour la communauté !",
    date: "Mensuel",
    location: "Symbole CLUB",
    category: "Vie du Club",
    status: "Terminé",
    color: "from-rose-500 to-red-500",
    image: "/src/assets/Affiches-Evenements-Passers/bach_cleub.png",
  },
];

// --- COMPOSANT PRINCIPAL ---

export default function EvenementPage() {
  const [filter, setFilter] = useState("Tous");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Filtrage des événements
  const filteredEvents = useMemo(() => {
    if (filter === "Tous") return eventsData;
    return eventsData.filter((e) => e.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* 1. Hero Section */}
      <EventsHero />

      {/* 2. Main Content */}
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 -mt-20 relative z-30">
        {/* Barre de Filtres */}
        <EventsFilter currentFilter={filter} onFilterChange={setFilter} />

        {/* Grille des Événements */}
        <EventsGrid events={filteredEvents} onEventClick={setSelectedEvent} />
      </main>

      {/* 3. Modal Lightbox (si événement sélectionné) */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
      <TransitionGradient />
      <EventTestimonials />
      <RoadmapVision />
      <ClubUniverse />
      <EventsCTA />
      <DataNexusStream />
    </div>
  );
}

// --- SOUS-COMPOSANTS (Internal) ---

// 1. Composant de Filtre
const EventsFilter = ({
  currentFilter,
  onFilterChange,
}: {
  currentFilter: string;
  onFilterChange: (f: string) => void;
}) => {
  const categories = [
    "Tous",
    "Événement",
    "Formation",
    "Workshop",
    "Bootcamp",
    "Vie du Club",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 rounded-2xl shadow-xl shadow-gray-200/50 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-100"
    >
      <div className="flex items-center gap-2 text-gray-500 font-medium">
        <Filter className="w-5 h-5" />
        <span>Filtrer par :</span>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onFilterChange(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
              currentFilter === cat
                ? "bg-dark-800 text-white shadow-lg transform scale-105"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

// 2. Composant Grille
const EventsGrid = ({
  events,
  onEventClick,
}: {
  events: Event[];
  onEventClick: (e: Event) => void;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
        {events.map((event, index) => (
          <motion.div
            layout
            key={event.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => onEventClick(event)}
            className="group cursor-pointer h-full"
          >
            <div className="h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-500 border border-gray-100 flex flex-col">
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10`}
                />
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-dark-900 shadow-sm">
                    {event.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <StatusBadge status={event.status} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs font-bold text-primary-600 mb-2 uppercase tracking-wider">
                  <Calendar className="w-3 h-3" />
                  {event.date}
                </div>

                <h3 className="text-xl font-black text-dark-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {event.title}
                </h3>

                <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
                  {event.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// 3. Composant Modal (Lightbox)
const EventModal = ({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const images =
    event.images && event.images.length > 0 ? event.images : [event.image];

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/90 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
      >
        {/* Left: Image Gallery */}
        <div className="lg:w-3/5 bg-black relative flex items-center justify-center h-[300px] lg:h-auto group">
          <img
            src={images[currentImg]}
            alt="Event"
            className="w-full h-full object-contain"
          />

          {/* Navigation Overlay */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                className="absolute left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-xs backdrop-blur">
                {currentImg + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Right: Info */}
        <div className="lg:w-2/5 p-8 overflow-y-auto bg-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>

          <div className="mb-6">
            <StatusBadge status={event.status} />
            <h2 className="text-3xl font-black text-dark-900 mt-3 mb-2 leading-tight">
              {event.title}
            </h2>
            <div
              className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${event.color}`}
            />
          </div>

          <div className="space-y-4 mb-8 text-gray-600">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary-600" />
              <span className="font-semibold text-dark-800">{event.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent-600" />
              <span>{event.location}</span>
            </div>
            {event.participants && (
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary-600" />
                <span>{event.participants}+ Participants</span>
              </div>
            )}
          </div>

          <h3 className="font-bold text-dark-900 mb-2">À propos</h3>
          <p className="text-gray-500 leading-relaxed mb-8">
            {event.description}
          </p>

          {event.status === "À venir" && (
            <button
              className={`w-full py-4 rounded-xl text-white font-bold shadow-lg bg-gradient-to-r ${event.color} hover:shadow-xl hover:scale-[1.02] transition-all`}
            >
              Je participe !
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Helper: Badge de status
const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    "À venir": "bg-blue-100 text-blue-700 border-blue-200",
    "En cours": "bg-green-100 text-green-700 border-green-200",
    Terminé: "bg-gray-100 text-gray-500 border-gray-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-extrabold border ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
};
