import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Despre Noi — Vila Fascination Predeal",
  description:
    "Vila Fascination Predeal — cazare confortabilă cu mic dejun inclus în Predeal, la 1.4 km de centru.",
};

export default function DespreNoiPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold text-cream mb-4">
            Despre Noi
          </h1>
          <p className="text-muted text-lg">Vila Fascination · Predeal</p>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </div>

        <Reveal>
          <div className="relative aspect-video overflow-hidden mb-12">
            <Image
              src="/images/vila-fascination/40682125.jpg"
              alt="Vila Fascination Predeal"
              fill
              priority
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6 text-cream/80 leading-relaxed">
            <p className="text-lg">
              Vila Fascination este situată în Predeal, cea mai înaltă stațiune
              montană din România, la 1.4 km de centrul orașului. Oferim cazare
              de calitate într-un cadru natural spectaculos, cu vedere la munte
              și acces rapid la principalele atracții din zonă.
            </p>
            <p>
              Locația noastră îți oferă acces rapid la principalele atracții
              turistice din zonă: Castelul Bran, Castelul Peleș, Cetatea Râșnov,
              Dino Parc și pârtiile de schi Clăbucet. Vila este poziționată
              ideal pentru explorarea acestor obiective.
            </p>
            <p>
              Îmbinăm confortul modern cu liniștea naturii. Dispunem de camere
              confortabile dotate cu WiFi, TV cu ecran plat, baie privată și
              balcon cu vedere la munte. În curte ai acces la grădină, grătar
              și zonă de masă, perfecte pentru relaxare.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">🏔️</div>
              <h3 className="text-cream font-semibold mb-2">Vedere la munte</h3>
              <p className="text-muted text-sm">
                Camere cu balcon și priveliște spre munții Bucegi
              </p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">�</div>
              <h3 className="text-cream font-semibold mb-2">Mic dejun inclus</h3>
              <p className="text-muted text-sm">
                Mic dejun variat și proaspăt, servit în fiecare dimineață
              </p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">�</div>
              <h3 className="text-cream font-semibold mb-2">Grădină & Grătar</h3>
              <p className="text-muted text-sm">
                Grădină generoasă cu mobilier exterior, zonă masă și grătar gratuit
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-12 p-8 bg-night-light border border-border-dark">
            <h2 className="font-display text-2xl font-bold text-cream mb-4">
              Facilități incluse
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "WiFi gratuit",
                "TV cu ecran plat",
                "Mic dejun inclus",
                "Parcare gratuită",
                "Grădină & grătar",
                "Balcon cu vedere la munte",
                "Trambulină & sală de joacă",
                "Baie privată",
                "Copii până la 8 ani gratuit",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-cream/80">
                  <span className="text-gold">✦</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
