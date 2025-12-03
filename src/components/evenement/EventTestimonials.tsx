// import React from "react";
// import { motion } from "framer-motion";
// import { Star, Quote, Calendar, Award, Sparkles } from "lucide-react";

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   event: string;
//   comment: string;
//   rating: number;
//   avatar: string;
//   gradient: string;
// }

// const EventTestimonials: React.FC = () => {
//   const testimonials: Testimonial[] = [
//     {
//       id: 1,
//       name: "Amadou Diallo",
//       role: "Étudiant L3 Informatique",
//       event: "Bootcamp Développement Web",
//       comment:
//         "Le bootcamp était incroyable ! J'ai appris React et Node.js en 5 jours. Les formateurs étaient passionnés et pédagogues. Je me sens maintenant capable de créer des applications web complètes.",
//       rating: 5,
//       avatar: "https://i.pravatar.cc/150?img=12",
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       id: 2,
//       name: "Fatou Sène",
//       role: "Étudiante M1 Réseaux",
//       event: "Formation Photoshop",
//       comment:
//         "Formation exceptionnelle ! En une journée, j'ai maîtrisé les bases du design graphique. Le formateur était patient et les exercices pratiques m'ont vraiment aidée. Je recommande vivement !",
//       rating: 5,
//       avatar: "https://i.pravatar.cc/150?img=5",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       id: 3,
//       name: "Moussa Ndiaye",
//       role: "Étudiant L2 Mathématiques",
//       event: "Journée Maintenance",
//       comment:
//         "Atelier pratique génial ! J'ai pu démonter et remonter un PC, diagnostiquer des pannes. Les encadreurs étaient très compétents. Une expérience hands-on qui change des cours théoriques.",
//       rating: 5,
//       avatar: "https://i.pravatar.cc/150?img=33",
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       id: 4,
//       name: "Aissatou Ba",
//       role: "Étudiante L3 Gestion",
//       event: "Journées Portes Ouvertes",
//       comment:
//         "Découvrir le club était une révélation ! L'ambiance est conviviale, les projets présentés étaient impressionnants. Je me suis inscrite immédiatement. Meilleure décision de l'année !",
//       rating: 5,
//       avatar: "https://i.pravatar.cc/150?img=9",
//       gradient: "from-orange-500 to-red-500",
//     },
//     {
//       id: 5,
//       name: "Ibrahima Sarr",
//       role: "Étudiant M2 Informatique",
//       event: "The Debat - Tech & Société",
//       comment:
//         "Conférence de haute qualité ! Les intervenants étaient des experts du secteur. Les débats sur l'IA et l'éthique m'ont ouvert les yeux. Un événement intellectuellement stimulant.",
//       rating: 5,
//       avatar: "https://i.pravatar.cc/150?img=14",
//       gradient: "from-primary-500 to-accent-500",
//     },
//     {
//       id: 6,
//       name: "Maimouna Diop",
//       role: "Étudiante L2 Informatique",
//       event: "Tutoriels Hebdomadaires",
//       comment:
//         "Les tutoriels chaque mercredi sont parfaits ! Format court, contenu dense, et toujours pratique. J'ai appris Git, Python, et Linux en quelques semaines. Un vrai accélérateur d'apprentissage.",
//       rating: 5,
//       avatar: "https://i.pravatar.cc/150?img=10",
//       gradient: "from-yellow-500 to-orange-500",
//     },
//   ];

//   return (
//     <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
//       {/* Background effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.05, 0.1, 0.05],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.06, 0.12, 0.06],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-300 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           {/* Badge */}
//           <motion.div
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-primary-200/50 mb-6 shadow-lg"
//           >
//             <Quote className="w-5 h-5 text-primary-600" />
//             <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
//               Témoignages
//             </span>
//             <Sparkles className="w-5 h-5 text-accent-500 animate-pulse" />
//           </motion.div>

//           {/* Titre */}
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
//           >
//             Ce qu'ils disent de{" "}
//             <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
//               nos événements
//             </span>
//           </motion.h2>

//           {/* Sous-titre */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
//           >
//             Des centaines de participants satisfaits partagent leur expérience
//           </motion.p>
//         </motion.div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="group"
//             >
//               <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 overflow-hidden">
//                 {/* Gradient background au hover */}
//                 <motion.div
//                   className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
//                 />

//                 {/* Quote Icon */}
//                 <motion.div
//                   animate={{
//                     rotate: [0, 5, 0],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     delay: index * 0.2,
//                   }}
//                   className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity"
//                 >
//                   <Quote className="w-16 h-16 text-primary-600" />
//                 </motion.div>

