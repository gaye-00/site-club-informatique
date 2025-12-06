import React from "react";
import {
  ArrowRight,
  Sparkles,
  Check,
  Users,
  Zap,
  Calendar,
  Code,
  Phone,
  MapPin,
  Mail,
  Award,
  Rocket,
  Trophy,
  Lightbulb,
  Target,
} from "lucide-react";

const CallToActionSection: React.FC = () => {
  const benefits = [
    "Formations gratuites sur les technologies modernes",
    "Accès aux événements et hackathons",
    "Mentorat par des professionnels",
    "Réseau de passionnés et d'experts",
    "Projets réels et portfolio",
    "Opportunités de stage et d'emploi",
  ];

  const stats = [
    {
      icon: Users,
      value: "200+",
      label: "Membres actifs",
      gradient: "from-primary-500 to-accent-500",
    },
    {
      icon: Trophy,
      value: "💻+",
      label: "Projets réalisés",
      gradient: "from-accent-600 to-primary-600",
    },
    {
      icon: Calendar,
      value: "10+",
      label: "Événements/an",
      gradient: "from-primary-600 to-accent-500",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-100 to-dark-950">
      {/* Top gradient blend - Transition fluide */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-gray-100 to-transparent z-0"></div>

      {/* Animated background - Couleurs UASZ */}
      <div className="absolute inset-0">
        {/* Primary glow - vert UASZ */}
        <div
          className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 
                        bg-primary-500/20 rounded-full blur-3xl animate-float"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 
                     bg-accent-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 
                     bg-primary-600/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,142,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,142,60,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative">
            {/* Glow effect vert */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30 blur-3xl rounded-2xl sm:rounded-3xl"></div>

            {/* Card */}
            <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-dark-900/95 to-dark-950/95 backdrop-blur-xl border border-dark-700/50 overflow-hidden shadow-2xl">
              {/* Decorative elements vert/émeraude */}
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                {/* Left side - Content */}
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 mb-4 sm:mb-6 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-xl border border-primary-500/30 rounded-full shadow-lg shadow-primary-500/30">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium text-primary-300 uppercase tracking-wider">
                      Rejoignez-nous
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
                    <span className="block mb-2 text-white">
                      Prêt à transformer
                    </span>
                    <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                      votre passion en carrière ?
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                    Rejoignez le Club Informatique de l'UASZ et développez vos
                    compétences tech avec des experts, des projets réels et une
                    communauté passionnée.
                  </p>

                  {/* Benefits list */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-2 sm:space-x-3 animate-fadeIn"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/50 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />
                        </div>
                        <span className="text-gray-300 text-xs sm:text-sm leading-tight">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <button className="group w-full sm:w-auto flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold rounded-lg sm:rounded-xl text-sm sm:text-base transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-2xl shadow-primary-500/50 hover:shadow-primary-500/70 flex items-center justify-center space-x-2">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Devenir membre</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-primary-500/50 text-white font-bold rounded-lg sm:rounded-xl text-sm sm:text-base transform hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                      <span>
                        <a
                          href="https://wa.me/221774952024"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Contactez-nous
                        </a>{" "}
                      </span>
                    </button>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 pt-6 border-t border-dark-700/50">
                    <a
                      href="tel:+221774952024"
                      className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
                    >
                      <div className="p-2 bg-dark-800/50 rounded-lg group-hover:bg-primary-500/10 border border-dark-700/50 transition-all">
                        <Phone className="w-4 h-4 text-primary-400" />
                      </div>
                      <span className="text-sm">+221 77 495 20 24</span>
                    </a>
                    <a
                      href="mailto:uaszclubinformatique@gmail.com"
                      className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
                    >
                      <div className="p-2 bg-dark-800/50 rounded-lg group-hover:bg-primary-500/10 border border-dark-700/50 transition-all">
                        <Mail className="w-4 h-4 text-primary-400" />
                      </div>
                      <span className="text-sm">
                        uaszclubinformatique@gmail.com
                      </span>
                    </a>
                    <div className="flex items-start gap-3 text-gray-400">
                      <div className="p-2 bg-dark-800/50 rounded-lg border border-dark-700/50 mt-0.5">
                        <MapPin className="w-4 h-4 text-primary-400" />
                      </div>
                      <span className="text-sm">
                        Université Assane Seck, Ziguinchor, Sénégal
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side - Visual */}
                <div className="hidden lg:block">
                  <div className="relative h-96 xl:h-[500px]">
                    {/* Floating card 1 - Événements */}
                    <div
                      className="absolute top-0 right-0 w-44 xl:w-48 p-3 xl:p-4 rounded-xl 
                                  bg-dark-800/80 backdrop-blur-xl border border-dark-700/50
                                  shadow-xl shadow-primary-500/20 animate-float hover:shadow-primary-500/40 transition-all"
                    >
                      <div className="flex items-center space-x-2 xl:space-x-3 mb-2 xl:mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-black text-white">
                            Événements
                          </div>
                          <div className="text-xs text-gray-400">10+/an</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">Workshops</span>
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-[10px] font-bold">
                          ACTIF
                        </span>
                      </div>
                    </div>

                    {/* Floating card 2 - Projets */}
                    <div
                      className="absolute bottom-0 left-0 w-44 xl:w-48 p-3 xl:p-4 rounded-xl 
                                  bg-dark-800/80 backdrop-blur-xl border border-dark-700/50
                                  shadow-xl shadow-accent-500/20 animate-float hover:shadow-accent-500/40 transition-all"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="flex items-center space-x-2 xl:space-x-3 mb-2 xl:mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center shadow-lg shadow-accent-500/30">
                          <Code className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-black text-white">
                            Projets
                          </div>
                          <div className="text-xs text-gray-400">
                            50+ réalisés
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1.5">
                        <span className="text-lg">💻</span>
                        <span className="text-lg">🚀</span>
                        <span className="text-lg">⚡</span>
                      </div>
                    </div>

                    {/* Center logo with glow - UASZ Club */}
                    <div className="flex items-center justify-center h-full">
                      <div className="relative w-56 xl:w-64 h-80 xl:h-96">
                        {/* Logo container with green glow */}
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-dark-800/80 to-accent-500/20 
                                      rounded-3xl backdrop-blur-xl border-4 border-dark-700/50
                                      flex items-center justify-center animate-float shadow-2xl shadow-primary-500/30"
                          style={{ animationDelay: "2s" }}
                        >
                          <div className="text-center p-6">
                            <div className="relative mb-4">
                              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-2xl opacity-60"></div>
                              <div className="relative bg-gradient-to-br from-primary-600 to-accent-500 p-4 rounded-2xl shadow-lg shadow-primary-500/40">
                                <Rocket className="w-12 h-12 text-white" />
                              </div>
                            </div>
                            <div className="text-3xl font-black bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                              UASZ
                            </div>
                            <div className="text-xs text-gray-400">
                              Club Informatique
                            </div>
                          </div>
                        </div>

                        {/* Animated glow rings */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-primary-500/20 animate-ping"></div>
                        <div className="absolute inset-4 rounded-3xl border-2 border-accent-500/20 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Floating stats cards */}
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="absolute w-32 xl:w-36 p-3 rounded-lg 
                                  bg-dark-800/80 backdrop-blur-xl border border-dark-700/50
                                  shadow-xl animate-float hover:shadow-primary-500/40 transition-all"
                        style={{
                          animationDelay: `${3 + index}s`,
                          top:
                            index === 0 ? "25%" : index === 1 ? "50%" : "75%",
                          right: index % 2 === 0 ? "0" : "auto",
                          left: index % 2 === 1 ? "0" : "auto",
                        }}
                      >
                        <div className="text-center">
                          <div
                            className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.gradient} mb-2`}
                          >
                            <stat.icon className="w-5 h-5 text-white" />
                          </div>
                          <div
                            className={`text-2xl xl:text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom info */}
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-400 px-4">
            <p>
              Adhésion gratuite pour tous les étudiants de l'UASZ.{" "}
              <span className="text-primary-400 hover:text-primary-300 cursor-pointer">
                <a href="/evenement">En savoir plus →</a>
              </span>
            </p>
          </div>

          {/* Social badges with improved design */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 px-4 max-w-2xl mx-auto">
            {[
              {
                name: "GitHub",
                icon: "💻",
                gradient: "from-gray-600 to-gray-800",
              },
              {
                name: "Discord",
                icon: "💬",
                gradient: "from-indigo-600 to-purple-600",
              },
              {
                name: "LinkedIn",
                icon: "💼",
                gradient: "from-blue-600 to-cyan-600",
              },
            ].map((social) => (
              <div
                key={social.name}
                className="group relative px-4 sm:px-6 py-3 sm:py-3 bg-dark-800/50 backdrop-blur-xl 
                            border border-dark-700/50 rounded-xl
                            flex items-center justify-center space-x-2 sm:space-x-3
                            hover:border-primary-500/50 transition-all cursor-pointer
                            transform hover:scale-105 overflow-hidden"
              >
                {/* Gradient hover effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <span className="relative text-xl sm:text-2xl">
                  {social.icon}
                </span>
                <span className="relative text-sm font-bold text-white">
                  {social.name}
                </span>
              </div>
            ))}
          </div>

          {/* Extra motivational section */}
          <div className="mt-12 sm:mt-16">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 py-6 sm:py-4 bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-xl border border-primary-500/20 rounded-2xl max-w-4xl mx-auto">
              {/* Apprendre */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30 flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black text-white">Apprendre</div>
                  <div className="text-xs text-gray-400">
                    Technologies modernes
                  </div>
                </div>
              </div>

              {/* Separator - horizontal on mobile, vertical on desktop */}
              <div className="w-full h-px sm:w-px sm:h-12 bg-primary-500/20"></div>

              {/* Pratiquer */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center shadow-lg shadow-accent-500/30 flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black text-white">Pratiquer</div>
                  <div className="text-xs text-gray-400">Projets réels</div>
                </div>
              </div>

              {/* Separator - horizontal on mobile, vertical on desktop */}
              <div className="w-full h-px sm:w-px sm:h-12 bg-primary-500/20"></div>

              {/* Exceller */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center shadow-lg shadow-primary-500/30 flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black text-white">Exceller</div>
                  <div className="text-xs text-gray-400">Carrière tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
