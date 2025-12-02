import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  Code,
  Calendar,
  Users,
  Award,
  BookOpen,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  icon: React.ElementType;
  category: string;
}

const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "Comment puis-je rejoindre le Club Informatique UASZ ?",
      answer:
        "Pour rejoindre le club, il suffit d'être étudiant à l'UASZ et de contacter notre équipe via email (uaszclubinformatique@gmail.com) ou téléphone (+221 77 495 20 24). L'adhésion est gratuite et ouverte à tous les niveaux, du débutant à l'expert !",
      icon: Users,
      category: "Adhésion",
    },
    {
      id: 2,
      question: "Quels types d'événements organisez-vous ?",
      answer:
        "Nous organisons des hackathons, workshops techniques, conférences avec des professionnels, code challenges, projets collaboratifs, et des sessions de mentorat. En moyenne, nous avons 30+ événements par an couvrant divers domaines tech : développement web/mobile, IA, cybersécurité, DevOps, etc.",
      icon: Calendar,
      category: "Événements",
    },
    {
      id: 3,
      question:
        "Dois-je avoir des compétences en programmation pour rejoindre ?",
      answer:
        "Absolument pas ! Le club accueille tous les niveaux, du débutant complet au développeur expérimenté. Nous proposons des formations gratuites pour débutants et un système de mentorat où les membres expérimentés aident les nouveaux. Votre motivation est plus importante que vos compétences actuelles !",
      icon: Code,
      category: "Compétences",
    },
    {
      id: 4,
      question: "Quels sont les avantages de rejoindre le club ?",
      answer:
        "Les avantages incluent : formations gratuites sur les technologies modernes, accès aux événements exclusifs, mentorat par des professionnels, opportunités de stage et d'emploi, projets réels pour votre portfolio, réseau de passionnés tech, et certificats de participation. C'est une véritable rampe de lancement pour votre carrière !",
      icon: Award,
      category: "Avantages",
    },
    {
      id: 5,
      question: "Comment fonctionne le système de mentorat ?",
      answer:
        "Chaque nouveau membre peut demander un mentor selon son domaine d'intérêt (web, mobile, IA, etc.). Les mentors sont des membres expérimentés ou des professionnels qui vous guident dans votre apprentissage, répondent à vos questions, et vous aident sur vos projets. C'est un accompagnement personnalisé et totalement gratuit.",
      icon: Target,
      category: "Mentorat",
    },
    {
      id: 6,
      question: "Puis-je participer aux projets du club ?",
      answer:
        "Bien sûr ! Nous avons toujours des projets en cours et nous encourageons tous les membres à participer. C'est l'occasion parfaite d'apprendre en pratiquant, de collaborer en équipe, et de créer un portfolio impressionnant. Les projets vont du site web simple aux applications mobiles complexes.",
      icon: Zap,
      category: "Projets",
    },
    {
      id: 7,
      question: "Proposez-vous des formations certifiantes ?",
      answer:
        "Oui ! Nous organisons régulièrement des formations complètes avec certificats de participation reconnus. Ces formations couvrent diverses technologies : React, Python, Node.js, Docker, etc. Les certificats peuvent enrichir votre CV et LinkedIn. De plus, nous préparons les membres aux certifications professionnelles.",
      icon: BookOpen,
      category: "Formations",
    },
    {
      id: 8,
      question: "Y a-t-il des frais d'adhésion ou de participation ?",
      answer:
        "L'adhésion au club est 100% gratuite pour tous les étudiants de l'UASZ. Tous nos événements, formations, et ressources sont également gratuits. Notre mission est de rendre la technologie accessible à tous, sans barrière financière. Certains événements spéciaux peuvent nécessiter une inscription limitée.",
      icon: Sparkles,
      category: "Frais",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative min-h-screen py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-dark-900 overflow-hidden">
      {/* Background Effects - Transition vers dark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbes animés qui s'assombrissent vers le bas */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-300 rounded-full blur-3xl"
        />

        {/* Orbe dark en bas pour transition */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-dark-900 via-dark-800/50 to-transparent" />
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
          {/* Badge */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-primary-200/50 mb-6 shadow-lg"
          >
            <HelpCircle className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Questions Fréquentes
            </span>
            <Sparkles className="w-5 h-5 text-accent-500 animate-pulse" />
          </motion.div>

          {/* Titre */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Des questions ?{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              On a les réponses !
            </span>
          </motion.h2>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Tout ce que vous devez savoir sur le Club Informatique UASZ
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-white/90 via-gray-50/90 to-white/90 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-2xl">
            <h3 className="text-2xl font-black text-gray-900 mb-3">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Notre équipe est là pour vous aider ! N'hésitez pas à nous
              contacter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:uaszclubinformatique@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Nous contacter</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
              <motion.a
                href="tel:+221774952024"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-primary-200 text-gray-900 font-bold rounded-xl hover:border-primary-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                📞 Appeler maintenant
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative line vers le footer */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"
      />
    </section>
  );
};

// FAQ Item Component
interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => {
  const Icon = faq.icon;

  return (
    <motion.div
      className="group relative"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className={`relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
          isOpen
            ? "border-primary-400 shadow-primary-200"
            : "border-gray-200/50 hover:border-primary-200"
        }`}
      >
        {/* Gradient background animé */}
        <motion.div
          animate={{
            opacity: isOpen ? 0.05 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500"
        />

        {/* Question Button */}
        <button
          onClick={onToggle}
          className="relative w-full px-6 py-5 flex items-start gap-4 text-left"
        >
          {/* Icon */}
          <motion.div
            animate={{
              rotate: isOpen ? 360 : 0,
              scale: isOpen ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
              isOpen
                ? "bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-200"
                : "bg-gray-100 group-hover:bg-primary-50"
            } transition-all duration-300`}
          >
            <Icon
              className={`w-6 h-6 ${
                isOpen ? "text-white" : "text-primary-600"
              } transition-colors duration-300`}
            />
          </motion.div>

          {/* Question Text */}
          <div className="flex-1 min-w-0 pt-1">
            <h3
              className={`text-base lg:text-lg font-bold ${
                isOpen ? "text-primary-700" : "text-gray-900"
              } transition-colors duration-300 leading-tight`}
            >
              {faq.question}
            </h3>
            {/* Category Badge */}
            <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full">
              {faq.category}
            </span>
          </div>

          {/* Toggle Icon */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
              isOpen
                ? "bg-primary-100"
                : "bg-gray-100 group-hover:bg-primary-50"
            } transition-colors duration-300`}
          >
            {isOpen ? (
              <Minus className="w-5 h-5 text-primary-600" />
            ) : (
              <Plus className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
            )}
          </motion.div>
        </button>

        {/* Answer - Animated */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pl-[88px]">
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="relative"
                >
                  {/* Decorative line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full" />

                  {/* Answer text */}
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

export default FAQAccordion;
