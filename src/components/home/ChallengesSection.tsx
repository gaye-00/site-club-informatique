// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   useMotionValue,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";
// import {
//   Zap,
//   Trophy,
//   Code,
//   Rocket,
//   Sparkles,
//   Brain,
//   Users,
//   Target,
//   Star,
//   Unlock,
//   Eye,
//   Lightbulb,
//   Award,
// } from "lucide-react";

// interface Challenge {
//   id: number;
//   title: string;
//   description: string;
//   difficulty: "Débutant" | "Intermédiaire" | "Expert";
//   icon: React.ElementType;
//   color: string;
//   participants: number;
//   reward: string;
// }

// const ChallengesSection: React.FC = () => {
//   const [secretDiscovered, setSecretDiscovered] = useState(false);
//   const [showSecretModal, setShowSecretModal] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isThinking, setIsThinking] = useState(true);
//   const secretZoneRef = useRef<HTMLDivElement>(null);

//   // Challenges du club
//   const challenges: Challenge[] = [
//     {
//       id: 1,
//       title: "Hackathon 48h",
//       description:
//         "Créez une application complète en 2 jours avec votre équipe",
//       difficulty: "Expert",
//       icon: Rocket,
//       color: "from-orange-500 to-red-600",
//       participants: 50,
//       reward: "500k FCFA",
//     },
//     {
//       id: 2,
//       title: "Code Challenge",
//       description: "Résolvez des problèmes algorithmiques chaque semaine",
//       difficulty: "Intermédiaire",
//       icon: Code,
//       color: "from-blue-500 to-cyan-600",
//       participants: 80,
//       reward: "Certificat",
//     },
//     {
//       id: 3,
//       title: "Projet Open Source",
//       description: "Contribuez à un projet open source reconnu",
//       difficulty: "Intermédiaire",
//       icon: Users,
//       color: "from-green-500 to-emerald-600",
//       participants: 35,
//       reward: "Badge GitHub",
//     },
//     {
//       id: 4,
//       title: "AI Challenge",
//       description: "Développez un modèle d'IA pour résoudre un problème réel",
//       difficulty: "Expert",
//       icon: Brain,
//       color: "from-purple-500 to-pink-600",
//       participants: 25,
//       reward: "300k FCFA",
//     },
//     {
//       id: 5,
//       title: "Speed Coding",
//       description: "Codez le plus vite possible avec précision",
//       difficulty: "Débutant",
//       icon: Zap,
//       color: "from-yellow-500 to-orange-500",
//       participants: 100,
//       reward: "Médaille",
//     },
//     {
//       id: 6,
//       title: "Startup Weekend",
//       description: "Lancez votre startup tech en un weekend",
//       difficulty: "Expert",
//       icon: Target,
//       color: "from-primary-500 to-accent-600",
//       participants: 40,
//       reward: "Financement",
//     },
//   ];

//   // Animation de la mascotte qui réfléchit
//   useEffect(() => {
//     const thinkingInterval = setInterval(() => {
//       setIsThinking((prev) => !prev);
//     }, 3000);
//     return () => clearInterval(thinkingInterval);
//   }, []);

//   // Tracking de la souris
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Découverte du secret
//   const handleSecretDiscovery = () => {
//     if (!secretDiscovered) {
//       setSecretDiscovered(true);
//       setShowSecretModal(true);
//       // Confettis effect
//       createConfetti();
//     }
//   };

//   const createConfetti = () => {
//     // Logique de confettis (simulation)
//     console.log("🎉 Confettis lancés !");
//   };

//   return (
//     <section className="relative min-h-screen py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
//       {/* Particules flottantes interactives */}
//       <FloatingParticles mousePosition={mousePosition} />

