// src/components/home/CodeActivityStream.tsx

import React from "react";
import { motion } from "framer-motion";
import { Zap, GitBranch, Bell } from "lucide-react";

// Données simulées pour le flux
const activities = [
  {
    icon: GitBranch,
    text: "Commit 'feat: add event filters' on repo/events",
    time: "2 min ago",
    color: "text-green-400",
  },
  {
    icon: Bell,
    text: "New formation published: Masterclass React Query",
    time: "1 hour ago",
    color: "text-blue-400",
  },
  {
    icon: Zap,
    text: "Project 'Quantum-Chat' reached 100 stars",
    time: "2 hours ago",
    color: "text-yellow-400",
  },
  {
    icon: GitBranch,
    text: "Merge pull request #45 into main",
    time: "1 day ago",
    color: "text-green-400",
  },
];

const CodeActivityStream: React.FC = () => {
  return (
    <section className="py-20 bg-dark-900 border-t border-b border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center text-white mb-12">
          Le{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">
            Code Végétal
          </span>{" "}
          du Club
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 font-mono text-sm flex items-center gap-4 transition-colors duration-300 hover:bg-gray-700/50 hover:border-cyan-500/50`}
            >
              <activity.icon
                className={`w-5 h-5 ${activity.color} flex-shrink-0`}
              />
              <span className="flex-grow text-gray-200 truncate">
                {activity.text}
              </span>
              <span className="text-gray-500 text-xs flex-shrink-0">
                {activity.time}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Lien vers la page d'activité complète (simulé) */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 text-sm font-bold text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors shadow-lg">
            Voir toutes les activités en direct
          </button>
        </div>
      </div>
    </section>
  );
};

export default CodeActivityStream;
