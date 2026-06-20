export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: "Match" | "Training" | "Trophy" | "Event";
  description: string;
  aspect: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "match-1",
    src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
    title: "Championship Kickoff",
    category: "Match",
    description: "Opening match of the season under stadium lights, full house cheering.",
    aspect: "aspect-video",
  },
  {
    id: "training-1",
    src: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=800",
    title: "Morning Conditioning",
    category: "Training",
    description: "The team runs shuttle drills to build endurance and core strength.",
    aspect: "aspect-square",
  },
  {
    id: "trophy-1",
    src: "https://images.unsplash.com/photo-1531830307402-b5de39772b55?auto=format&fit=crop&q=80&w=800",
    title: "Metro League Trophy Lift",
    category: "Trophy",
    description: "Team captain raises the Metro Cup aloft during a triumphant awards ceremony.",
    aspect: "aspect-[3/4]",
  },
  {
    id: "event-1",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    title: "Annual Fan Day Assembly",
    category: "Event",
    description: "Fans gather at the main stand to meet the players and participate in games.",
    aspect: "aspect-video",
  },
  {
    id: "match-2",
    src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800",
    title: "Perfect Pitch Focus",
    category: "Match",
    description: "A close-up shot of the official match ball ready for a crucial free-kick.",
    aspect: "aspect-[4/3]",
  },
  {
    id: "training-2",
    src: "https://images.unsplash.com/photo-1526232762687-2af697d1b4b9?auto=format&fit=crop&q=80&w=800",
    title: "Coach's Tactical Brief",
    category: "Training",
    description: "Head coach explains spacing and player roles during tactical dry runs.",
    aspect: "aspect-[3/2]",
  },
  {
    id: "trophy-2",
    src: "https://images.unsplash.com/photo-1578269174936-2709b5a8e040?auto=format&fit=crop&q=80&w=800",
    title: "Gold Medal Showcase",
    category: "Trophy",
    description: "The club's collection of gold medals and trophies won during the 2024 campaigns.",
    aspect: "aspect-[4/3]",
  },
  {
    id: "event-2",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    title: "Media Launch Press Conference",
    category: "Event",
    description: "Vindhyachal FC reveals the new first-team home jersey to press and scouts.",
    aspect: "aspect-[3/2]",
  },
  {
    id: "match-3",
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
    title: "Midfield Battle",
    category: "Match",
    description: "Intense midfield battle for possession during the second half of the local derby.",
    aspect: "aspect-video",
  },
  {
    id: "training-3",
    src: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=800",
    title: "Pre-Match Team Circle",
    category: "Training",
    description: "Players and coaching staff lock arms to build focus and team unity.",
    aspect: "aspect-video",
  },
  {
    id: "trophy-3",
    src: "https://images.unsplash.com/photo-1569512441093-655ab8d40e7b?auto=format&fit=crop&q=80&w=800",
    title: "Honours Banquet Cups",
    category: "Trophy",
    description: "A display of junior championship cups at the annual awards banquet.",
    aspect: "aspect-video",
  },
  {
    id: "event-3",
    src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800",
    title: "Community Soccer Clinic",
    category: "Event",
    description: "First-team players run drills for the local community and youth academy kids.",
    aspect: "aspect-[3/2]",
  },
];
