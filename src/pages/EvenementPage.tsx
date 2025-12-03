// // import React from "react";

// // export default function EvenementPage() {
// //   return (
// //     <div>
// //       <p>Evenement</p>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Calendar,
//   MapPin,
//   Users,
//   Clock,
//   Tag,
//   X,
//   ChevronLeft,
//   ChevronRight,
//   Image as ImageIcon,
// } from "lucide-react";
// import EventsHero from "../components/evenement/EventsHero";

// // Types
// interface Event {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   location: string;
//   category: "Événement" | "Workshop" | "Formation" | "Bootcamp" | "Conférence";
//   participants?: number;
//   image: string;
//   images?: string[]; // Galerie de photos
//   status: "À venir" | "En cours" | "Terminé";
//   color: string;
// }

// const EvenementPage: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
//   const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Liste complète des événements réels
//   const events: Event[] = [
//     {
//       id: 1,
//       title: "Journées Portes Ouvertes 2024",
//       description:
//         "Deux journées exceptionnelles pour découvrir le Club Informatique UASZ ! Présentations, démonstrations de projets, ateliers interactifs, et rencontres avec les membres. Une occasion unique de rejoindre notre communauté tech.",
//       date: "8-10 Novembre 2024",
//       location: "Campus UASZ, Ziguinchor",
//       category: "Événement",
//       participants: 150,
//       image:
//         "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0000.jpg",
//       images: [
//         "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0000.jpg",
//         "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0001.jpg",
//         "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0004.jpg",
//         "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0005.jpg",
//         "/src/assets/journee-portes-ouvertes-1er-journee/IMG-20251110-WA0006.jpg",
//         "/src/assets/journee-portes-ouvertes-2eme-journee/20251108_125730.jpg",
//         "/src/assets/journee-portes-ouvertes-2eme-journee/20251108_130549.jpg",
//         "/src/assets/journee-portes-ouvertes-2eme-journee/20251108_134233.jpg",
//         "/src/assets/journee-portes-ouvertes-2eme-journee/Sans-titre-11.png",
//         "/src/assets/journee-portes-ouvertes-2eme-journee/Sans-titre-14.png",
//       ],
//       status: "Terminé",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       id: 2,
//       title: "Journée Maintenance 1ère Édition",
//       description:
//         "Atelier pratique de maintenance informatique : assemblage de PC, diagnostic de pannes, nettoyage de composants, installation de systèmes. Les participants ont pu manipuler du matériel réel et acquérir des compétences techniques essentielles.",
//       date: "11 Novembre 2024",
//       location: "Salle Informatique, UASZ",
//       category: "Workshop",
//       participants: 40,
//       image: "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0001.jpg",
//       images: [
//         "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0001.jpg",
//         "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0002.jpg",
//         "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0004.jpg",
//         "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0005.jpg",
//         "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0006.jpg",
//         "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0007.jpg",
//         "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0008.jpg",
//         "/src/assets/journee-maitenance-1-edi/IMG-20251111-WA0020.jpg",
//       ],
//       status: "Terminé",
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       id: 3,
//       title: "Formation Photoshop & Design Graphique",
//       description:
//         "Formation complète sur Adobe Photoshop et les principes du design graphique. Au programme : retouche photo, création de flyers, montage, effets visuels, et projets pratiques. 14 heures de formation intensive avec certificat à la clé.",
//       date: "29 Novembre 2024",
//       location: "Laboratoire Multimédia, UASZ",
//       category: "Formation",
//       participants: 25,
//       image: "/src/assets/Formation_Photoshop/20251129_183442.jpg",
//       images: [
//         "/src/assets/Formation_Photoshop/20251129_183442.jpg",
//         "/src/assets/Formation_Photoshop/20251129_183449.jpg",
//         "/src/assets/Formation_Photoshop/20251129_183455.jpg",
//         "/src/assets/Formation_Photoshop/20251129_183457.jpg",
//         "/src/assets/Formation_Photoshop/20251129_183500.jpg",
//         "/src/assets/Formation_Photoshop/20251129_183511.jpg",
//         "/src/assets/Formation_Photoshop/20251129_183525.jpg",
//         "/src/assets/Formation_Photoshop/20251129_183535.jpg",
//         "/src/assets/Formation_Photoshop/20251129_183624.jpg",
//         "/src/assets/Formation_Photoshop/20251129_202918.jpg",
//       ],
//       status: "Terminé",
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       id: 4,
//       title: "Bootcamp Développement Web",
//       description:
//         "Bootcamp intensif de développement web full-stack. HTML, CSS, JavaScript, React, Node.js, et bases de données. 5 jours d'apprentissage accéléré avec projets réels. Parfait pour débutants motivés et développeurs souhaitant monter en compétences.",
//       date: "À venir - Janvier 2025",
//       location: "Campus UASZ, Ziguinchor",
//       category: "Bootcamp",
//       participants: 30,
//       image: "/src/assets/Affiches-Evenements-Passers/bootcamp.png",
//       status: "À venir",
//       color: "from-orange-500 to-red-500",
//     },
//     {
//       id: 5,
//       title: "TechSolidaire - Journée 1",
//       description:
//         "Initiative sociale du club : enseigner l'informatique aux communautés locales. Ateliers gratuits pour débutants, aide à la création de CV, initiation aux outils bureautiques. Une journée de partage et de solidarité numérique.",
//       date: "Décembre 2024",
//       location: "Centre Communautaire, Ziguinchor",
//       category: "Événement",
//       participants: 60,
//       image:
//         "/src/assets/Affiches-Evenements-Passers/techsolidaire_journee1.png",
//       status: "À venir",
//       color: "from-primary-500 to-accent-500",
//     },
//     {
//       id: 6,
//       title: "The Debat - Tech & Société",
//       description:
//         "Conférence-débat sur l'impact des technologies dans la société sénégalaise. Intelligence artificielle, transformation digitale, emploi tech, éthique numérique. Avec des experts, entrepreneurs, et professionnels du secteur. Échanges, questions-réponses.",
//       date: "Janvier 2025",
//       location: "Amphithéâtre, UASZ",
//       category: "Conférence",
//       participants: 100,
//       image: "/src/assets/Affiches-Evenements-Passers/the_debat.png",
//       status: "À venir",
//       color: "from-indigo-500 to-purple-500",
//     },
//     {
//       id: 7,
//       title: "Tutoriels Hebdomadaires",
//       description:
//         "Sessions de tutoriels toutes les semaines ! Python, Git, Linux, bases de données, et plus encore. Format court (1-2h), pratique, et accessible à tous les niveaux. Rejoignez-nous pour apprendre de nouvelles compétences chaque semaine.",
//       date: "Tous les mercredis",
//       location: "Salle du Club, UASZ",
//       category: "Formation",
//       image: "/src/assets/Affiches-Evenements-Passers/tuto.png",
//       status: "En cours",
//       color: "from-yellow-500 to-orange-500",
//     },
//     {
//       id: 8,
//       title: "Bach Club - Soirée Networking",
//       description:
//         "Soirée conviviale de networking entre membres du club. Jeux, discussions tech, partage d'expériences, pizza et boissons. L'occasion idéale de tisser des liens, échanger des idées de projets, et rencontrer des passionnés comme vous !",
//       date: "Chaque mois",
//       location: "Campus UASZ",
//       category: "Événement",
//       image: "/src/assets/Affiches-Evenements-Passers/bach_cleub.png",
//       status: "En cours",
//       color: "from-pink-500 to-rose-500",
//     },
//   ];

