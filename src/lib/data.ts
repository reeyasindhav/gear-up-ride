export type Difficulty = "Easy" | "Moderate" | "Hard";
export type Tone = "mint" | "sand" | "sky" | "lilac";

export type RouteItem = {
  id: string;
  name: string;
  area: string;
  city: string;
  km: number;
  time: string;
  climb: number;
  difficulty: Difficulty;
  riders: number;
  tag: string;
  tone: Tone;
  surface: string;
  traffic: string;
  conditions: string;
  summary: string;
  highlights: string[];
  segments: { name: string; km: number; grade: string; note: string }[];
  reviews: { author: string; when: string; text: string; rating: number }[];
};

export const routes: RouteItem[] = [
  {
    id: "riverside-loop",
    name: "Riverside Loop",
    area: "Eastbank",
    city: "Portland",
    km: 18.4,
    time: "1h 12m",
    climb: 142,
    difficulty: "Easy",
    riders: 84,
    tag: "Low traffic",
    tone: "mint",
    surface: "Paved path",
    traffic: "Very low",
    conditions: "Dry · 24°",
    summary:
      "A flat, protected loop along the esplanade. Perfect for an easy spin, recovery day, or a first ride with a new group.",
    highlights: ["Car-free for 11 km", "Three water stops", "Best light at sunrise"],
    segments: [
      { name: "Esplanade north", km: 5.2, grade: "0.4%", note: "Wide boardwalk, expect walkers" },
      { name: "Steel Bridge cross", km: 1.1, grade: "1.2%", note: "Slow for the metal grating" },
      { name: "Waterfront return", km: 12.1, grade: "0.2%", note: "Tailwind most afternoons" },
    ],
    reviews: [
      { author: "Maya R.", when: "2 days ago", text: "Did this before work. Smooth tarmac the whole way and almost no cars.", rating: 5 },
      { author: "Tomás L.", when: "1 week ago", text: "Great beginner loop. Gets busy with runners after 5pm.", rating: 4 },
    ],
  },
  {
    id: "north-ridge-climb",
    name: "North Ridge Climb",
    area: "Forest Park",
    city: "Portland",
    km: 32.1,
    time: "2h 08m",
    climb: 486,
    difficulty: "Hard",
    riders: 61,
    tag: "Best views",
    tone: "sand",
    surface: "Paved + gravel",
    traffic: "Moderate",
    conditions: "Dry · 21°",
    summary:
      "The local benchmark climb. Steady 6% gradient through the trees, then a ridge road with the best skyline in the city.",
    highlights: ["486 m of climbing", "Gravel option at km 19", "Cafe at the summit"],
    segments: [
      { name: "Lower switchbacks", km: 6.4, grade: "6.1%", note: "Shaded, cool in the morning" },
      { name: "Ridge traverse", km: 9.8, grade: "2.8%", note: "Exposed — check the wind" },
      { name: "Descent to town", km: 15.9, grade: "-4.5%", note: "Two blind hairpins, take care" },
    ],
    reviews: [
      { author: "Dev P.", when: "4 days ago", text: "Brutal but worth it. Gravel section was in good shape after the rain.", rating: 5 },
      { author: "Ines K.", when: "3 weeks ago", text: "Traffic picks up on weekends around midday.", rating: 4 },
    ],
  },
  {
    id: "old-town-cruise",
    name: "Old Town Cruise",
    area: "Pearl District",
    city: "Portland",
    km: 12.8,
    time: "48m",
    climb: 68,
    difficulty: "Easy",
    riders: 108,
    tag: "Scenic",
    tone: "sky",
    surface: "City streets",
    traffic: "Low",
    conditions: "Dry · 24°",
    summary:
      "A short city stitch-up through bike boulevards, murals and market stalls. Built for a slow Sunday with coffee stops.",
    highlights: ["Six bakeries en route", "Bike boulevards most of the way", "Flat and social"],
    segments: [
      { name: "Market start", km: 2.3, grade: "0.6%", note: "Cobbles for 200 m" },
      { name: "Mural mile", km: 4.1, grade: "0.3%", note: "Slow zone, worth stopping" },
      { name: "Riverside finish", km: 6.4, grade: "0.5%", note: "Protected lane throughout" },
    ],
    reviews: [
      { author: "Jonas W.", when: "Yesterday", text: "Took my partner on her second ever ride. Felt safe the entire way.", rating: 5 },
    ],
  },
  {
    id: "west-hills-tempo",
    name: "West Hills Tempo",
    area: "Cedar Mill",
    city: "Portland",
    km: 24.7,
    time: "1h 34m",
    climb: 318,
    difficulty: "Moderate",
    riders: 39,
    tag: "Quiet roads",
    tone: "lilac",
    surface: "Paved",
    traffic: "Low",
    conditions: "Damp · 19°",
    summary:
      "Rolling tempo route with long, uninterrupted stretches. The best local option for interval work without stop lights.",
    highlights: ["No traffic lights after km 4", "Rolling 2–4% terrain", "Fast return leg"],
    segments: [
      { name: "Valley approach", km: 7.9, grade: "1.9%", note: "Gradual warm up" },
      { name: "Tempo straight", km: 8.6, grade: "2.4%", note: "Smooth surface, ideal for efforts" },
      { name: "Rollers home", km: 8.2, grade: "-1.1%", note: "Punchy final kicker" },
    ],
    reviews: [
      { author: "Alex S.", when: "5 days ago", text: "My go-to for Tuesday intervals. Surface was slick in the shade.", rating: 4 },
    ],
  },
  {
    id: "harbor-flats",
    name: "Harbor Flats",
    area: "Swan Island",
    city: "Portland",
    km: 21.2,
    time: "1h 05m",
    climb: 54,
    difficulty: "Easy",
    riders: 47,
    tag: "Fast & flat",
    tone: "sky",
    surface: "Paved",
    traffic: "Moderate",
    conditions: "Windy · 20°",
    summary: "Pancake flat industrial loop. Quiet on weekends and the fastest place in town to test your legs.",
    highlights: ["Flattest route nearby", "Crosswind training", "Wide shoulders"],
    segments: [
      { name: "Dock straight", km: 9.4, grade: "0.1%", note: "Watch for freight on weekdays" },
      { name: "Island loop", km: 11.8, grade: "0.2%", note: "Fresh tarmac last spring" },
    ],
    reviews: [
      { author: "Priya N.", when: "1 week ago", text: "Windy but empty. Perfect for a solo time trial.", rating: 4 },
    ],
  },
  {
    id: "gorge-gravel",
    name: "Gorge Gravel Escape",
    area: "Troutdale",
    city: "Portland",
    km: 46.3,
    time: "3h 12m",
    climb: 712,
    difficulty: "Hard",
    riders: 28,
    tag: "Adventure",
    tone: "sand",
    surface: "Gravel",
    traffic: "Very low",
    conditions: "Loose · 18°",
    summary: "A full day out. Forest service roads, one river crossing and a long, rewarding gravel descent.",
    highlights: ["38 km unpaved", "Bring 2 bottles minimum", "Patchy phone signal"],
    segments: [
      { name: "Farmland spin-up", km: 11.2, grade: "1.4%", note: "Paved approach" },
      { name: "Forest road climb", km: 18.7, grade: "5.2%", note: "Loose gravel in the corners" },
      { name: "Gorge descent", km: 16.4, grade: "-4.8%", note: "Wide tyres strongly advised" },
    ],
    reviews: [
      { author: "Ravi M.", when: "2 weeks ago", text: "Best day I've had on a bike this year. Route notes were spot on.", rating: 5 },
    ],
  },
];

