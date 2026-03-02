export type MatchDay = {
  id: string;
  tournament: string;
  year: number;
  stage: "Final" | "Semi Final" | "Quarter Final" | "Group Stage";
  team: string;
  opponent: string;
  outcomeLabel: string;
  outcomeType: "winner" | "finalist" | "semifinalist" | "participant";
  location?: string;
  image?: string;
  notes?: string;
};

export const matchDays: MatchDay[] = [
  {
    id: "grace-international-2025-final",
    tournament: "Grace International Cup",
    year: 2025,
    stage: "Final",
    team: "Chillax FC",
    opponent: "Grace International",
    outcomeLabel: "Champions 🏆",
    outcomeType: "winner",
    location: "Darwin, NT",
    image: "/photo_1.jpeg",
    notes:
      "Chillax FC lifted the Grace International Cup after an outstanding tournament performance and strong team unity.",
  },

  {
    id: "zenith-cup-2024-final",
    tournament: "Zenith Cup",
    year: 2024,
    stage: "Final",
    team: "Chillax FC",
    opponent: "Northern Nepalese",
    outcomeLabel: "Champions 🏆",
    outcomeType: "finalist",
    location: "Darwin, NT",
    image: "/coverpage.jpeg",
    notes:
      "A memorable victory as Chillax FC lifted the Zenith Cup after an intense final match.",
  },

  {
    id: "refugee-cup-2024-semi",
    tournament: "Refugee Cup",
    year: 2024,
    stage: "Semi Final",
    team: "Chillax FC",
    opponent: "Congolese",
    outcomeLabel: "Semi Finalist",
    outcomeType: "semifinalist",
    location: "Darwin, NT",
    image: "/photo_1.jpeg",
    notes:
      "A competitive semi-final appearance showcasing strong determination and growth.",
  },
];