//   const categories = [
//     "Tous",
//     "Événement",
//     "Workshop",
//     "Formation",
//     "Bootcamp",
//     "Conférence",
//   ];

//   const filteredEvents =
//     selectedCategory === "Tous"
//       ? events
//       : events.filter((event) => event.category === selectedCategory);

//   // Navigation lightbox
//   const nextImage = () => {
//     if (selectedEvent?.images) {
//       setCurrentImageIndex((prev) =>
//         prev === selectedEvent.images!.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedEvent?.images) {
//       setCurrentImageIndex((prev) =>
//         prev === 0 ? selectedEvent.images!.length - 1 : prev - 1
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <EventsHero />

//       {/* Events Section */}
//       <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Header avec filtres */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mb-12"
//           >
//             {/* Titre */}
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4">
//               <span className="text-gray-900">Tous nos </span>
//               <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
//                 événements
//               </span>
//             </h2>
//             <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
//               Découvrez tous les événements passés et à venir du Club
//               Informatique UASZ
//             </p>

//             {/* Filtres par catégorie */}
//             <div className="flex flex-wrap justify-center gap-3">
//               {categories.map((category) => (
//                 <motion.button
//                   key={category}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
//                     selectedCategory === category
//                       ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-200"
//                       : "bg-white border-2 border-gray-200 text-gray-700 hover:border-primary-300"
//                   }`}
//                 >
//                   {category}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>

