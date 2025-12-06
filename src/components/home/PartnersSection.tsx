import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, Handshake, Building2 } from "lucide-react";

interface Partner {
  id: number;
  name: string;
  logo: string; // URL ou emoji
  type: "Université" | "Entreprise" | "Organisation" | "Institution";
  color: string;
}

const PartnersSection: React.FC = () => {
  // Partenaires fictifs (à remplacer)
  const partners: Partner[] = [
    {
      id: 1,
      name: "Université Assane Seck Ziguinchor",
      logo: "🎓",
      type: "Université",
      color: "#1E40AF",
    },
    {
      id: 2,
      name: "Orange Digital Center",
      logo: "🟠",
      type: "Entreprise",
      color: "#FF6B00",
    },
    {
      id: 3,
      name: "Diao Services",
      logo: "💻📱",
      type: "Entreprise",
      color: "#0066CC",
    },
    {
      id: 4,
      name: "Les professeurs de l'université",
      logo: "👩‍🏫",
      type: "Université",
      color: "#4285F4",
    },
    {
      id: 5,
      name: "Labo li3 UASZ",
      logo: "💻",
      type: "Université",
      color: "#00A4EF",
    },
    {
      id: 6,
      name: "AOF Ziguinchor",
      logo: "🌍",
      type: "Institution",
      color: "#003B71",
    },
    {
      id: 7,
      name: "Alpha Stands 78 323 29 60",
      logo: "🏢",
      type: "Entreprise",
      color: "#E74C3C",
    },
    {
      id: 8,
      name: "Chez Korka 78 832 05 14",
      logo: "🍲",
      type: "Université",
      color: "#2ECC71",
    },
    {
      id: 9,
      name: "UFR ST UASZ",
      logo: "🇸🇳",
      type: "Université",
      color: "#27AE60",
    },
  ];

  // Dupliquer pour défilement infini
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background subtil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbes très subtiles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.04, 0.07, 0.04],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Badge Minimaliste */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-primary-200/50 mb-4 shadow-md"
          >
            <Handshake className="w-4 h-4 text-primary-600" />
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              Nos Partenaires
            </span>
            <Sparkles className="w-4 h-4 text-accent-500" />
          </motion.div>

          {/* Titre Fin */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2"
          >
            Ils nous soutiennent{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              dans notre mission
            </span>
          </motion.h2>

          {/* Sous-titre court */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-gray-500 font-medium"
          >
            Collaboration avec les acteurs majeurs de l'éducation et de la tech
          </motion.p>
        </motion.div>

        {/* Partners Marquee - Ultra Fine */}
        <div className="relative">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-white via-white/95 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-white via-white/95 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-6">
            <motion.div
              className="flex gap-6 lg:gap-8"
              animate={{
                x: [0, -2400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60, // Très lent
                  ease: "linear",
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <PartnerCard key={`${partner.id}-${index}`} partner={partner} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Bar Mini */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:gap-12"
        >
          {[
            { icon: Building2, value: "💻+", label: "Partenaires" },
            { icon: Handshake, value: "💻+", label: "Collaborations" },
            { icon: Award, value: "100%", label: "Engagement" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, type: "spring" }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-md">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl font-black bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-gray-500 italic">
            Vous souhaitez devenir partenaire ?{" "}
            <a
              href="mailto:uaszclubinformatique@gmail.com"
              className="text-primary-600 hover:text-primary-700 font-semibold underline decoration-primary-400/30 hover:decoration-primary-600 transition-colors"
            >
              Contactez-nous
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Partner Card Component - Ultra Minimaliste
interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex-shrink-0 w-44 h-28 lg:w-48 lg:h-32 group cursor-pointer"
    >
      <div className="relative w-full h-full bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200/50 hover:border-primary-300/50">
        {/* Gradient background subtil */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${partner.color}08, transparent)`,
          }}
        />

        {/* Glow border animé */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            boxShadow: [
              `0 0 0px ${partner.color}00`,
              `0 0 20px ${partner.color}40`,
              `0 0 0px ${partner.color}00`,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
          {/* Logo/Emoji */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl mb-2"
          >
            {partner.logo}
          </motion.div>

          {/* Nom */}
          <div className="text-xs font-bold text-gray-800 group-hover:text-gray-900 transition-colors leading-tight line-clamp-2 mb-1">
            {partner.name}
          </div>

          {/* Type Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="px-2 py-0.5 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0"
          >
            <span className="text-[9px] font-bold text-primary-700 uppercase tracking-wide">
              {partner.type}
            </span>
          </motion.div>
        </div>

        {/* Shine effect diagonal */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent pointer-events-none"
          initial={{ x: "-100%", y: "-100%" }}
          whileHover={{
            x: "100%",
            y: "100%",
            transition: { duration: 0.6 },
          }}
        />

        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl"
          style={{
            background: `linear-gradient(225deg, ${partner.color}15, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default PartnersSection;
