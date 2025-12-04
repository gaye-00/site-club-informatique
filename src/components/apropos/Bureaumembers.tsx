import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Crown,
  Mail,
  Phone,
  Linkedin,
  Github,
  Sparkles,
  Code,
  Palette,
  Megaphone,
  DollarSign,
  Shield,
  BookOpen,
} from "lucide-react";

interface Member {
  id: number;
  name: string;
  role: string;
  department: string;
  photo: string;
  bio: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  color: string;
  icon: React.ElementType;
}

const BureauMembers: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const members: Member[] = [
    {
      id: 1,
      name: "Abdoulaye Gaye",
      role: "Président",
      department: "Direction Générale",
      photo: "/src/assets/presidents/Abdoulaye-Gaye.jpg",
      bio: "Président du Club Informatique, étudiant en M1 Génie Logiciel. Passionné par l'innovation et l'excellence.",
      email: "president@clubinfo.uasz.sn",
      phone: "+221 77 495 20 24",
      linkedin: "abdoulaye-gaye",
      github: "abdoulaye-gaye",
      color: "from-primary-500 to-accent-500",
      icon: Crown,
    },
    {
      id: 2,
      name: "Magatte Hané",
      role: "Vice-Président",
      department: "Administration",
      photo: "/src/assets/presidents/pasDePhoto.jpg",
      bio: "Vice-président du club, étudiant en L3 Informatique. Coordonne les activités et assure la continuité des opérations.",
      email: "vp@clubinfo.uasz.sn",
      color: "from-blue-500 to-cyan-500",
      icon: Shield,
    },
    {
      id: 3,
      name: "Ibrahima Gueye",
      role: "Secrétaire Général",
      department: "Secrétariat",
      photo: "/src/assets/presidents/pasDePhoto.jpg",
      bio: "Secrétaire Général, étudiant en L2 2I. Gère les archives du club et toute la documentation officielle.",
      email: "secretaire@clubinfo.uasz.sn",
      color: "from-purple-500 to-pink-500",
      icon: BookOpen,
    },
    {
      id: 4,
      name: "Ibrahima Diallo",
      role: "Trésorier",
      department: "Finances",
      photo: "/src/assets/presidents/pasDePhoto.jpg",
      bio: "Trésorier du club, étudiant en L2 2I. Gère les finances avec rigueur et transparence.",
      email: "tresorier@clubinfo.uasz.sn",
      color: "from-green-500 to-emerald-500",
      icon: DollarSign,
    },
    {
      id: 5,
      name: "Mouminatou Khadijah Ba",
      role: "Responsable Technique",
      department: "Technique & Projets",
      photo: "/src/assets/presidents/pasDePhoto.jpg",
      bio: "Responsable Technique et Projets, étudiante en L3 2I. Supervise les projets techniques du club.",
      email: "tech@clubinfo.uasz.sn",
      github: "mouminatou-ba",
      color: "from-orange-500 to-red-500",
      icon: Code,
    },
    {
      id: 6,
      name: "Baye Laye Ndiaye",
      role: "Responsable Communication",
      department: "Communication",
      photo: "/src/assets/presidents/pasDePhoto.jpg",
      bio: "Responsable Communication, étudiant en L3 2I. Gère l'image du club et toute la communication externe.",
      email: "com@clubinfo.uasz.sn",
      linkedin: "club-info-uasz",
      color: "from-yellow-500 to-orange-500",
      icon: Megaphone,
    },
    {
      id: 7,
      name: "Lamine Fall",
      role: "Responsable Design",
      department: "Graphisme & Design",
      photo: "/src/assets/presidents/pasDePhoto.jpg",
      bio: "Responsable Graphisme et Design Visuel, étudiant en L3 2I. Crée tous les visuels et supports graphiques du club.",
      email: "design@clubinfo.uasz.sn",
      color: "from-pink-500 to-rose-500",
      icon: Palette,
    },
    {
      id: 8,
      name: "Papa Bothie Diop",
      role: "Responsable Événements",
      department: "Commission Événementielle",
      photo: "/src/assets/presidents/pasDePhoto.jpg",
      bio: "Commission Événementielle, étudiant en L3 2I. Coordonne tous les événements et assure leur succès.",
      email: "events@clubinfo.uasz.sn",
      color: "from-indigo-500 to-purple-500",
      icon: Sparkles,
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-accent-50 via-white to-gray-50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
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
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-xl rounded-full border border-primary-200/50 mb-6 shadow-lg"
          >
            <Users className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Notre Bureau
            </span>
            <Sparkles className="w-5 h-5 text-accent-500 animate-pulse" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            L'équipe qui fait{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              vibrer le club
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Des passionnés dévoués qui travaillent chaque jour pour faire
            grandir notre communauté
          </p>
        </motion.div>

        {/* Members Grid avec Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="group"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative h-[450px] cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                onClick={() =>
                  setFlippedCard(flippedCard === member.id ? null : member.id)
                }
                animate={{
                  rotateY: flippedCard === member.id ? 180 : 0,
                }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 overflow-hidden">
                    {/* Photo */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                      />

                      {/* Role badge */}
                      <div className="absolute top-4 left-4">
                        <div
                          className={`px-4 py-2 rounded-full bg-gradient-to-r ${member.color} text-white text-xs font-bold shadow-lg flex items-center gap-2`}
                        >
                          <member.icon className="w-4 h-4" />
                          {member.department}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-black text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p
                        className={`text-sm font-bold mb-4 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}
                      >
                        {member.role}
                      </p>

                      <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                        {member.bio}
                      </p>

                      {/* Click hint */}
                      <div className="text-center">
                        <span className="text-xs text-gray-400 font-medium">
                          Cliquez pour voir les contacts →
                        </span>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div
                      className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${member.color} opacity-0 group-hover:opacity-10 rounded-tl-3xl transition-opacity duration-500`}
                    />
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div
                    className={`h-full bg-gradient-to-br ${member.color} rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center text-white`}
                  >
                    {/* Icon */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-xl"
                    >
                      <member.icon className="w-10 h-10" />
                    </motion.div>

                    <h3 className="text-2xl font-black mb-2 text-center">
                      {member.name}
                    </h3>
                    <p className="text-sm font-bold mb-8 opacity-90">
                      {member.role}
                    </p>

                    {/* Contact info */}
                    <div className="space-y-3 w-full">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-5 h-5" />
                        <span className="text-sm font-medium truncate">
                          {member.email}
                        </span>
                      </a>

                      {member.phone && (
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone className="w-5 h-5" />
                          <span className="text-sm font-medium">
                            {member.phone}
                          </span>
                        </a>
                      )}

                      {member.linkedin && (
                        <a
                          href={`https://linkedin.com/in/${member.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="w-5 h-5" />
                          <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                      )}

                      {member.github && (
                        <a
                          href={`https://github.com/${member.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5" />
                          <span className="text-sm font-medium">GitHub</span>
                        </a>
                      )}
                    </div>

                    {/* Click hint */}
                    <div className="mt-6 text-center">
                      <span className="text-xs opacity-70">
                        Cliquez pour revenir
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-xl font-bold text-gray-900 mb-4">
            Vous voulez{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              rejoindre l'équipe ?
            </span>
          </p>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Les postes au bureau sont ouverts chaque année. Impliquez-vous dans
            le club et saisissez votre chance !
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BureauMembers;
