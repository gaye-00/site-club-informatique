import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Quote,
  Star,
  Sparkles,
  MessageCircle,
  Heart,
  Award,
  Code,
  Zap,
  Users,
} from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar: string;
  rating: number;
  achievement: string;
  gradient: string;
}

const TestimonialsCarousel: React.FC = () => {
  // Témoignages fictifs (à remplacer)
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Lamine Coly",
      role: "Étudiant Informatique",
      message:
        "Étudiant en informatique, ce club m'a aidé à acquérir des compétences techniques en informatique grâce à ces journées portes ouvertes mais aussi à ces formations. Ce club est une fierté pour nous.",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=123",
      rating: 5,
      achievement: "Tech Skills Certified",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Serigne Saliou",
      role: "Étudiant Informatique",
      message:
        "Étudiant en informatique, ce club m'a aidé à acquérir des compétences techniques en informatique grâce à ces journées portes ouvertes mais aussi à ces formations. Ce club est une fierté pour nous.",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=456",
      rating: 5,
      achievement: "Tech Skills Certified",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Coumbel",
      role: "Étudiante Informatique",
      message:
        "Le club nous a beaucoup aidé et donné plein d'espoir. Même s'il ne peut pas tout couvrir, le simple fait de savoir qu'il y a une structure dans votre domaine qui est là pour vous aider et qui cherche constamment des activités pour vous booster, c'est autant rassurant qu'enrichissant.",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=789",
      rating: 5,
      achievement: "Community Support",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      name: "Ndeye Lemou Ndao",
      role: "Étudiante Informatique",
      message:
        "Le club m'a permis de maîtriser l'installation et la configuration des systèmes d'exploitation. Grâce aux journées de tech solaire, j'ai pu participer à des ateliers pratiques qui m'ont beaucoup appris, notamment sur l'environnement Linux et les outils de déploiement.",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=123",
      rating: 5,
      achievement: "Linux Expert",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Ndeye Diouf",
      role: "Étudiante Informatique",
      message:
        "Le club informatique m'a permis de faire des installations sur Windows, sur Office, mais aussi de me former en maintenance informatique et en installation d'antivirus. Grâce aux activités du club, j'ai pu améliorer mes compétences pratiques et gagner en autonomie dans le domaine de l'informatique.",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=124",
      rating: 5,
      achievement: "IT Maintenance Pro",
      gradient: "from-primary-500 to-accent-500",
    },
    {
      id: 6,
      name: "Abdoulaye Niang",
      role: "Président Cellule Logistique",
      message:
        "Le club m'a permis, en tant que président de la cellule logistique, de développer mes compétences en organisation, en leadership et en travail d'équipe, tout en contribuant activement à la réussite des activités et événements du club informatique.",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=321",
      rating: 5,
      achievement: "Leadership Excellence",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: 7,
      name: "Aliou Diop",
      role: "Responsable des Projets",
      message:
        "En tant que responsable des projets du club informatique, je participe à l'organisation d'activités et d'ateliers qui permettent aux étudiants de découvrir et de renforcer leurs compétences en informatique. Ce club est un espace de partage, d'apprentissage et d'échange pour tous les passionnés de technologies.",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=51",
      rating: 5,
      achievement: "Project Leader",
      gradient: "from-red-600 to-pink-600",
    },
    {
      id: 8,
      name: "Gaelle Chadia Bakylang",
      role: "Etudiante Informatique",
      message:
        "Grâce au club informatique, j'ai rencontré des personnes qui partageaient ma passion pour l'informatique, et j'ai pu développer des compétences en développement web, mais aussi un esprit d'entraide et de partage.",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=99",
      rating: 5,
      achievement: "Product Leader",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  // Dupliquer pour défilement infini
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Effects Ultra Premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -100, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent-300 rounded-full blur-3xl"
        />

        {/* Floating Sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
          >
            <Sparkles className="w-4 h-4 text-primary-300" />
          </motion.div>
        ))}

        {/* Grid pattern subtle */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
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
          {/* Badge Élégant */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="inline-flex items-center gap-3 px-8 py-3 bg-white/80 backdrop-blur-xl rounded-full border-2 border-primary-200/50 mb-8 shadow-2xl"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <MessageCircle className="w-5 h-5 text-primary-600" />
            </motion.div>
            <span className="text-sm font-black text-gray-700 uppercase tracking-widest">
              Témoignages
            </span>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-red-500" />
            </motion.div>
          </motion.div>

          {/* Titre avec Effet Sublime */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              style={{ backgroundSize: "200% auto" }}
              className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent"
            >
              Ils ont vécu
            </motion.span>
            <br />
            <span className="text-gray-900">l'expérience</span>
          </motion.h2>

          {/* Sous-titre poétique */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium italic"
          >
            Des histoires inspirantes de membres qui ont transformé leur passion
            en une pratique solide.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"
          />
        </motion.div>

        {/* Testimonials Marquee - Row 1 (Slow Left to Right) */}
        <div className="relative mb-8">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-4">
            <motion.div
              className="flex gap-6 lg:gap-8"
              animate={{
                x: [0, -4800], // Ajusté pour la largeur
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 100, // Très lent pour lisibilité
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonials Marquee - Row 2 (Reverse - Right to Left) */}
        <div className="relative">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-4">
            <motion.div
              className="flex gap-6 lg:gap-8"
              animate={{
                x: [-4800, 0], // Direction inverse
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 95,
                  ease: "linear",
                },
              }}
            >
              {[...duplicatedTestimonials]
                .reverse()
                .map((testimonial, index) => (
                  <TestimonialCard
                    key={`row2-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                  />
                ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Bar Ultra Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 relative"
        >
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-3xl p-8 lg:p-12 border-2 border-gray-200/50 shadow-2xl overflow-hidden">
            {/* Animated Background */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(56, 142, 60, 0.1) 50%, transparent 70%)`,
                backgroundSize: "200% 200%",
              }}
            />

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  value: "200+",
                  label: "Membres Actifs",
                  color: "text-blue-600",
                },
                {
                  icon: Award,
                  value: "98%",
                  label: "Satisfaction",
                  color: "text-green-600",
                },
                {
                  icon: Code,
                  // value: "❤️‍🔥❤️+",
                  value: "💻+",
                  label: "Projets Réalisés",
                  color: "text-purple-600",
                },
                {
                  icon: Zap,
                  value: "10+",
                  label: "Événements/An",
                  color: "text-orange-600",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block mb-4"
                  >
                    <stat.icon
                      className={`w-8 h-8 lg:w-10 lg:h-10 ${stat.color} group-hover:scale-110 transition-transform`}
                    />
                  </motion.div>
                  <div
                    className={`text-3xl lg:text-4xl font-black mb-2 ${stat.color}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonial Card Component - ULTRA PREMIUM
interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02, y: -8 }}
      className="flex-shrink-0 w-[380px] lg:w-[420px] h-[280px] group cursor-pointer"
    >
      <div className="relative h-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border-2 border-gray-100 hover:border-transparent">
        {/* Gradient Border Animé */}
        <motion.div
          className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${testimonial.gradient} blur-xl`}
          style={{ zIndex: -1 }}
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Gradient Background subtil */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        {/* Content */}
        <div
          className="relative h-full p-8 flex flex-col justify-between"
          style={{ transform: "translateZ(50px)" }}
        >
          {/* Header avec Avatar */}
          <div className="flex items-start gap-4 mb-4">
            {/* Avatar Premium */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative flex-shrink-0"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} blur-md opacity-50 group-hover:opacity-100 transition-opacity`}
              />
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="relative w-16 h-16 lg:w-18 lg:h-18 rounded-2xl object-cover border-3 border-white shadow-lg"
              />
              {/* Badge vérifié */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg"
              >
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-black text-gray-900 mb-1 truncate group-hover:text-primary-600 transition-colors">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 font-semibold truncate mb-2">
                {testimonial.role}
              </p>

              {/* Stars Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote Icon */}
            <motion.div
              animate={{
                rotate: isHovered ? [0, 10, -10, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <Quote
                className={`w-8 h-8 text-gray-300 group-hover:text-primary-400 transition-colors`}
              />
            </motion.div>
          </div>

          {/* Message */}
          <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4 line-clamp-4 group-hover:text-gray-900 transition-colors">
            "{testimonial.message}"
          </p>

          {/* Achievement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${testimonial.gradient} rounded-full self-start`}
          >
            <Award className="w-4 h-4 text-white" />
            <span className="text-xs font-bold text-white">
              {testimonial.achievement}
            </span>
          </motion.div>
        </div>

        {/* Shine Effect Diagonal */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent pointer-events-none"
          initial={{ x: "-100%", y: "-100%" }}
          animate={{
            x: isHovered ? "100%" : "-100%",
            y: isHovered ? "100%" : "-100%",
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Corner Accent */}
        <div
          className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 rounded-bl-3xl transition-opacity duration-700`}
        />
      </div>
    </motion.div>
  );
};

export default TestimonialsCarousel;
