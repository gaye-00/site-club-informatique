// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Calendar,
//   Bell,
//   Mail,
//   Phone,
//   Users,
//   Zap,
//   Sparkles,
//   ArrowRight,
//   CheckCircle,
//   TrendingUp,
//   Award,
// } from "lucide-react";

// const EventsCTA: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       setIsSubscribed(true);
//       setTimeout(() => {
//         setIsSubscribed(false);
//         setEmail("");
//       }, 3000);
//     }
//   };

//   const features = [
//     {
//       icon: Bell,
//       title: "Notifications",
//       description: "Soyez alerté des nouveaux événements",
//     },
//     {
//       icon: Calendar,
//       title: "Accès prioritaire",
//       description: "Inscrivez-vous avant tout le monde",
//     },
//     {
//       icon: Award,
//       title: "Certificats",
//       description: "Obtenez vos certificats de participation",
//     },
//     {
//       icon: Users,
//       title: "Communauté",
//       description: "Rejoignez 200+ membres actifs",
//     },
//   ];

//   return (
//     <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
//       {/* Background Effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Orbes animés */}
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.15, 0.25, 0.15],
//             rotate: [0, 180, 360],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute top-0 left-0 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-primary-400 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.3, 1, 1.3],
//             opacity: [0.2, 0.3, 0.2],
//             rotate: [360, 180, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute bottom-0 right-0 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-accent-400 rounded-full blur-3xl"
//         />

//         {/* Particules flottantes */}
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -30, 0],
//               x: [0, Math.sin(i) * 20, 0],
//               opacity: [0.2, 0.5, 0.2],
//             }}
//             transition={{
//               duration: 5 + i * 0.5,
//               repeat: Infinity,
//               delay: i * 0.2,
//             }}
//             className="absolute"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//           >
//             <Sparkles className="w-4 h-4 text-primary-400" />
//           </motion.div>
//         ))}

//         {/* Grid pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(56,142,60,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,142,60,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="max-w-6xl mx-auto">
//           {/* Main CTA Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             {/* Glow effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30 blur-3xl rounded-3xl" />

//             {/* Card principale */}
//             <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-16 shadow-2xl border border-gray-200/50 overflow-hidden">
//               {/* Decorative elements */}
//               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
//               <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

//               <div className="relative grid lg:grid-cols-2 gap-12 items-center">
//                 {/* Left side - Content */}
//                 <div>
//                   {/* Badge */}
//                   <motion.div
//                     animate={{ scale: [1, 1.05, 1] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="inline-flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-xl border border-primary-500/30 rounded-full mb-6 shadow-lg"
//                   >
//                     <Zap className="w-4 h-4 text-primary-600 animate-pulse" />
//                     <span className="text-sm font-bold text-primary-700 uppercase tracking-wider">
//                       Ne manquez rien !
//                     </span>
//                   </motion.div>

//                   {/* Titre */}
//                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
//                     <span className="block text-gray-900 mb-2">
//                       Prêt à participer ?
//                     </span>
//                     <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
//                       Rejoignez-nous !
//                     </span>
//                     {/* 🚀 */}
//                   </h2>

//                   {/* Description */}
//                   <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
//                     Inscrivez-vous à notre newsletter pour recevoir les
//                     notifications de nos prochains événements et ne manquer
//                     aucune opportunité !
//                   </p>

//                   {/* Newsletter Form */}
//                   {!isSubscribed ? (
//                     <motion.form
//                       onSubmit={handleSubscribe}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.3 }}
//                       className="mb-8"
//                     >
//                       <div className="flex flex-col sm:flex-row gap-3">
//                         <div className="relative flex-1">
//                           <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                           <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="Votre adresse email"
//                             required
//                             className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
//                           />
//                         </div>
//                         <motion.button
//                           type="submit"
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
//                         >
//                           S'abonner
//                           <ArrowRight className="w-5 h-5" />
//                         </motion.button>
//                       </div>
//                     </motion.form>
//                   ) : (
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-4"
//                     >
//                       <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
//                       <div>
//                         <h4 className="font-bold text-green-900 mb-1">
//                           Inscription réussie ! 🎉
//                         </h4>
//                         <p className="text-sm text-green-700">
//                           Vous recevrez nos prochaines notifications
//                           d'événements
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}

//                   {/* Contact rapide */}
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <motion.a
//                       href="tel:+221774952024"
//                       whileHover={{ scale: 1.05, y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-400 transition-all group"
//                     >
//                       <div className="p-2 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
//                         <Phone className="w-5 h-5 text-primary-600" />
//                       </div>
//                       <div className="text-left">
//                         <div className="text-xs text-gray-500">
//                           Appelez-nous
//                         </div>
//                         <div className="font-bold text-gray-900">
//                           +221 77 495 20 24
//                         </div>
//                       </div>
//                     </motion.a>

