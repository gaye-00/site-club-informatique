import BureauMembers from "../components/apropos/Bureaumembers";
import ClubValues from "../components/apropos/Clubvalues";
import ClubVision from "../components/apropos/Clubvision";
import AProposHero from "../components/apropos/Aproposhero";
import ClubHistory from "../components/apropos/Clubhistory";
import PresidentsRoadmap from "../components/apropos/Presidentsroadmap";
import HolographicSeparator from "../components/home/HolographicSeparator";

interface President {
  id: number;
  name: string;
  mandate: string;
  level: string;
  photo: string;
  status: "future" | "current" | "past";
  quote: string;
  achievements: string[];
  color: string;
}

// Données des présidents (du plus récent au plus ancien)
export const presidentsData: President[] = [
  {
    id: 9,
    name: "Prochain Président",
    mandate: "2025-2026",
    level: "???",
    photo: "/assets/presidents/pasDePhoto.jpg",
    status: "future",
    quote: "L'avenir du club vous appartient...",
    achievements: ["À écrire ensemble"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 8,
    name: "Abdoulaye Gaye",
    mandate: "2024-2025",
    level: "M1",
    photo: "/assets/presidents/Abdoulaye-Gaye.jpg",
    status: "current",
    quote: "Innovation et excellence, notre devise !",
    achievements: [
      "Avec Abdoulaye, un nouveau club a vue le jour",
      "Digitalisation des processus",
      "Expansion des partenariats",
      "De nouveaux evénements",
    ],
    color: "from-primary-500 to-accent-500",
  },
  {
    id: 7,
    name: "Cheikh Sarr",
    mandate: "2023-2024",
    level: "L2",
    photo: "/assets/presidents/pasDePhoto.jpg",
    status: "past",
    quote: "Ensemble, nous sommes plus forts",
    achievements: ["Renforcement de la communauté", "Initiatives de formation"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 6,
    name: "Mamadou Diallo",
    mandate: "2022-2023",
    level: "M2",
    photo: "/assets/presidents/pasDePhoto.jpg",
    status: "past",
    quote: "La passion avant tout",
    achievements: [
      "Structuration du club",
      "Développement des compétences",
      "Projets collaboratifs",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    name: "Amadou Bathieli",
    mandate: "2022-2023",
    level: "M1",
    photo: "/assets/presidents/pasDePhoto.jpg",
    status: "past",
    quote: "Apprendre et partager",
    achievements: [
      "Ateliers techniques",
      "Mentorat étudiant",
      "Collaboration inter-clubs",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "Daouda Ndiaye",
    mandate: "2021-2022",
    level: "M1",
    photo: "/assets/presidents/pasDePhoto.jpg",
    status: "past",
    quote: "L'union fait la force",
    achievements: [
      "Consolidation des acquis",
      "Événements inter-universitaires",
      "Réseau alumni",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 3,
    name: "Ass Diané",
    mandate: "2020-2021",
    level: "M1",
    photo: "/assets/presidents/Ass-Diane.jpeg",
    status: "past",
    quote: "Persévérance et détermination",
    achievements: [
      "Développement du club post-COVID",
      "Activités en ligne innovantes",
      "Résilience communautaire",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 2,
    name: "Birame Ndoye",
    mandate: "2019-2020",
    level: "M1",
    photo: "/assets/presidents/pasDePhoto.jpg",
    status: "past",
    quote: "Construire ensemble",
    achievements: [
      "Expansion du club",
      "Nouveaux partenariats",
      "Projets innovants",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 1,
    name: "Mamadou Malado Ndiaye",
    mandate: "2018-2019",
    level: "D1",
    photo: "/assets/presidents/pasDePhoto.jpg",
    status: "past",
    quote: "Le début d'une grande aventure",
    achievements: [
      "Refonte des bases du club",
      "Renforcement de la communauté",
      "Initiatives de formation",
    ],
    color: "from-gray-500 to-slate-600",
  },
];

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <AProposHero />

      {/* Histoire du Club */}
      <ClubHistory />

      {/* Roadmap des Présidents (Futur → Présent → Passé) */}
      <PresidentsRoadmap presidents={presidentsData} />

      {/* Membres du Bureau Actuel */}
      <BureauMembers />

      {/* Valeurs du Club */}
      <ClubValues />

      {/* Vision Future */}
      <ClubVision />
      <HolographicSeparator />
    </div>
  );
}