//           {/* Grille d'événements */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <AnimatePresence mode="wait">
//               {filteredEvents.map((event, index) => (
//                 <motion.div
//                   key={event.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -30 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -8 }}
//                   className="group cursor-pointer"
//                   onClick={() => {
//                     setSelectedEvent(event);
//                     setCurrentImageIndex(0);
//                   }}
//                 >
//                   <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
//                     {/* Image */}
//                     <div className="relative h-56 overflow-hidden">
//                       <motion.img
//                         src={event.image}
//                         alt={event.title}
//                         className="w-full h-full object-cover"
//                         whileHover={{ scale: 1.1 }}
//                         transition={{ duration: 0.6 }}
//                       />

//                       {/* Overlay gradient */}
//                       <div
//                         className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
//                       />

//                       {/* Badge Status */}
//                       <div className="absolute top-4 right-4">
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
//                             event.status === "À venir"
//                               ? "bg-blue-500/80 text-white"
//                               : event.status === "En cours"
//                               ? "bg-green-500/80 text-white"
//                               : "bg-gray-500/80 text-white"
//                           }`}
//                         >
//                           {event.status}
//                         </span>
//                       </div>

//                       {/* Badge galerie si images disponibles */}
//                       {event.images && event.images.length > 1 && (
//                         <div className="absolute bottom-4 left-4">
//                           <div className="flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-semibold">
//                             <ImageIcon className="w-3 h-3" />
//                             <span>{event.images.length} photos</span>
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 flex-1 flex flex-col">
//                       {/* Catégorie */}
//                       <div className="flex items-center gap-2 mb-3">
//                         <Tag className="w-4 h-4 text-primary-600" />
//                         <span
//                           className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${event.color} text-white`}
//                         >
//                           {event.category}
//                         </span>
//                       </div>

//                       {/* Titre */}
//                       <h3 className="text-xl font-black text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
//                         {event.title}
//                       </h3>

//                       {/* Description */}
//                       <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
//                         {event.description}
//                       </p>

//                       {/* Infos */}
//                       <div className="space-y-2 text-sm text-gray-600">
//                         <div className="flex items-center gap-2">
//                           <Calendar className="w-4 h-4 text-primary-600" />
//                           <span>{event.date}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <MapPin className="w-4 h-4 text-accent-600" />
//                           <span>{event.location}</span>
//                         </div>
//                         {event.participants && (
//                           <div className="flex items-center gap-2">
//                             <Users className="w-4 h-4 text-primary-600" />
//                             <span>{event.participants}+ participants</span>
//                           </div>
//                         )}
//                       </div>

//                       {/* Bouton */}
//                       <motion.div
//                         className="mt-4 pt-4 border-t border-gray-100"
//                         whileHover={{ x: 5 }}
//                       >
//                         <span className="text-sm font-bold text-primary-600 flex items-center gap-2">
//                           Voir les détails
//                           <motion.span
//                             animate={{ x: [0, 4, 0] }}
//                             transition={{ duration: 1.5, repeat: Infinity }}
//                           >
//                             →
//                           </motion.span>
//                         </span>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>

//           {/* Message si aucun événement */}
//           {filteredEvents.length === 0 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-20"
//             >
//               <p className="text-xl text-gray-500">
//                 Aucun événement dans cette catégorie
//               </p>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* Modal Lightbox */}
//       <AnimatePresence>
//         {selectedEvent && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
//             onClick={() => setSelectedEvent(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="relative max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Bouton fermer */}
//               <button
//                 onClick={() => setSelectedEvent(null)}
//                 className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>

//               <div className="grid lg:grid-cols-2 gap-0 max-h-[90vh] overflow-auto">
//                 {/* Galerie Photos */}
//                 {selectedEvent.images && selectedEvent.images.length > 0 ? (
//                   <div className="relative bg-gray-900 flex items-center justify-center">
//                     <img
//                       src={selectedEvent.images[currentImageIndex]}
//                       alt={`${selectedEvent.title} - Photo ${
//                         currentImageIndex + 1
//                       }`}
//                       className="w-full h-full object-contain max-h-[70vh]"
//                     />

//                     {/* Navigation */}
//                     {selectedEvent.images.length > 1 && (
//                       <>
//                         <button
//                           onClick={prevImage}
//                           className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
//                         >
//                           <ChevronLeft className="w-6 h-6" />
//                         </button>
//                         <button
//                           onClick={nextImage}
//                           className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
//                         >
//                           <ChevronRight className="w-6 h-6" />
//                         </button>

