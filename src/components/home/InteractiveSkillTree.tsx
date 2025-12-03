// src/components/home/InteractiveSkillTree.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Box, Code, Layers, Server } from "lucide-react";

// Données de l'arbre
const skillNodes = [
  {
    id: 1,
    name: "Base Dev",
    icon: Code,
    color: "bg-red-500",
    top: "10%",
    left: "50%",
    details: "HTML/CSS/JS essentiels.",
  },
  {
    id: 2,
    name: "Frontend",
    icon: Layers,
    color: "bg-blue-500",
    top: "35%",
    left: "30%",
    details: "React, Vue, Tailwind CSS.",
  },
  {
    id: 3,
    name: "Backend",
    icon: Server,
    color: "bg-green-500",
    top: "35%",
    left: "70%",
    details: "Node.js, Express, Databases.",
  },
  {
    id: 4,
    name: "DevOps",
    icon: GitBranch,
    color: "bg-purple-500",
    top: "65%",
    left: "50%",
    details: "Docker, CI/CD, Cloud Basics.",
  },
];

const InteractiveSkillTree: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-black text-center text-dark-900 mb-16">
          Votre{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Arbre de Compétences
          </span>
        </h2>

        <div className="relative w-full h-[500px] bg-white rounded-3xl shadow-xl border border-gray-200">
          {/* Lignes de connexion (simulées) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Ligne 1 -> 2 */}
            <motion.line
              x1="50"
              y1="10"
              x2="30"
              y2="35"
              stroke="#ccc"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            {/* Ligne 1 -> 3 */}
            <motion.line
              x1="50"
              y1="10"
              x2="70"
              y2="35"
              stroke="#ccc"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            {/* Ligne 2 -> 4 */}
            <motion.line
              x1="30"
              y1="35"
              x2="50"
              y2="65"
              stroke="#ccc"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            {/* Ligne 3 -> 4 */}
            <motion.line
              x1="70"
              y1="35"
              x2="50"
              y2="65"
              stroke="#ccc"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
          </svg>

          {skillNodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-10"
              style={{ top: node.top, left: node.left }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + node.id * 0.1 }}
            >
              {/* Le Noeud lui-même */}
              <div
                className={`w-12 h-12 rounded-full ${node.color} flex items-center justify-center border-4 border-white shadow-xl hover:scale-110 transition-transform`}
              >
                <node.icon className="w-6 h-6 text-white" />
              </div>

              {/* Tooltip d'information */}
              {activeNode === node.id && (
                <div className="absolute left-full top-1/2 ml-4 p-3 w-48 bg-dark-900 text-white rounded-lg shadow-2xl transition-opacity">
                  <h4 className="font-bold mb-1">{node.name}</h4>
                  <p className="text-xs text-gray-300">{node.details}</p>
                </div>
              )}
              {/* Nom du noeud sous le cercle */}
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs font-bold text-dark-900 whitespace-nowrap">
                {node.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkillTree;
