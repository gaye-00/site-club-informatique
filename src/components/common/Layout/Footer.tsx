import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Code2,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    { icon: Github, href: "#", label: "Github", color: "hover:text-dark-600" },
  ];

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "Événements", href: "/evenement" },
    { name: "Souvenir", href: "/souvenir" },
    { name: "À Propos", href: "/apropos" },
  ];

  const resources = [
    {
      name: "Tutoriels",
      href: "https://www.youtube.com/@ClubinformatiqueUASZ",
    },
    { name: "Documentation", href: "#" },
    { name: "Blog", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 text-dark-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Club Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Code2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                </motion.div>
                <div>
                  <div className="text-xl font-bold text-white">Club Info</div>
                  <div className="text-sm text-dark-200">UASZ</div>
                </div>
              </div>
              <p className="text-dark-200 text-sm leading-relaxed">
                Le club informatique de l'Université Assane Seck de Ziguinchor.
                Innovation, apprentissage et passion pour la technologie.
              </p>
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-dark-300 transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mr-3" />
                Liens Rapides
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center text-dark-200 hover:text-primary-400 transition-all duration-300"
                    >
                      <motion.span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300 rounded-full" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mr-3" />
                Ressources
              </h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <motion.li
                    key={resource.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={resource.href}
                      className="group flex items-center text-dark-200 hover:text-primary-400 transition-all duration-300"
                    >
                      <motion.span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300 rounded-full" />
                      {resource.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mr-3" />
                Contact
              </h3>
              <ul className="space-y-4">
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-dark-200"
                >
                  <div className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xs text-dark-300 mb-1">Email</div>
                    <a
                      href="mailto:uaszclubinformatique@gmail.com"
                      className="hover:text-primary-400 transition-colors break-all"
                    >
                      uaszclubinformatique@gmail.com
                    </a>
                  </div>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-dark-200"
                >
                  <div className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <div className="text-xs text-dark-300 mb-1">Téléphone</div>
                    <a
                      href="tel:+221774952024"
                      className="hover:text-accent-400 transition-colors"
                    >
                      +221 77 495 20 24
                    </a>
                  </div>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-dark-200"
                >
                  <div className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xs text-dark-300 mb-1">Adresse</div>
                    <p className="text-sm">
                      Université Assane Seck
                      <br />
                      Ziguinchor, Sénégal
                    </p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-dark-700"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-dark-300 text-sm text-center md:text-left">
                © {currentYear} Club Informatique UASZ. Tous droits réservés.
              </p>
              <motion.div
                className="flex items-center space-x-1 text-dark-300 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <span>Fait avec</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                </motion.div>
                <span>par le Club Info UASZ</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
