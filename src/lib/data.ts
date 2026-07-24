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
    slug: "apartament-cu-balcon",
    name: "Apartament cu balcon",
    price: 310,
    size: 20,
    capacity: "4 Persoane",
    beds: "2 x Pat matrimonial",
    baths: 1,
    image: "/images/vila-fascination/apartament-01.jpg",
    gallery: [
      "/images/vila-fascination/apartament-01.jpg",
      "/images/vila-fascination/apartament-02.jpg",
      "/images/vila-fascination/apartament-03.jpg",
      "/images/vila-fascination/apartament-04.jpg",
      "/images/vila-fascination/apartament-05.jpg",
      "/images/vila-fascination/apartament-06.jpg",
      "/images/vila-fascination/apartament-07.jpg",
    ],
    description:
      "Apartament spațios la parter, cu balcon și vedere la munte. Ideal pentru familii sau grupuri de prieteni, găzduiește confortabil 4 persoane în 2 paturi matrimoniale. Dotat cu WiFi, TV cu ecran plat, baie proprie cu duș, uscător de păr, prosoape și papuci.",
    facilities: [
      "WiFi gratuit",
      "TV cu ecran plat",
      "Baie privată (duș)",
      "Uscător de păr",
      "Prosoape",
      "Papuci",
      "Plasă de țânțari",
      "Balcon cu vedere la munte",
      "Pătuț disponibil",
    ],
  },
  {
    slug: "camera-dubla-cu-balcon",
    name: "Camera dublă cu balcon",
    price: 300,
    size: 16,
    capacity: "2 + 1 Persoană",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/vila-fascination/camera-dubla-01.jpg",
    gallery: [
      "/images/vila-fascination/camera-dubla-01.jpg",
      "/images/vila-fascination/camera-dubla-02.jpg",
      "/images/vila-fascination/camera-dubla-03.jpg",
      "/images/vila-fascination/camera-dubla-04.jpg",
      "/images/vila-fascination/camera-dubla-05.jpg",
      "/images/vila-fascination/camera-dubla-06.jpg",
      "/images/vila-fascination/camera-dubla-07.jpg",
      "/images/vila-fascination/camera-dubla-08.jpg",
    ],
    description:
      "Cameră dublă cochetă la parter, cu balcon și vedere la munte. Găzduiește confortabil 2 persoane, cu posibilitate de pat suplimentar pentru un adult. Dotată cu WiFi, TV cu ecran plat, baie proprie cu duș și pătuț pentru copii.",
    facilities: [
      "WiFi gratuit",
      "TV cu ecran plat",
      "Baie privată (duș)",
      "Pat suplimentar disponibil",
      "Pătuț disponibil",
      "Balcon cu vedere la munte",
    ],
  },
];

export const facilities = [
  { icon: "car", label: "Parcare gratuită", desc: "Parcare privată la fața locului" },
  { icon: "wifi", label: "WiFi gratuit", desc: "Internet în toate spațiile" },
  { icon: "garden", label: "Grădină & Terasă", desc: "Mobilier exterior & zonă masă" },
  { icon: "bbq", label: "Grătar", desc: "Grătar gratuit în curte" },
  { icon: "kids", label: "Copii până la 8 ani gratuit", desc: "Trambulină, sală de joacă, pătuț" },
  { icon: "balcony", label: "Balcon cu vedere la munte", desc: "Toate camerele au balcon" },
  { icon: "breakfast", label: "Mic dejun inclus", desc: "Mic dejun variat și proaspăt" },
  { icon: "accessible", label: "Accesibil", desc: "Acces pentru persoane cu dizabilități" },
];