export type GearItem = {
  id: string;
  name: string;
  brand: string;
  category: "Helmets" | "Tyres" | "Lights" | "Computers" | "Apparel" | "Bags";
  price: number;
  rating: number;
  reviewCount: number;
  verdict: string;
  tone: Tone;
  pros: string[];
  cons: string[];
  specs: { label: string; value: string }[];
  bestFor: string;
  reviews: { author: string; when: string; text: string; rating: number; km: string }[];
};

export const gear: GearItem[] = [
  {
    id: "aeroshell-mips",
    name: "Aeroshell MIPS",
    brand: "Northwind",
    category: "Helmets",
    price: 189,
    rating: 4.6,
    reviewCount: 214,
    verdict: "The most ventilated helmet in the test, with a retention dial that actually holds on rough roads.",
    tone: "mint",
    pros: ["Excellent airflow", "Light at 268 g", "Fits round and oval heads"],
    cons: ["Straps fray after a season", "Loud above 35 km/h"],
    specs: [
      { label: "Weight", value: "268 g" },
      { label: "Vents", value: "18" },
      { label: "Safety", value: "MIPS Air Node" },
      { label: "Sizes", value: "S / M / L" },
    ],
    bestFor: "Long summer rides and climbing days",
    reviews: [
      { author: "Alex S.", when: "1 week ago", text: "Wore it for a 4 hour gravel day and forgot it was on.", rating: 5, km: "1,240 km tested" },
      { author: "Nora H.", when: "1 month ago", text: "Great airflow, but the strap needs replacing already.", rating: 4, km: "3,000 km tested" },
    ],
  },
  {
    id: "allroad-38",
    name: "Allroad 38 Tubeless",
    brand: "Cobble",
    category: "Tyres",
    price: 74,
    rating: 4.8,
    reviewCount: 389,
    verdict: "Fast enough for tarmac, calm enough for gravel. The default answer for most riders in this city.",
    tone: "sand",
    pros: ["Seats easily tubeless", "Grippy in the wet", "Tough sidewalls"],
    cons: ["Slow to fit by hand", "Wears fast on the rear"],
    specs: [
      { label: "Width", value: "38 mm" },
      { label: "Weight", value: "445 g" },
      { label: "TPI", value: "120" },
      { label: "Pressure", value: "2.4–4.1 bar" },
    ],
    bestFor: "Mixed-surface riding year round",
    reviews: [
      { author: "Ravi M.", when: "3 days ago", text: "Ran them through the Gorge with zero cuts. Sealed instantly.", rating: 5, km: "2,100 km tested" },
    ],
  },
  {
    id: "lumen-900",
    name: "Lumen 900",
    brand: "Halo",
    category: "Lights",
    price: 96,
    rating: 4.4,
    reviewCount: 156,
    verdict: "A genuinely useful beam shape for unlit roads, and the daylight flash is visible from a long way back.",
    tone: "sky",
    pros: ["Flat cut-off beam", "6 h at 400 lm", "USB-C"],
    cons: ["Mount rattles on gravel", "No side visibility"],
    specs: [
      { label: "Output", value: "900 lm" },
      { label: "Runtime", value: "2–18 h" },
      { label: "Weight", value: "132 g" },
      { label: "Charge", value: "USB-C, 2 h" },
    ],
    bestFor: "Winter commutes and dawn starts",
    reviews: [
      { author: "Jonas W.", when: "2 weeks ago", text: "Beam doesn't dazzle oncoming riders, which is rarer than it should be.", rating: 4, km: "80 rides" },
    ],
  },
  {
    id: "trace-duo",
    name: "Trace Duo",
    brand: "Kestrel",
    category: "Computers",
    price: 259,
    rating: 4.2,
    reviewCount: 98,
    verdict: "Clear screen and honest battery numbers. Route-following is good; the phone app still needs work.",
    tone: "lilac",
    pros: ["21 h real battery", "Readable in glare", "Fast route sync"],
    cons: ["App is clunky", "No touchscreen"],
    specs: [
      { label: "Screen", value: '2.7"' },
      { label: "Battery", value: "21 h" },
      { label: "Weight", value: "88 g" },
      { label: "Maps", value: "Offline included" },
    ],
    bestFor: "Riders who navigate new routes weekly",
    reviews: [
      { author: "Ines K.", when: "1 month ago", text: "Navigation kept up on the ridge with no signal.", rating: 4, km: "6 months tested" },
    ],
  },
  {
    id: "stormline-jacket",
    name: "Stormline Shell",
    brand: "Northwind",
    category: "Apparel",
    price: 168,
    rating: 4.5,
    reviewCount: 172,
    verdict: "Packs to the size of a fist and still breathes on a climb. The best value rain shell we've tested.",
    tone: "mint",
    pros: ["Packs tiny", "Breathes while climbing", "Long tail"],
    cons: ["Cuffs let water in", "Only three colours"],
    specs: [
      { label: "Weight", value: "142 g" },
      { label: "Waterproof", value: "10k mm" },
      { label: "Fit", value: "Race" },
      { label: "Packs to", value: "Rear pocket" },
    ],
    bestFor: "Unpredictable shoulder-season weather",
    reviews: [
      { author: "Maya R.", when: "5 days ago", text: "Lived in this all spring. Kept me dry on a two hour downpour.", rating: 5, km: "One season" },
    ],
  },
  {
    id: "hauler-frame-bag",
    name: "Hauler Frame Bag",
    brand: "Ridgeline",
    category: "Bags",
    price: 89,
    rating: 4.7,
    reviewCount: 141,
    verdict: "Rock solid mounting, zero frame rub, and it swallows a day's worth of food and tools.",
    tone: "sand",
    pros: ["No sway on rough roads", "Fully waterproof", "Easy one-hand access"],
    cons: ["Blocks bottle cage", "Straps are long"],
    specs: [
      { label: "Volume", value: "3.2 L" },
      { label: "Weight", value: "228 g" },
      { label: "Material", value: "Recycled X-Pac" },
      { label: "Mount", value: "Strap or bolt" },
    ],
    bestFor: "All-day gravel and bikepacking",
    reviews: [
      { author: "Dev P.", when: "2 weeks ago", text: "Took it down the Gorge descent fully loaded. Didn't move a millimetre.", rating: 5, km: "1,600 km tested" },
    ],
  },
];

