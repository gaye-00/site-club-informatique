import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Babacar Ndao",
    role: "Etudiant Master GL, membre actif",
    content:
      "Ce qui me marque le plus, ce sont les Journées Tech Solidaires, où j'ai vu des jeunes passionnés, sous l'ombre des arbres, démystifier le mythe du club informatique au service de l'action sociale. C'est une véritable valeur ajoutée depuis sa création.",
    gradient: "from-pink-500 to-rose-500",
    delay: 0,
  },
  {
    id: 2,
    name: "Adama Diouf",
    role: "Etudiant Master GL, membre actif",
    content:
      "Ce qui m'a le plus marqué au sein du club informatique, c'est son renouveau, notamment à travers les nouvelles activités et les changements apportés à son fonctionnement.",
    gradient: "from-cyan-500 to-blue-500",
    delay: 0.2,
  },
  {
    id: 3,
    name: "Mr. Malack",
    role: "Doctorant en Informatique",
    content:
      "En tant qu'ancien ayant vu passer plusieurs bureaux du club informatique, je peux affirmer que celui-ci a accompli un travail remarquable, voire unique. J'espère que le prochain bureau fera encore davantage afin d'assurer une bonne continuité.",
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