//                 {/* Avatar & Info */}
//                 <div className="relative flex items-center gap-4 mb-4">
//                   <motion.div
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     className="relative"
//                   >
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
//                     />
//                     <img
//                       src={testimonial.avatar}
//                       alt={testimonial.name}
//                       className="relative w-14 h-14 rounded-full border-3 border-white shadow-md object-cover"
//                     />
//                     {/* Badge vérifié */}
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       transition={{ type: "spring", delay: 0.5 + index * 0.1 }}
//                       className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
//                     >
//                       <svg
//                         className="w-3 h-3 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </motion.div>
//                   </motion.div>

//                   <div className="flex-1">
//                     <h4 className="font-bold text-gray-900">
//                       {testimonial.name}
//                     </h4>
//                     <p className="text-xs text-gray-600">{testimonial.role}</p>
//                   </div>
//                 </div>

//                 {/* Event Badge */}
//                 <div className="mb-4">
//                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full">
//                     <Calendar className="w-3 h-3 text-primary-700" />
//                     <span className="text-xs font-bold text-primary-700">
//                       {testimonial.event}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Rating Stars */}
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, scale: 0 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{
//                         delay: 0.6 + index * 0.1 + i * 0.05,
//                         type: "spring",
//                       }}
//                     >
//                       <Star
//                         className={`w-4 h-4 ${
//                           i < testimonial.rating
//                             ? "fill-yellow-400 text-yellow-400"
//                             : "fill-gray-200 text-gray-200"
//                         }`}
//                       />
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Comment */}
//                 <p className="relative text-sm text-gray-700 leading-relaxed italic">
//                   "{testimonial.comment}"
//                 </p>

//                 {/* Decorative corner */}
//                 <div
//                   className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${testimonial.gradient} opacity-0 group-hover:opacity-10 rounded-tl-3xl transition-opacity duration-500`}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Stats Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
//         >
//           {[
//             {
//               icon: Award,
//               value: "98%",
//               label: "Satisfaction",
//               color: "from-green-500 to-emerald-500",
//             },
//             {
//               icon: Calendar,
//               value: "500+",
//               label: "Participants",
//               color: "from-primary-500 to-accent-500",
//             },
//             {
//               icon: Sparkles,
//               value: "4.9/5",
//               label: "Note moyenne",
//               color: "from-yellow-500 to-orange-500",
//             },
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
//               whileHover={{ scale: 1.05, y: -3 }}
//               className="relative group"
//             >
//               <div className="relative p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center overflow-hidden">
//                 {/* Gradient background */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
//                 />

//                 {/* Icon */}
//                 <motion.div
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                   className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 shadow-md`}
//                 >
//                   <stat.icon className="w-6 h-6 text-white" />
//                 </motion.div>

//                 {/* Value */}
//                 <div
//                   className={`text-3xl font-black mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
//                 >
//                   {stat.value}
//                 </div>

//                 {/* Label */}
//                 <div className="text-sm font-semibold text-gray-600">
//                   {stat.label}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default EventTestimonials;

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aminata Diop",
    role: "Étudiante L2 Informatique",
    content:
      "Le Bootcamp Dev Fullstack a littéralement changé ma vision du code. Passer de la théorie à la pratique en 5 jours, c'était intense mais incroyablement enrichissant.",
    gradient: "from-pink-500 to-rose-500",
    delay: 0,
  },
  {
    id: 2,
    name: "Moussa Fall",
    role: "Membre Actif",
    content:
      "L'ambiance aux soirées Bach Club est juste géniale. C'est là que j'ai trouvé mes co-fondateurs pour notre projet de startup. Le networking est réel !",
    gradient: "from-cyan-500 to-blue-500",
    delay: 0.2,
  },
  {
    id: 3,
    name: "Sarah Cissé",
    role: "Designer UI/UX",
    content:
      "La Masterclass Photoshop n'était pas juste technique, elle était artistique. J'ai appris à donner vie à mes idées. Merci aux formateurs pour leur patience.",
    gradient: "from-amber-400 to-orange-500",
    delay: 0.4,
  },
];

const EventTestimonials: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-dark-900">
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbes lumineux animés */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-600 rounded-full blur-[120px]"
        />

        {/* Grille subtile */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-bold text-gray-300 tracking-wider uppercase">
              L'Écho du Campus
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Ce qu'ils disent de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              l'expérience
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.8, type: "spring" }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Carte Glassmorphism */}
              <div className="h-full relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-500 overflow-hidden">
                {/* Gradient Glow au survol */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.gradient} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full`}
                />

                {/* Icône Quote Géante */}
                <Quote className="absolute top-6 right-6 w-24 h-24 text-white/5 rotate-12" />

                {/* Contenu */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>

                  <p className="text-lg text-gray-300 font-medium leading-relaxed mb-8 flex-grow">
                    "{item.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} p-0.5`}
                    >
                      <div className="w-full h-full bg-dark-900 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">
                        {item.name}
                      </h4>
                      <p
                        className={`text-sm bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-bold`}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTestimonials;
