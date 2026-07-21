export interface Room {
  slug: string;
  name: string;
  price: number;
  size: number;
  capacity: string;
  beds: string;
  baths: number;
  image: string;
  gallery: string[];
  description: string;
  facilities: string[];
}

export const rooms: Room[] = [
  {
    slug: "apartament",
    name: "Apartament",
    price: 650,
    size: 40,
    capacity: "2 Adulți + 2 Copii",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/SNY09636-768x660.jpg",
    gallery: [
      "/images/SNY09636-768x660.jpg",
      "/images/SNY09655-min-1-scaled.jpg",
      "/images/SNY09679-min-scaled.jpg",
      "/images/SNY09682-min-scaled.jpg",
    ],
    description:
      "Apartament confortabil, ideal pentru 4 persoane. Oferă o frumoasă vedere la stradă și munte, fiind dotată cu aer condiționat, un pat matrimonial, mini frigider, TV cu ecran plat și uscător de păr cu vedere la terasa și golf.",
    facilities: [
      "Aer condiționat",
      "TV cu ecran plat",
      "WiFi gratuit",
      "Camere de familie",
      "Parcare gratuită",
      "Pat matrimonial",
      "Uscător de păr",
      "Balcon",
    ],
  },
  {
    slug: "camera-009",
    name: "Camera 009",
    price: 380,
    size: 25,
    capacity: "2 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/SNY09597-min-768x660.jpg",
    gallery: [
      "/images/SNY09597-min-768x660.jpg",
      "/images/SNY09555-768x660.jpg",
      "/images/SNY09668-min-scaled.jpg",
    ],
    description:
      "Cameră modernă și cochetă, dotată cu aer condiționat, Smart TV, WiFi gratuit și baie privată. Vedere panoramică spre Dunăre.",
    facilities: [
      "Aer condiționat",
      "Smart TV",
      "WiFi gratuit",
      "Baie privată",
      "Uscător de păr",
      "Vedere la Dunăre",
    ],
  },
  {
    slug: "camera-008",
    name: "Camera 008",
    price: 380,
    size: 25,
    capacity: "2 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/SNY09549-min-scaled.jpg",
    gallery: [
      "/images/SNY09549-min-scaled.jpg",
      "/images/SNY09646-scaled.jpg",
      "/images/SNY09674-min-scaled.jpg",
    ],
    description:
      "Cameră elegantă cu vedere spre grădină și ponton. Dotată cu aer condiționat, Smart TV, WiFi gratuit și baie privată.",
    facilities: [
      "Aer condiționat",
      "Smart TV",
      "WiFi gratuit",
      "Baie privată",
      "Uscător de păr",
      "Vedere spre grădină",
    ],
  },
  {
    slug: "camera-005",
    name: "Camera 005",
    price: 380,
    size: 25,
    capacity: "2 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/SNY09636-scaled.jpg",
    gallery: [
      "/images/SNY09636-scaled.jpg",
      "/images/SNY09655-min-1-scaled.jpg",
    ],
    description:
      "Cameră luminoasă cu vedere spre faleza Dunării. Dotată cu toate facilitățile moderne pentru un sejur confortabil.",
    facilities: [
      "Aer condiționat",
      "Smart TV",
      "WiFi gratuit",
      "Baie privată",
      "Uscător de păr",
    ],
  },
  {
    slug: "camera-002",
    name: "Camera 002",
    price: 380,
    size: 25,
    capacity: "2 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/IMG-20240724-WA0032.jpg",
    gallery: [
      "/images/IMG-20240724-WA0032.jpg",
      "/images/IMG-20240724-WA0013.jpg",
    ],
    description:
      "Cameră confortabilă cu vedere spre ponton și Dunăre. Ideală pentru cupluri care caută liniște și natură.",
    facilities: [
      "Aer condiționat",
      "Smart TV",
      "WiFi gratuit",
      "Baie privată",
      "Uscător de păr",
      "Vedere la Dunăre",
    ],
  },
  {
    slug: "camera-001",
    name: "Camera 001",
    price: 380,
    size: 25,
    capacity: "2 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/SNY09539-min-scaled.jpg",
    gallery: [
      "/images/SNY09539-min-scaled.jpg",
      "/images/SNY09555-scaled.jpg",
    ],
    description:
      "Cameră primitoră la parter, cu acces rapid spre terasă și grădină. Dotată cu facilități moderne.",
    facilities: [
      "Aer condiționat",
      "Smart TV",
      "WiFi gratuit",
      "Baie privată",
      "Uscător de păr",
    ],
  },
];