export const reviews = [
  {
    name: "Scarlat Remus",
    rating: 5,
    text: "O experiență extraordinară!! O locație plasată excelent și niște gazde extraordinare, niște oameni extraordinari! A fost cel mai reușit concediu la Vila Fascination! Recomandăm cu mare plăcere! Abia așteptăm să revenim!",
  },
  {
    name: "Vlasceanu Mirela",
    rating: 5,
    text: "O experiență plăcută într-un mediu liniștit, departe de zgomotul mașinilor și rutina de zi cu zi. Merită vizitat locul, o oază de liniște în mijlocul naturii!",
  },
  {
    name: "Alexandra Sovailescu",
    rating: 5,
    text: "O amplasare deosebită, departe de valva stațiunii și personal excepțional. Vila este cochetă, tematică rustică și camere curate. Domnul Cristian și fiul dumnealui creează un sejur calduros celor care le calcă pragul. Cu siguranță vom reveni!",
  },
  {
    name: "Gabriela Budu",
    rating: 5,
    text: "Apreciez mult atenția gazdelor la detalii și generozitatea micului dejun.",
  },
  {
    name: "Cuplu tânăr",
    rating: 5,
    text: "Personal foarte bun, curățenie, liniște.",
  },
  {
    name: "Grup de prieteni",
    rating: 5,
    text: "A fost exact așa cum mi-am dorit, o oază de verdeață și liniște, plus aerul curat care a completat perfect tabloul.",
  },
];

export const blogPosts = [
  {
    slug: "castelul-bran-legendara-fortareata-a-lui-dracula",
    title: "Castelul Bran — Legendara fortăreață a lui Dracula",
    excerpt: "La doar 50 km de Predeal, Castelul Bran atrage anual sute de mii de turiști...",
    image: "/images/vila-fascination/hotel-15.jpg",
  },
  {
    slug: "castelul-peles-bijuteria-coroanei-regale",
    title: "Castelul Peleș — Bijuteria coroanei regale române",
    excerpt: "Situated in Sinaia, la 25 km de Predeal, Castelul Peleș este unul dintre cele mai frumoase castele din Europa...",
    image: "/images/vila-fascination/hotel-16.jpg",
  },
  {
    slug: "cetatea-rasnov-si-dino-parc-aventura-pentru-toata-familia",
    title: "Cetatea Râșnov & Dino Parc — Aventură pentru toată familia",
    excerpt: "La 30 km de Predeal, Cetatea Râșnov și Dino Parc oferă o experiență de neuitat...",
    image: "/images/vila-fascination/hotel-17.jpg",
  },
];

export const galleryImages = [
  "/images/vila-fascination/hotel-01.jpg",
  "/images/vila-fascination/hotel-02.jpg",
  "/images/vila-fascination/hotel-03.jpg",
  "/images/vila-fascination/hotel-04.jpg",
  "/images/vila-fascination/hotel-05.jpg",
  "/images/vila-fascination/hotel-06.jpg",
  "/images/vila-fascination/hotel-07.jpg",
  "/images/vila-fascination/hotel-08.jpg",
  "/images/vila-fascination/hotel-09.jpg",
  "/images/vila-fascination/hotel-10.jpg",
  "/images/vila-fascination/hotel-11.jpg",
  "/images/vila-fascination/hotel-12.jpg",
  "/images/vila-fascination/hotel-13.jpg",
  "/images/vila-fascination/hotel-14.jpg",
  "/images/vila-fascination/hotel-15.jpg",
  "/images/vila-fascination/hotel-16.jpg",
  "/images/vila-fascination/hotel-17.jpg",
  "/images/vila-fascination/hotel-18.jpg",
  "/images/vila-fascination/hotel-19.jpg",
  "/images/vila-fascination/hotel-20.jpg",
  "/images/vila-fascination/hotel-21.jpg",
  "/images/vila-fascination/apartament-01.jpg",
  "/images/vila-fascination/apartament-02.jpg",
  "/images/vila-fascination/apartament-03.jpg",
  "/images/vila-fascination/apartament-04.jpg",
  "/images/vila-fascination/apartament-05.jpg",
  "/images/vila-fascination/apartament-06.jpg",
  "/images/vila-fascination/apartament-07.jpg",
  "/images/vila-fascination/camera-dubla-01.jpg",
  "/images/vila-fascination/camera-dubla-02.jpg",
  "/images/vila-fascination/camera-dubla-03.jpg",
  "/images/vila-fascination/camera-dubla-04.jpg",
  "/images/vila-fascination/camera-dubla-05.jpg",
  "/images/vila-fascination/camera-dubla-06.jpg",
  "/images/vila-fascination/camera-dubla-07.jpg",
  "/images/vila-fascination/camera-dubla-08.jpg",
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