//       {/* Background décoratif */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 90, 0],
//             opacity: [0.1, 0.2, 0.1],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute top-20 left-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             rotate: [90, 0, 90],
//             opacity: [0.15, 0.25, 0.15],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute bottom-20 right-20 w-96 h-96 bg-accent-300 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header avec Mascotte Pensante */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           {/* Mascotte Robot qui réfléchit */}
//           <motion.div
//             className="relative inline-block mb-8"
//             animate={{
//               y: [0, -10, 0],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <motion.div
//               className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto"
//               whileHover={{ scale: 1.1, rotate: 5 }}
//             >
//               {/* Tête du robot */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-600 rounded-3xl shadow-2xl"
//                 animate={{
//                   rotateZ: isThinking ? [0, -5, 5, 0] : 0,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   repeat: isThinking ? Infinity : 0,
//                 }}
//               >
//                 {/* Yeux */}
//                 <motion.div className="absolute top-8 left-6 w-4 h-4 bg-white rounded-full">
//                   <motion.div
//                     className="w-2 h-2 bg-dark-900 rounded-full m-1"
//                     animate={{
//                       scale: isThinking ? [1, 0.5, 1] : 1,
//                     }}
//                     transition={{
//                       duration: 1,
//                       repeat: Infinity,
//                     }}
//                   />
//                 </motion.div>
//                 <motion.div className="absolute top-8 right-6 w-4 h-4 bg-white rounded-full">
//                   <motion.div
//                     className="w-2 h-2 bg-dark-900 rounded-full m-1"
//                     animate={{
//                       scale: isThinking ? [1, 0.5, 1] : 1,
//                     }}
//                     transition={{
//                       duration: 1,
//                       repeat: Infinity,
//                       delay: 0.2,
//                     }}
//                   />
//                 </motion.div>

//                 {/* Antenne */}
//                 <motion.div
//                   className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-6 bg-white rounded-full"
//                   animate={{
//                     height: [24, 32, 24],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                   }}
//                 >
//                   <motion.div
//                     className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full"
//                     animate={{
//                       scale: [1, 1.5, 1],
//                       opacity: [1, 0.5, 1],
//                     }}
//                     transition={{
//                       duration: 1,
//                       repeat: Infinity,
//                     }}
//                   />
//                 </motion.div>

//                 {/* Bouche pensante */}
//                 <motion.div
//                   className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full"
//                   animate={{
//                     scaleX: isThinking ? [1, 0.8, 1] : 1,
//                   }}
//                   transition={{
//                     duration: 0.8,
//                     repeat: Infinity,
//                   }}
//                 />
//               </motion.div>

//               {/* Bulle de pensée */}
//               <AnimatePresence>
//                 {isThinking && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0, x: 60, y: -40 }}
//                     animate={{ opacity: 1, scale: 1, x: 60, y: -40 }}
//                     exit={{ opacity: 0, scale: 0 }}
//                     className="absolute top-0 right-0"
//                   >
//                     <div className="relative bg-white rounded-2xl p-4 shadow-2xl border-2 border-primary-200">
//                       <Lightbulb className="w-8 h-8 text-yellow-500 animate-pulse" />
//                       {/* Petites bulles */}
//                       <div className="absolute -bottom-4 left-4 w-3 h-3 bg-white rounded-full border-2 border-primary-200" />
//                       <div className="absolute -bottom-7 left-2 w-2 h-2 bg-white rounded-full border-2 border-primary-200" />
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>

//             {/* Effet de brillance */}
//             <motion.div
//               className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent"
//               animate={{
//                 x: [-200, 200],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
//           </motion.div>

//           {/* Badge */}
//           <motion.div
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-50 via-white to-accent-50 rounded-full border border-primary-200/50 mb-6 shadow-lg"
//           >
//             <Trophy className="w-5 h-5 text-primary-600" />
//             <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
//               Défis & Challenges
//             </span>
//             <Sparkles className="w-5 h-5 text-accent-600 animate-pulse" />
//           </motion.div>

//           {/* Titre avec effet de typing */}
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
//           >
//             Quels{" "}
//             <span className="relative inline-block">
//               <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">
//                 Challenges
//               </span>
//               <motion.span
//                 className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-accent-600"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//               />
//             </span>
//             <br />
//             relèverez-vous ?
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
//           >
//             Testez vos compétences, dépassez vos limites et gagnez des
//             récompenses ! 🏆
//           </motion.p>
//         </motion.div>

