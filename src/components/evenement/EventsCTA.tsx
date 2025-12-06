import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  ArrowRight,
  Sparkles,
  Zap,
  X,
  Mail,
  Phone,
  User,
  Send,
} from "lucide-react";

const EventsCTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative flex items-center gap-4 bg-white text-dark-900 px-8 py-6 rounded-2xl font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-2xl"
                >
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

      {/* Modal de Contact */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header avec gradient */}
              <div className="relative p-8 bg-gradient-to-br from-primary-500 to-accent-500 text-white overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-2">
                    Proposer un Talk 🎤
                  </h3>
                  <p className="text-white/90 text-sm">
                    Contactez-nous pour partager votre idée d'événement !
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6">
                {/* Contact avec Président */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border-2 border-primary-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900">
                        Président du Club
                      </h4>
                      <p className="text-xs text-gray-600">Abdoulaye Gaye •</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    Contactez directement le président pour discuter de votre
                    projet d'événement ou de conférence.
                  </p>

                  {/* Email */}
                  <a
                    href="mailto:uaszclubinformatique@gmail.com"
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] mb-3"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg group-hover:shadow-xl transition-shadow">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Email
                      </div>
                      <div className="font-bold text-gray-900 break-all text-sm">
                        uaszclubinformatique@gmail.com
                      </div>
                    </div>
                  </a>

                  {/* Téléphone */}
                  <a
                    href="tel:+221774952024"
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg group-hover:shadow-xl transition-shadow">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Téléphone
                      </div>
                      <div className="font-bold text-gray-900">
                        +221 77 495 20 24
                      </div>
                    </div>
                  </a>
                </div>

                {/* Info supplémentaire */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1 text-sm">
                        Ce qu'il faut préparer
                      </h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Titre et description de votre talk</li>
                        <li>• Date et durée souhaitées</li>
                        <li>• Public cible et prérequis</li>
                        <li>• Matériel technique nécessaire</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bouton Fermer */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(false)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Compris, merci !
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsCTA;
