import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import {
  Menu,
  X,
  Calendar,
  ImageIcon,
  Info,
  Home,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Accueil", icon: Home, href: "/" },
    { name: "Evenements", icon: Calendar, href: "/evenement" },
    { name: "Souvenir", icon: ImageIcon, href: "/souvenir" },
    { name: "A Propos", icon: Info, href: "/apropos" },
  ];

  // Détection automatique de la page active basée sur l'URL
  const getActiveLinkName = () => {
    const currentPath = location.pathname;
    const activeLink = navLinks.find((link) => link.href === currentPath);
    return activeLink ? activeLink.name : "Accueil";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isContactModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen, isContactModalOpen]);

  const activeLink = getActiveLinkName();

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo avec Image */}
            <Link to="/">
              <motion.div
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <img
                    src="/src/assets/logo_club_info_250x250.png"
                    alt="Club Info UASZ"
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-primary-400 opacity-0 group-hover:opacity-20"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Club Info
                  </div>
                  <div className="text-xs text-text-tertiary -mt-1">UASZ</div>
                </div>
              </motion.div>
            </Link>

            {/* Navigation Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = activeLink === link.name;
                return (
                  <Link key={link.name} to={link.href}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                        isActive
                          ? "text-primary-600"
                          : "text-text-secondary hover:text-primary-600"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4" />
                        <span className="font-medium">{link.name}</span>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="activeLink"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                      <motion.div
                        className="absolute inset-0 bg-primary-50 rounded-lg -z-10 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button Desktop */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsContactModalOpen(true)}
              className="hidden lg:block relative px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-lg overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Rejoindre</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-dark-900/50 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-50 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Header du menu mobile */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                      <img
                        src="/src/assets/logo_club_info_250x250.png"
                        alt="Club Info UASZ"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-dark-700">Club Info</div>
                      <div className="text-xs text-text-tertiary">UASZ</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    <X className="w-6 h-6 text-text-secondary" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2 mb-8">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isActive = activeLink === link.name;
                    return (
                      <Link key={link.name} to={link.href}>
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                            isActive
                              ? "bg-primary-50 text-primary-600"
                              : "text-text-secondary hover:bg-neutral-50"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{link.name}</span>
                          {isActive && (
                            <motion.div
                              layoutId="activeMobileLink"
                              className="ml-auto w-2 h-2 bg-primary-500 rounded-full"
                            />
                          )}
                        </motion.div>
                      </Link>
                    );
                  })}
                </nav>

                {/* CTA Button Mobile */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Rejoindre le Club
                </motion.button>

                {/* Decorative Elements */}
                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <p className="text-sm text-text-tertiary text-center">
                    Université Assane Seck de Ziguinchor
                  </p>
                </div>
              </div>

              {/* Decorative Background */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100/50 to-accent-100/50 rounded-tl-full blur-3xl -z-10" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modal de Contact */}
      <AnimatePresence>
        {isContactModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-dark-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsContactModalOpen(false)}
            >
              {/* Modal Card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Header avec gradient */}
                <div className="relative p-8 bg-gradient-to-br from-primary-500 to-accent-500 text-white overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                  {/* Close button */}
                  <button
                    onClick={() => setIsContactModalOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Content */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black mb-2">
                      Rejoignez-nous ! 🚀
                    </h3>
                    <p className="text-white/90 text-sm">
                      Contactez-nous pour devenir membre du Club Informatique
                      UASZ
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 space-y-6">
                  {/* Contact Items */}
                  <a
                    href="mailto:uaszclubinformatique@gmail.com"
                    className="group flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg group-hover:shadow-xl transition-shadow">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Email
                      </div>
                      <div className="font-bold text-gray-900 break-all">
                        uaszclubinformatique@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+221774952024"
                    className="group flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-all duration-300 hover:scale-[1.02]"
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

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Adresse
                      </div>
                      <div className="font-bold text-gray-900">
                        Université Assane Seck
                      </div>
                      <div className="text-sm text-gray-600">
                        Ziguinchor, Sénégal
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-600 mb-4">
                      Adhésion gratuite pour tous les étudiants de l'UASZ
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsContactModalOpen(false)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Fermer
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
