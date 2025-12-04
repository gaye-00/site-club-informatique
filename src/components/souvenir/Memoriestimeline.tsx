import React from "react";
import { motion } from "framer-motion";
import { Calendar, Camera } from "lucide-react";

interface Memory {
  id: number;
  event: string;
  category: string;
  date: string;
  images: string[];
  color: string;
}

interface MemoriesTimelineProps {
  memories: Memory[];
}

const MemoriesTimeline: React.FC<MemoriesTimelineProps> = ({ memories }) => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-accent-50 via-white to-primary-50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-primary-200/50 mb-6 shadow-lg"
          >
            <Calendar className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Chronologie des Souvenirs
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Notre histoire en{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              images
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Chaque événement raconte une histoire, chaque photo capture un
            moment précieux
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Ligne centrale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-accent-300 to-primary-300 hidden lg:block -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-16 lg:space-y-24">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`group relative p-8 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 overflow-hidden ${
                      index % 2 === 0
                        ? "lg:text-right lg:ml-auto"
                        : "lg:text-left lg:mr-auto"
                    }`}
                  >
                    {/* Gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${memory.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Badge catégorie */}
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${memory.color} text-white text-sm font-bold mb-4 shadow-lg`}
                    >
                      <Camera className="w-4 h-4" />
                      {memory.category}
                    </div>

                    {/* Titre */}
                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">
                      {memory.event}
                    </h3>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-600 mb-4 justify-start lg:justify-end">
                      <Calendar className="w-4 h-4 text-primary-600" />
                      <span className="font-semibold">{memory.date}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm text-gray-500 justify-start lg:justify-end">
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-accent-600" />
                        <span>{memory.images.length} photos</span>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div
                      className={`absolute ${
                        index % 2 === 0 ? "top-0 left-0" : "top-0 right-0"
                      } w-24 h-24 bg-gradient-to-br ${
                        memory.color
                      } opacity-0 group-hover:opacity-10 ${
                        index % 2 === 0 ? "rounded-br-3xl" : "rounded-bl-3xl"
                      } transition-opacity duration-500`}
                    />
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: index * 0.1 + 0.3 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${memory.color} shadow-xl border-4 border-white`}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${memory.color}`}
                    />
                  </motion.div>
                </div>

                {/* Photos Preview Side */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    {memory.images.slice(0, 4).map((img, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + imgIndex * 0.05,
                          type: "spring",
                        }}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        className={`relative aspect-square overflow-hidden rounded-2xl shadow-lg group cursor-pointer ${
                          imgIndex === 0
                            ? "col-span-2 row-span-2"
                            : "col-span-1"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${memory.event} - Photo ${imgIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${memory.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                        />
                        {/* Badge si +4 photos */}
                        {imgIndex === 3 && memory.images.length > 4 && (
                          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-white text-2xl font-black">
                              +{memory.images.length - 4}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesTimeline;