export const weeklyRides = [
  { day: "Mon", km: 0, time: 0 },
  { day: "Tue", km: 24.7, time: 94 },
  { day: "Wed", km: 12.8, time: 48 },
  { day: "Thu", km: 0, time: 0 },
  { day: "Fri", km: 18.4, time: 72 },
  { day: "Sat", km: 30.5, time: 128 },
  { day: "Sun", km: 0, time: 0 },
];

export const monthlyProgress = [
  { week: "W1", km: 62 },
  { week: "W2", km: 78 },
  { week: "W3", km: 54 },
  { week: "W4", km: 86.4 },
];

export type Ride = {
  id: string;
  route: string;
  date: string;
  km: number;
  time: string;
  avg: number;
  climb: number;
  effort: Difficulty;
  feel: string;
};

export const rideLog: Ride[] = [
  { id: "r-104", route: "West Hills Tempo", date: "Sat 18 May", km: 30.5, time: "2h 08m", avg: 24.1, climb: 412, effort: "Hard", feel: "Strong" },
  { id: "r-103", route: "Riverside Loop", date: "Fri 17 May", km: 18.4, time: "1h 12m", avg: 21.6, climb: 142, effort: "Easy", feel: "Easy spin" },
  { id: "r-102", route: "Old Town Cruise", date: "Wed 15 May", km: 12.8, time: "48m", avg: 19.4, climb: 68, effort: "Easy", feel: "Social" },
  { id: "r-101", route: "West Hills Tempo", date: "Tue 14 May", km: 24.7, time: "1h 34m", avg: 22.8, climb: 318, effort: "Moderate", feel: "Intervals" },
  { id: "r-100", route: "Harbor Flats", date: "Sun 12 May", km: 21.2, time: "1h 05m", avg: 25.9, climb: 54, effort: "Moderate", feel: "Windy" },
  { id: "r-099", route: "North Ridge Climb", date: "Sat 11 May", km: 32.1, time: "2h 12m", avg: 18.2, climb: 486, effort: "Hard", feel: "Grinding" },
];

