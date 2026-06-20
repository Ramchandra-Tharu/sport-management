export interface PlayerStats {
  matches: number;
  goals: number;
  assists: number;
  additional?: { label: string; value: string | number }[];
}

export interface PlayerPersonalInfo {
  born: string;
  nationality: string;
  height: string;
  weight: string;
  joined: string;
}

export interface Player {
  id: string; // e.g. "lucas-martinez"
  name: string;
  number: string; // e.g. "#9"
  position: "Forward" | "Midfielder" | "Defender" | "Goalkeeper";
  age: number;
  image: string;
  fullImage: string;
  personalInfo: PlayerPersonalInfo;
  stats: PlayerStats;
  achievements: string[];
}

export const PLAYERS: Player[] = [
  {
    id: "lucas-martinez",
    name: "Lucas Martinez",
    number: "#9",
    position: "Forward",
    age: 24,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400",
    fullImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
    personalInfo: {
      born: "October 12, 2001 (Age 24)",
      nationality: "Spain",
      height: "6'1\" (185 cm)",
      weight: "172 lbs (78 kg)",
      joined: "June 2022",
    },
    stats: {
      matches: 54,
      goals: 34,
      assists: 12,
      additional: [
        { label: "Shots on Target", value: 108 },
        { label: "Shooting Accuracy", value: "68%" },
        { label: "Pass Accuracy", value: "82%" },
      ],
    },
    achievements: [
      "2025 Metro League Golden Boot Winner",
      "2024 Cup Finals Man of the Match",
      "La Liga Junior Academy Graduate",
    ],
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    number: "#10",
    position: "Midfielder",
    age: 22,
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=400",
    fullImage: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800",
    personalInfo: {
      born: "February 18, 2004 (Age 22)",
      nationality: "Sweden",
      height: "5'8\" (173 cm)",
      weight: "140 lbs (64 kg)",
      joined: "January 2023",
    },
    stats: {
      matches: 42,
      goals: 15,
      assists: 28,
      additional: [
        { label: "Key Passes", value: 74 },
        { label: "Pass Accuracy", value: "89%" },
        { label: "Chances Created", value: 52 },
      ],
    },
    achievements: [
      "2025 Playmaker of the Year Award",
      "2024 Junior Athlete of the Season",
      "National Team U19 Selection",
    ],
  },
  {
    id: "marcus-sterling",
    name: "Marcus Sterling",
    number: "#1",
    position: "Goalkeeper",
    age: 26,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=400",
    fullImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
    personalInfo: {
      born: "August 05, 1999 (Age 26)",
      nationality: "England",
      height: "6'4\" (193 cm)",
      weight: "195 lbs (88 kg)",
      joined: "July 2021",
    },
    stats: {
      matches: 72,
      goals: 0,
      assists: 2,
      additional: [
        { label: "Clean Sheets", value: 34 },
        { label: "Saves Made", value: 240 },
        { label: "Save Ratio", value: "78.5%" },
      ],
    },
    achievements: [
      "2024 & 2025 Golden Glove Winner",
      "Penalty Save Record (5 Saves in a Season)",
      "League Clean Sheet Record Holder",
    ],
  },
  {
    id: "carlos-silva",
    name: "Carlos Silva",
    number: "#4",
    position: "Defender",
    age: 25,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    fullImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    personalInfo: {
      born: "May 14, 2001 (Age 25)",
      nationality: "Brazil",
      height: "6'2\" (188 cm)",
      weight: "180 lbs (82 kg)",
      joined: "August 2022",
    },
    stats: {
      matches: 48,
      goals: 2,
      assists: 4,
      additional: [
        { label: "Interceptions", value: 112 },
        { label: "Tackles Won", value: 89 },
        { label: "Aerial Duels Won", value: "72%" },
      ],
    },
    achievements: [
      "2025 Team Defensive MVP",
      "2024 League XI Selection",
      "Copa Copacabana Youth Winner",
    ],
  },
];