//                     <motion.a
//                       href="mailto:uaszclubinformatique@gmail.com"
//                       whileHover={{ scale: 1.05, y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-accent-400 transition-all group"
//                     >
//                       <div className="p-2 bg-accent-100 rounded-lg group-hover:bg-accent-200 transition-colors">
//                         <Mail className="w-5 h-5 text-accent-600" />
//                       </div>
//                       <div className="text-left">
//                         <div className="text-xs text-gray-500">
//                           Écrivez-nous
//                         </div>
//                         <div className="font-bold text-gray-900 text-sm lg:text-base">
//                           Email
//                         </div>
//                       </div>
//                     </motion.a>
//                   </div>
//                 </div>

//                 {/* Right side - Features */}
//                 <div className="grid grid-cols-2 gap-6">
//                   {features.map((feature, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
//                       whileHover={{ scale: 1.05, y: -5 }}
//                       className="relative group"
//                     >
//                       <div className="relative p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-center">
//                         {/* Gradient background */}
//                         <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                         {/* Icon */}
//                         <motion.div
//                           whileHover={{ rotate: 360 }}
//                           transition={{ duration: 0.6 }}
//                           className="relative inline-flex p-4 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 mb-4 shadow-lg"
//                         >
//                           <feature.icon className="w-6 h-6 text-white" />
//                         </motion.div>

//                         {/* Title */}
//                         <h4 className="relative font-black text-gray-900 mb-2">
//                           {feature.title}
//                         </h4>

//                         {/* Description */}
//                         <p className="relative text-sm text-gray-600 leading-tight">
//                           {feature.description}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Bottom Stats */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.8 }}
//                 className="relative mt-12 pt-8 border-t border-gray-200/50"
//               >
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//                   {[
//                     { icon: Calendar, value: "30+", label: "Événements/an" },
//                     { icon: Users, value: "200+", label: "Participants" },
//                     { icon: Award, value: "100%", label: "Gratuits" },
//                     { icon: TrendingUp, value: "98%", label: "Satisfaction" },
//                   ].map((stat, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.9 + index * 0.1 }}
//                       className="text-center"
//                     >
//                       <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 mb-2">
//                         <stat.icon className="w-5 h-5 text-primary-600" />
//                       </div>
//                       <div className="text-2xl font-black bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
//                         {stat.value}
//                       </div>
//                       <div className="text-xs font-semibold text-gray-600">
//                         {stat.label}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventsCTA;

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, Sparkles, Zap } from "lucide-react";

const EventsCTA: React.FC = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* La "Boîte" Magique */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden bg-dark-900 shadow-2xl shadow-primary-900/20"
        >
          {/* --- Background Dynamique --- */}
          <div className="absolute inset-0">
            {/* Gradient Mesh Animé */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-black" />

            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, 45, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[50%] -left-[20%] w-[100%] h-[200%] bg-gradient-to-r from-primary-600 to-emerald-400 blur-[150px] opacity-40 mix-blend-screen"
            />

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -45, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[50%] -right-[20%] w-[100%] h-[200%] bg-gradient-to-r from-accent-600 to-purple-600 blur-[150px] opacity-40 mix-blend-screen"
            />

            {/* Pattern Hexagonal */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          </div>

          {/* --- Contenu --- */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-10">
            {/* Colonne Texte */}
            <div className="md:w-3/5 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-6 shadow-glow"
              >
                <Lightbulb className="w-5 h-5 text-yellow-300" />
                <span className="text-white font-bold tracking-wide text-sm">
                  Innovons Ensemble
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Vous avez une idée <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-accent-400 animate-gradient-x">
                  d'événement génial ?
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                Le Club Informatique est votre plateforme. Hackathon, formation,
                ou simple débat tech... Si vous avez la vision, nous avons les
                ressources pour la réaliser.
              </p>
            </div>

            {/* Colonne Action */}
            <div className="md:w-2/5 flex flex-col items-center md:items-end justify-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative group"
              >
                {/* Glow behind button */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>

                {/* Main Button */}
                <button className="relative flex items-center gap-4 bg-white text-dark-900 px-8 py-6 rounded-2xl font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-2xl">
                  <div className="bg-dark-900 text-white p-2 rounded-lg">
                    <Zap className="w-6 h-6 fill-current" />
                  </div>
                  <span>Proposer un Talk</span>
                  <ArrowRight className="w-6 h-6 text-primary-600 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 flex items-center gap-2 text-gray-400 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 text-accent-400" />
                <span>Réponse garantie sous 48h</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsCTA;