//                         {/* Indicateur */}
//                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-sm font-semibold">
//                           {currentImageIndex + 1} /{" "}
//                           {selectedEvent.images.length}
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 ) : (
//                   <div className="relative bg-gray-900 flex items-center justify-center">
//                     <img
//                       src={selectedEvent.image}
//                       alt={selectedEvent.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 )}

//                 {/* Détails */}
//                 <div className="p-8 lg:p-12 overflow-y-auto">
//                   {/* Catégorie */}
//                   <div className="inline-flex items-center gap-2 mb-4">
//                     <span
//                       className={`text-sm font-bold px-4 py-2 rounded-full bg-gradient-to-r ${selectedEvent.color} text-white`}
//                     >
//                       {selectedEvent.category}
//                     </span>
//                     <span
//                       className={`text-sm font-bold px-4 py-2 rounded-full ${
//                         selectedEvent.status === "À venir"
//                           ? "bg-blue-100 text-blue-700"
//                           : selectedEvent.status === "En cours"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-gray-100 text-gray-700"
//                       }`}
//                     >
//                       {selectedEvent.status}
//                     </span>
//                   </div>

//                   {/* Titre */}
//                   <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
//                     {selectedEvent.title}
//                   </h2>

//                   {/* Infos */}
//                   <div className="space-y-3 mb-6">
//                     <div className="flex items-center gap-3 text-gray-700">
//                       <Calendar className="w-5 h-5 text-primary-600" />
//                       <span className="font-semibold">
//                         {selectedEvent.date}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-3 text-gray-700">
//                       <MapPin className="w-5 h-5 text-accent-600" />
//                       <span>{selectedEvent.location}</span>
//                     </div>
//                     {selectedEvent.participants && (
//                       <div className="flex items-center gap-3 text-gray-700">
//                         <Users className="w-5 h-5 text-primary-600" />
//                         <span>{selectedEvent.participants}+ participants</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Description */}
//                   <p className="text-gray-600 leading-relaxed mb-6">
//                     {selectedEvent.description}
//                   </p>

//                   {/* CTA */}
//                   {selectedEvent.status === "À venir" && (
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className={`w-full px-8 py-4 bg-gradient-to-r ${selectedEvent.color} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all`}
//                     >
//                       S'inscrire à cet événement
//                     </motion.button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default EvenementPage;

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
    title: "Journées Portes Ouvertes 2024",
    description:
      "L'événement phare de l'année ! Découverte des stands, présentations des projets étudiants, et immersion dans l'univers du Club Informatique.",
    date: "8-10 Nov 2024",
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
    date: "11 Nov 2024",
    location: "Salle Info",
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
    date: "29 Nov 2024",
    location: "Labo Multimédia",
    category: "Formation",
    participants: 30,
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
    title: "Bootcamp Dev Fullstack",
    description:
      "Semaine intensive de code pour créer une application complète de A à Z. HTML, CSS, React et Node.js au programme.",
    date: "Janvier 2025",
    location: "Incubateur UASZ",
    category: "Bootcamp",
    participants: 25,
    status: "À venir",
    color: "from-green-500 to-emerald-600",
    image: "/src/assets/Affiches-Evenements-Passers/bootcamp.png",
  },
  {
    id: 5,
    title: "Tech Solidaire",
    description:
      "Le club s'engage pour la communauté ! Journée d'initiation à l'informatique pour les débutants et aide à la maintenance pour les étudiants.",
    date: "Décembre 2024",
    location: "Ziguinchor",
    category: "Vie du Club",
    participants: 100,
    status: "À venir",
    color: "from-cyan-500 to-blue-600",
    image: "/src/assets/Affiches-Evenements-Passers/techsolidaire_journee1.png",
  },
  {
    id: 6,
    title: "The Débat : IA & Éthique",
    description:
      "Grande conférence-débat sur l'impact de l'Intelligence Artificielle dans notre quotidien et nos études.",
    date: "Février 2025",
    location: "Amphithéâtre",
    category: "Conférence",
    status: "À venir",
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
    title: "Bach Club Night",
    description:
      "Soirée d'intégration et de networking. L'occasion idéale pour rencontrer les anciens et les nouveaux membres.",
    date: "Mensuel",
    location: "Cafétéria",
    category: "Vie du Club",
    status: "En cours",
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
        <EventsFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          counts={eventsData}
        />

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
  counts,
}: {
  currentFilter: string;
  onFilterChange: (f: string) => void;
  counts: Event[];
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