export type Club = {
  id: string;
  name: string;
  area: string;
  members: number;
  pace: string;
  vibe: string;
  tone: Tone;
  meets: string;
};

export const clubs: Club[] = [
  { id: "eastside-social", name: "Eastside Social", area: "Eastbank", members: 214, pace: "22–25 km/h", vibe: "No-drop coffee rides", tone: "mint", meets: "Saturdays, 8:00" },
  { id: "ridge-runners", name: "Ridge Runners", area: "Forest Park", members: 96, pace: "28–32 km/h", vibe: "Climbing focused", tone: "sand", meets: "Wednesdays, 18:30" },
  { id: "dawn-patrol", name: "Dawn Patrol", area: "Pearl District", members: 148, pace: "24–27 km/h", vibe: "Sunrise before work", tone: "sky", meets: "Tue & Thu, 5:45" },
  { id: "gravel-union", name: "Gravel Union", area: "Troutdale", members: 72, pace: "Mixed", vibe: "All-day adventures", tone: "lilac", meets: "Every other Sunday" },
];

export type Event = {
  id: string;
  title: string;
  club: string;
  when: string;
  starts: string;
  riders: number;
  distance: string;
  difficulty: Difficulty;
  meetPoint: string;
};

export const events: Event[] = [
  { id: "e-1", title: "Saturday Social", club: "Eastside Social", when: "Sat 25 May · 08:00", starts: "in 2 days", riders: 12, distance: "34 km", difficulty: "Easy", meetPoint: "Esplanade fountain" },
  { id: "e-2", title: "Ridge Repeats", club: "Ridge Runners", when: "Wed 29 May · 18:30", starts: "in 6 days", riders: 8, distance: "42 km", difficulty: "Hard", meetPoint: "Forest Park gate" },
  { id: "e-3", title: "Sunrise Shakeout", club: "Dawn Patrol", when: "Tue 28 May · 05:45", starts: "in 5 days", riders: 15, distance: "26 km", difficulty: "Moderate", meetPoint: "Pearl coffee bar" },
  { id: "e-4", title: "Gorge Day Out", club: "Gravel Union", when: "Sun 2 Jun · 07:30", starts: "in 10 days", riders: 21, distance: "68 km", difficulty: "Hard", meetPoint: "Troutdale bridge" },
];