//         {/* Grille de Challenges avec effet 3D */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
//           {challenges.map((challenge, index) => (
//             <ChallengeCard
//               key={challenge.id}
//               challenge={challenge}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* ZONE SECRÈTE CACHÉE - EASTER EGG */}
//         <motion.div
//           ref={secretZoneRef}
//           onHoverStart={handleSecretDiscovery}
//           className="relative mx-auto max-w-4xl"
//         >
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="relative h-32 rounded-3xl overflow-hidden cursor-pointer group"
//           >
//             {/* Zone invisible qui se révèle */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-primary-900 via-accent-900 to-primary-900 opacity-0 group-hover:opacity-100 transition-all duration-700"
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   whileHover={{ scale: 1, rotate: 0 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                   className="text-center"
//                 >
//                   <motion.div
//                     animate={{
//                       rotate: [0, 360],
//                       scale: [1, 1.2, 1],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                     }}
//                   >
//                     <Eye className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
//                   </motion.div>
//                   <p className="text-white font-bold text-lg">
//                     Zone Secrète Détectée... 👀
//                   </p>
//                 </motion.div>
//               </div>

//               {/* Particules qui apparaissent */}
//               {[...Array(20)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute w-2 h-2 bg-yellow-400 rounded-full"
//                   initial={{
//                     x: "50%",
//                     y: "50%",
//                     opacity: 0,
//                   }}
//                   whileHover={{
//                     x: `${Math.random() * 100}%`,
//                     y: `${Math.random() * 100}%`,
//                     opacity: [0, 1, 0],
//                   }}
//                   transition={{
//                     duration: 2,
//                     delay: i * 0.05,
//                   }}
//                 />
//               ))}
//             </motion.div>

//             {/* Hint subtil */}
//             <motion.div
//               animate={{
//                 opacity: secretDiscovered ? 0 : [0.3, 0.6, 0.3],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//               }}
//               className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-3xl flex items-center justify-center"
//             >
//               <p className="text-gray-400 text-sm italic">
//                 Passez votre souris ici... 🤫
//               </p>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Modal Secret Découvert */}
//       <SecretModal
//         isOpen={showSecretModal}
//         onClose={() => setShowSecretModal(false)}
//       />
//     </section>
//   );
// };

// // Composant Challenge Card avec effet 3D
// interface ChallengeCardProps {
//   challenge: Challenge;
//   index: number;
// }

// const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
//   const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     mouseX.set(e.clientX - centerX);
//     mouseY.set(e.clientY - centerY);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//     setIsHovered(false);
//   };

//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty) {
//       case "Débutant":
//         return "from-green-500 to-emerald-500";
//       case "Intermédiaire":
//         return "from-blue-500 to-cyan-500";
//       case "Expert":
//         return "from-red-500 to-orange-500";
//       default:
//         return "from-gray-500 to-gray-600";
//     }
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d",
//       }}
//       className="relative group cursor-pointer"
//     >
//       <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent overflow-hidden">
//         {/* Gradient background animé */}
//         <motion.div
//           className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
//           animate={{
//             scale: isHovered ? [1, 1.2, 1] : 1,
//             rotate: isHovered ? [0, 180, 360] : 0,
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//           }}
//         />

//         {/* Glow border */}
//         <div
//           className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${challenge.color} blur-xl`}
//           style={{ zIndex: -1 }}
//         />

//         {/* Content */}
//         <div className="relative z-10">
//           {/* Icon avec rotation 3D */}
//           <motion.div
//             whileHover={{ rotateY: 360, scale: 1.2 }}
//             transition={{ duration: 0.8 }}
//             className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${challenge.color} flex items-center justify-center shadow-xl`}
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <challenge.icon className="w-8 h-8 text-white" />
//           </motion.div>

//           {/* Titre */}
//           <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
//             {challenge.title}
//           </h3>

//           {/* Description */}
//           <p className="text-gray-600 mb-6 leading-relaxed">
//             {challenge.description}
//           </p>

//           {/* Info badges */}
//           <div className="flex flex-wrap gap-3 mb-6">
//             {/* Difficulté */}
//             <div
//               className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${getDifficultyColor(
//                 challenge.difficulty
//               )} rounded-full`}
//             >
//               <Star className="w-4 h-4 text-white" />
//               <span className="text-xs font-bold text-white">
//                 {challenge.difficulty}
//               </span>
//             </div>

//             {/* Participants */}
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full">
//               <Users className="w-4 h-4 text-white" />
//               <span className="text-xs font-bold text-white">
//                 {challenge.participants}
//               </span>
//             </div>
//           </div>

//           {/* Reward */}
//           <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
//             <div className="flex items-center gap-2">
//               <Award className="w-5 h-5 text-yellow-600" />
//               <span className="text-sm font-bold text-gray-700">
//                 Récompense
//               </span>
//             </div>
//             <span className="text-sm font-black text-yellow-700">
//               {challenge.reward}
//             </span>
//           </div>

//           {/* Bouton CTA */}
//           <motion.button
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             className={`mt-6 w-full py-4 bg-gradient-to-r ${challenge.color} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
//           >
//             <span className="relative z-10 flex items-center justify-center gap-2">
//               Relever le défi
//               <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </span>
//             <motion.div
//               className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
//               initial={{ x: "-100%" }}
//               whileHover={{ x: "100%" }}
//               transition={{ duration: 0.6 }}
//             />
//           </motion.button>
//         </div>

//         {/* Shine effect */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
//           initial={{ x: "-100%", opacity: 0 }}
//           whileHover={{ x: "100%", opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         />
//       </div>
//     </motion.div>
//   );
// };

// // Composant Particules Flottantes
// interface FloatingParticlesProps {
//   mousePosition: { x: number; y: number };
// }

// const FloatingParticles: React.FC<FloatingParticlesProps> = ({
//   mousePosition,
// }) => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(15)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-3 h-3 rounded-full"
//           style={{
//             background:
//               i % 3 === 0 ? "#388E3C" : i % 3 === 1 ? "#059669" : "#FCD34D",
//             left: `${(i * 7) % 100}%`,
//             top: `${(i * 13) % 100}%`,
//           }}
//           animate={{
//             x: [0, mousePosition.x * 0.02, 0],
//             y: [0, -30, 0],
//             opacity: [0.3, 0.6, 0.3],
//             scale: [1, 1.5, 1],
//           }}
//           transition={{
//             duration: 3 + i * 0.5,
//             repeat: Infinity,
//             delay: i * 0.2,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Modal Secret
// interface SecretModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const SecretModal: React.FC<SecretModalProps> = ({ isOpen, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//           className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
//         >
//           <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             animate={{ scale: 1, rotate: 0 }}
//             exit={{ scale: 0, rotate: 180 }}
//             transition={{ type: "spring", duration: 0.8 }}
//             onClick={(e) => e.stopPropagation()}
//             className="relative bg-gradient-to-br from-primary-900 via-accent-900 to-dark-900 rounded-3xl p-8 lg:p-12 max-w-2xl w-full shadow-2xl border-4 border-yellow-400"
//           >
//             {/* Confettis animés */}
//             {[...Array(30)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-3 h-3 rounded-full"
//                 style={{
//                   background: ["#FFD700", "#FF6B6B", "#4ECDC4", "#95E1D3"][
//                     i % 4
//                   ],
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                 }}
//                 animate={{
//                   y: [0, -500],
//                   rotate: [0, 360],
//                   opacity: [1, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   delay: i * 0.05,
//                   repeat: Infinity,
//                 }}
//               />
//             ))}

//             {/* Icône centrale */}
//             <motion.div
//               animate={{
//                 rotate: [0, 360],
//                 scale: [1, 1.2, 1],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//               }}
//               className="mx-auto w-24 h-24 mb-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl"
//             >
//               <Unlock className="w-12 h-12 text-dark-900" />
//             </motion.div>

//             {/* Message secret */}
//             <h3 className="text-3xl lg:text-4xl font-black text-center mb-4">
//               <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
//                 🎉 Félicitations ! 🎉
//               </span>
//             </h3>

//             <p className="text-white text-center text-lg lg:text-xl mb-6 leading-relaxed">
//               Tu as découvert les{" "}
//               <span className="font-black text-yellow-400">clés secrètes</span>{" "}
//               du Club Informatique !
//               <br />
//               <span className="text-sm text-gray-300 italic">
//                 (Ne le dis à personne... 🤫)
//               </span>
//             </p>

//             {/* Code secret */}
//             <motion.div
//               animate={{
//                 boxShadow: [
//                   "0 0 20px rgba(251, 191, 36, 0.5)",
//                   "0 0 40px rgba(251, 191, 36, 0.8)",
//                   "0 0 20px rgba(251, 191, 36, 0.5)",
//                 ],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//               }}
//               className="bg-black/50 rounded-2xl p-6 mb-6 border-2 border-yellow-400/50"
//             >
//               <p className="text-yellow-400 font-mono text-center text-sm lg:text-base">
//                 CODE SECRET:{" "}
//                 <span className="font-black text-xl">UASZ-CLUB-2025-ELITE</span>
//               </p>
//               <p className="text-gray-400 text-center text-xs mt-2">
//                 Montre ce code au président pour débloquer des avantages
//                 exclusifs ! 🚀
//               </p>
//             </motion.div>

//             {/* Bouton fermer */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={onClose}
//               className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-dark-900 font-black rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
//             >
//               Garder le secret 🤐
//             </motion.button>

//             {/* Particules autour du modal */}
//             <motion.div
//               className="absolute inset-0 rounded-3xl"
//               animate={{
//                 boxShadow: [
//                   "0 0 60px rgba(251, 191, 36, 0.6)",
//                   "0 0 100px rgba(251, 191, 36, 0.8)",
//                   "0 0 60px rgba(251, 191, 36, 0.6)",
//                 ],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//               }}
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ChallengesSection;

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Zap,
  Trophy,
  Code,
  Rocket,
  Sparkles,
  Brain,
  Users,
  Target,
  Star,
  Unlock,
  Eye,
  Lightbulb,
  Award,
} from "lucide-react";
interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: "Débutant" | "Intermédiaire" | "Expert";
  icon: React.ElementType;
  color: string;
  participants: number;
  reward: string;
}
const ChallengesSection: React.FC = () => {
  const [secretDiscovered, setSecretDiscovered] = useState(false);
  const [showSecretModal, setShowSecretModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isThinking, setIsThinking] = useState(true);
  const secretZoneRef = useRef<HTMLDivElement>(null);
  // Challenges du club
  const challenges: Challenge[] = [
    {
      id: 1,
      title: "Hackathon 48h",
      description:
        "Créez une application complète en 2 jours avec votre équipe",
      difficulty: "Expert",
      icon: Rocket,
      color: "from-orange-500 to-red-600",
      participants: 50,
      reward: "500k FCFA",
    },
    {
      id: 2,
      title: "Code Challenge",
      description: "Résolvez des problèmes algorithmiques chaque semaine",
      difficulty: "Intermédiaire",
      icon: Code,
      color: "from-blue-500 to-cyan-600",
      participants: 80,
      reward: "Certificat",
    },
    {
      id: 3,
      title: "Projet Open Source",
      description: "Contribuez à un projet open source reconnu",
      difficulty: "Intermédiaire",
      icon: Users,
      color: "from-green-500 to-emerald-600",
      participants: 35,
      reward: "Badge GitHub",
    },
    {
      id: 4,
      title: "AI Challenge",
      description: "Développez un modèle d'IA pour résoudre un problème réel",
      difficulty: "Expert",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      participants: 25,
      reward: "300k FCFA",
    },
    {
      id: 5,
      title: "Speed Coding",
      description: "Codez le plus vite possible avec précision",
      difficulty: "Débutant",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      participants: 100,
      reward: "Médaille",
    },
    {
      id: 6,
      title: "Startup Weekend",
      description: "Lancez votre startup tech en un weekend",
      difficulty: "Expert",
      icon: Target,
      color: "from-primary-500 to-accent-600",
      participants: 40,
      reward: "Financement",
    },
  ];
  // Animation de la mascotte qui réfléchit
  useEffect(() => {
    const thinkingInterval = setInterval(() => {
      setIsThinking((prev) => !prev);
    }, 3000);
    return () => clearInterval(thinkingInterval);
  }, []);
  // Tracking de la souris
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  // Découverte du secret
  const handleSecretDiscovery = () => {
    if (!secretDiscovered && Math.random() < 1 / 500) {
      setSecretDiscovered(true);
      setShowSecretModal(true);
      // Confettis effect
      createConfetti();
    }
  };
  const createConfetti = () => {
    // Logique de confettis (simulation)
    console.log("🎉 Confettis lancés !");
  };
  return (
    <section className="relative min-h-screen py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Particules flottantes interactives */}
      <FloatingParticles mousePosition={mousePosition} />
      {/* Background décoratif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent-300 rounded-full blur-3xl"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header avec Mascotte Pensante */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Mascotte Robot qui réfléchit */}
          <motion.div
            className="relative inline-block mb-8"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {/* Tête du robot */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-600 rounded-3xl shadow-2xl"
                animate={{
                  rotateZ: isThinking ? [0, -5, 5, 0] : 0,
                }}
                transition={{
                  duration: 0.5,
                  repeat: isThinking ? Infinity : 0,
                }}
              >
                {/* Yeux */}
                <motion.div className="absolute top-8 left-6 w-4 h-4 bg-white rounded-full">
                  <motion.div
                    className="w-2 h-2 bg-dark-900 rounded-full m-1"
                    animate={{
                      scale: isThinking ? [1, 0.5, 1] : 1,
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
                <motion.div className="absolute top-8 right-6 w-4 h-4 bg-white rounded-full">
                  <motion.div
                    className="w-2 h-2 bg-dark-900 rounded-full m-1"
                    animate={{
                      scale: isThinking ? [1, 0.5, 1] : 1,
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                  />
                </motion.div>
                {/* Antenne */}
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-6 bg-white rounded-full"
                  animate={{
                    height: [24, 32, 24],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <motion.div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
                {/* Bouche pensante */}
                <motion.div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full"
                  animate={{
                    scaleX: isThinking ? [1, 0.8, 1] : 1,
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              {/* Bulle de pensée */}
              <AnimatePresence>
                {isThinking && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, x: 60, y: -40 }}
                    animate={{ opacity: 1, scale: 1, x: 60, y: -40 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute top-0 right-0"
                  >
                    <div className="relative bg-white rounded-2xl p-4 shadow-2xl border-2 border-primary-200">
                      <Lightbulb className="w-8 h-8 text-yellow-500 animate-pulse" />
                      {/* Petites bulles */}
                      <div className="absolute -bottom-4 left-4 w-3 h-3 bg-white rounded-full border-2 border-primary-200" />
                      <div className="absolute -bottom-7 left-2 w-2 h-2 bg-white rounded-full border-2 border-primary-200" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            {/* Effet de brillance */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: [-200, 200],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
          {/* Badge */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-50 via-white to-accent-50 rounded-full border border-primary-200/50 mb-6 shadow-lg"
          >
            <Trophy className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Défis & Challenges
            </span>
            <Sparkles className="w-5 h-5 text-accent-600 animate-pulse" />
          </motion.div>
          {/* Titre avec effet de typing */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Quels{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">
                Challenges
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-accent-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
            <br />
            relèverez-vous ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Testez vos compétences, dépassez vos limites et gagnez des
            récompenses ! 🏆
          </motion.p>
        </motion.div>
        {/* Grille de Challenges avec effet 3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              index={index}
            />
          ))}
        </div>
        {/* ZONE SECRÈTE CACHÉE - EASTER EGG */}
        <motion.div
          ref={secretZoneRef}
          onHoverStart={handleSecretDiscovery}
          className="relative mx-auto max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-32 rounded-3xl overflow-hidden cursor-pointer group"
          >
            {/* Zone invisible qui se révèle */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-900 via-accent-900 to-primary-900 opacity-0 group-hover:opacity-100 transition-all duration-700"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Eye className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                  </motion.div>
                  <p className="text-white font-bold text-lg">
                    Zone Secrète Détectée... 👀
                  </p>
                </motion.div>
              </div>
              {/* Particules qui apparaissent */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  initial={{
                    x: "50%",
                    y: "50%",
                    opacity: 0,
                  }}
                  whileHover={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.05,
                  }}
                />
              ))}
            </motion.div>
            {/* Hint subtil */}
            <motion.div
              animate={{
                opacity: secretDiscovered ? 0 : [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-3xl flex items-center justify-center"
            >
              <p className="text-gray-400 text-sm italic">
                Passez votre souris ici... 🤫
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {/* Modal Secret Découvert */}
      <SecretModal
        isOpen={showSecretModal}
        onClose={() => setShowSecretModal(false)}
      />
    </section>
  );
};
// Composant Challenge Card avec effet 3D
interface ChallengeCardProps {
  challenge: Challenge;
  index: number;
}
const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant":
        return "from-green-500 to-emerald-500";
      case "Intermédiaire":
        return "from-blue-500 to-cyan-500";
      case "Expert":
        return "from-red-500 to-orange-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer"
    >
      <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent overflow-hidden">
        {/* Gradient background animé */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            rotate: isHovered ? [0, 180, 360] : 0,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        {/* Glow border */}
        <div
          className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${challenge.color} blur-xl`}
          style={{ zIndex: -1 }}
        />
        {/* Content */}
        <div className="relative z-10">
          {/* Icon avec rotation 3D */}
          <motion.div
            whileHover={{ rotateY: 360, scale: 1.2 }}
            transition={{ duration: 0.8 }}
            className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${challenge.color} flex items-center justify-center shadow-xl`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <challenge.icon className="w-8 h-8 text-white" />
          </motion.div>
          {/* Titre */}
          <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {challenge.title}
          </h3>
          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {challenge.description}
          </p>
          {/* Info badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {/* Difficulté */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${getDifficultyColor(
                challenge.difficulty
              )} rounded-full`}
            >
              <Star className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">
                {challenge.difficulty}
              </span>
            </div>
            {/* Participants */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full">
              <Users className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">
                {challenge.participants}
              </span>
            </div>
          </div>
          {/* Reward */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-bold text-gray-700">
                Récompense
              </span>
            </div>
            <span className="text-sm font-black text-yellow-700">
              {challenge.reward}
            </span>
          </div>
          {/* Bouton CTA */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-6 w-full py-4 bg-gradient-to-r ${challenge.color} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Relever le défi
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </div>
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: "100%", opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};
// Composant Particules Flottantes
interface FloatingParticlesProps {
  mousePosition: { x: number; y: number };
}
const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  mousePosition,
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background:
              i % 3 === 0 ? "#388E3C" : i % 3 === 1 ? "#059669" : "#FCD34D",
            left: `${(i * 7) % 100}%`,
            top: `${(i * 13) % 100}%`,
          }}
          animate={{
            x: [0, mousePosition.x * 0.02, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};
// Modal Secret
interface SecretModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const SecretModal: React.FC<SecretModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", duration: 0.8 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-br from-primary-900 via-accent-900 to-dark-900 rounded-3xl p-8 lg:p-12 max-w-2xl w-full shadow-2xl border-4 border-yellow-400"
          >
            {/* Confettis animés */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: ["#FFD700", "#FF6B6B", "#4ECDC4", "#95E1D3"][
                    i % 4
                  ],
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -500],
                  rotate: [0, 360],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.05,
                  repeat: Infinity,
                }}
              />
            ))}
            {/* Icône centrale */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="mx-auto w-24 h-24 mb-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl"
            >
              <Unlock className="w-12 h-12 text-dark-900" />
            </motion.div>
            {/* Message secret */}
            <h3 className="text-3xl lg:text-4xl font-black text-center mb-4">
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                🎉 Félicitations ! 🎉
              </span>
            </h3>
            <p className="text-white text-center text-lg lg:text-xl mb-6 leading-relaxed">
              Tu as découvert les{" "}
              <span className="font-black text-yellow-400">clés secrètes</span>{" "}
              du Club Informatique !
              <br />
              <span className="text-sm text-gray-300 italic">
                (Ne le dis à personne... 🤫)
              </span>
            </p>
            {/* Code secret */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(251, 191, 36, 0.5)",
                  "0 0 40px rgba(251, 191, 36, 0.8)",
                  "0 0 20px rgba(251, 191, 36, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="bg-black/50 rounded-2xl p-6 mb-6 border-2 border-yellow-400/50"
            >
              <p className="text-yellow-400 font-mono text-center text-sm lg:text-base">
                CODE SECRET:{" "}
                <span className="font-black text-xl">UASZ-CLUB-2025-ELITE</span>
              </p>
              <p className="text-gray-400 text-center text-xs mt-2">
                Montre ce code au président pour débloquer des avantages
                exclusifs ! 🚀
              </p>
            </motion.div>
            {/* Bouton fermer */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-dark-900 font-black rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Garder le secret 🤐
            </motion.button>
            {/* Particules autour du modal */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{
                boxShadow: [
                  "0 0 60px rgba(251, 191, 36, 0.6)",
                  "0 0 100px rgba(251, 191, 36, 0.8)",
                  "0 0 60px rgba(251, 191, 36, 0.6)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ChallengesSection;