export const facilities = [
  { icon: "car", label: "Parcare privată", desc: "Locuri de parcare gratuite" },
  { icon: "family", label: "Camere de familie", desc: "Spații pentru toate vârstele" },
  { icon: "balcony", label: "Balcon", desc: "Vedere panoramică" },
  { icon: "wifi", label: "WiFi Gratuit", desc: "Internet de mare viteză" },
  { icon: "terrace", label: "Terasă", desc: "Relaxare în aer liber" },
  { icon: "boat", label: "Ponton & Plimbări cu barca", desc: "Explorează Cazanele Dunării" },
  { icon: "pool", label: "Piscină cu vedere", desc: "Răcorește-te cu peisaj" },
  { icon: "fish", label: "Pescuit", desc: "Ponton privat pentru pasionați" },
];

export const reviews = [
  {
    name: "Mihaela",
    rating: 5,
    text: "O experiență minunată! Locația este superbă, cu vedere direct la Dunăre. Camerele sunt curate și confortabile, iar gazdele sunt foarte primătoare.",
  },
  {
    name: "Gheorghescu",
    rating: 5,
    text: "Pensiunea Donaris este locul perfect pentru relaxare. Am apreciat foarte mult pontonul privat și plimbarea cu barca prin Cazanele Dunării.",
  },
  {
    name: "Nedelcu",
    rating: 5,
    text: "Cazare excelentă în Eșelnița! Personal amabil, mâncare bună, piscină curată. Recomand cu drag pentru familii și cupluri.",
  },
];

export const blogPosts = [
  {
    slug: "comorile-ascunse-ale-manastirii-mraconia",
    title: "Comorile ascunse ale Mănăstirii Mraconia",
    excerpt: "Mănăstirea Mraconia este o mănăstire...",
    image: "/images/Manastirea_Mraconia_2-768x660.jpg",
  },
  {
    slug: "pestera-veterani-legendarul-ascunzis-al-zeului-zamolxis",
    title: "Peștera Veterani – Legendarul Ascunzis al Zeului Zamolxis",
    excerpt: "Ascunsă între stâncile impresionante ale...",
    image: "/images/pestera-veterani-768x660.jpg",
  },
  {
    slug: "minunea-naturala-a-cazanelor-dunarii",
    title: "Minunea naturală a Cazanelor Dunării",
    excerpt: "Minunea naturală a Cazanelor Dunării",
    image: "/images/Defileul-Dunarii-768x660.jpg",
  },
];

export const galleryImages = [
  "/images/SNY09636-768x660.jpg",
  "/images/SNY09655-min-1-scaled.jpg",
  "/images/SNY09679-min-scaled.jpg",
  "/images/SNY09682-min-scaled.jpg",
  "/images/SNY09597-min-768x660.jpg",
  "/images/SNY09555-768x660.jpg",
  "/images/SNY09668-min-scaled.jpg",
  "/images/SNY09549-min-scaled.jpg",
  "/images/SNY09646-scaled.jpg",
  "/images/SNY09674-min-scaled.jpg",
  "/images/SNY09539-min-scaled.jpg",
  "/images/SNY09555-scaled.jpg",
  "/images/IMG-20240724-WA0013.jpg",
  "/images/IMG-20240724-WA0017.jpg",
  "/images/IMG-20240724-WA0019.jpg",
  "/images/IMG-20240724-WA0030.jpg",
  "/images/IMG-20240724-WA0032.jpg",
  "/images/IMG-20240724-WA0033.jpg",
  "/images/IMG-20240724-WA0037.jpg",
  "/images/IMG-20240724-WA0039.jpg",
  "/images/piscina-noaptea.jpeg",
  "/images/piscine2.jpeg",
  "/images/ponton.jpeg",
  "/images/SNY09636-scaled.jpg",
  "/images/WhatsApp-Image-2025-04-08-at-21.24.41_b3a7e03f-1024x473.jpg",
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