export const feed = [
  { id: "f-1", author: "Maya R.", handle: "Eastside Social", when: "18m ago", text: "Fresh tarmac on the whole Riverside Loop northern section. Absolute glass.", kind: "Route note" },
  { id: "f-2", author: "Dev P.", handle: "Gravel Union", when: "2h ago", text: "Gorge gravel is loose after Thursday's rain — 40 mm minimum today.", kind: "Conditions" },
  { id: "f-3", author: "Ines K.", handle: "Ridge Runners", when: "5h ago", text: "New PR up North Ridge. The Trace Duo held navigation the whole way with no signal.", kind: "Ride" },
  { id: "f-4", author: "Jonas W.", handle: "Dawn Patrol", when: "Yesterday", text: "Two spare spots on Tuesday's sunrise shakeout if anyone wants an easy start.", kind: "Group ride" },
];

export const badges = [
  { id: "b-1", name: "500 km month", detail: "April 2024", tone: "mint" as Tone },
  { id: "b-2", name: "Ridge finisher", detail: "North Ridge Climb x5", tone: "sand" as Tone },
  { id: "b-3", name: "Club regular", detail: "12 group rides", tone: "sky" as Tone },
  { id: "b-4", name: "Gear reviewer", detail: "7 honest reviews", tone: "lilac" as Tone },
];

export const toneClass: Record<Tone, string> = {
  mint: "bg-mint",
  sand: "bg-sand",
  sky: "bg-sky",
  lilac: "bg-lilac",
};
