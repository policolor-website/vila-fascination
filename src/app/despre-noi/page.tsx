import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Despre Noi — Pensiunea Donaris",
  description:
    "Pensiunea Donaris — cazare în Eșelnița pe malul Dunării, aproape de Cazanele Dunării.",
};

export default function DespreNoiPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold text-cream mb-4">
            Despre Noi
          </h1>
          <p className="text-muted text-lg">Pensiunea Donaris · Eșelnița</p>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </div>

        <Reveal>
          <div className="relative aspect-video overflow-hidden mb-12">
            <Image
              src="/images/SNY09679-min-scaled.jpg"
              alt="Pensiunea Donaris"
              fill
              priority
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6 text-cream/80 leading-relaxed">
            <p className="text-lg">
              Pensiunea Donaris este situată în Eșelnița, pe malul Dunării,
              la 25 km de Porțile de Fier 1. Oferim cazare de calitate într-un
              cadru natural spectaculos, cu vedere directă la Cazanele Dunării.
            </p>
            <p>
              Locația noastră îți oferă acces rapid la principalele atracții
              turistice din zonă: Statuia lui Decebal, Tabula Traiana,
              Mănăstirea Mraconia, Peștera Ponicova și plimbările cu barca
              prin Cazanele Dunării. Pensiunea este poziționată ideal pentru
              explorarea acestor obiective.
            </p>
            <p>
              Îmbinăm confortul modern cu liniștea naturii. Dispunem de camere
              spațioase dotate cu aer condiționat, Wi-Fi gratuit, televizor,
              baie privată și vedere panoramică. În curte ai acces la grătar,
              foișor și ponton, perfecte pentru relaxare.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">🚤</div>
              <h3 className="text-cream font-semibold mb-2">Plimbări cu barca</h3>
              <p className="text-muted text-sm">
                Explorează Cazanele Dunării, Statuia lui Decebal și Tabula Traiana
              </p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">🏊</div>
              <h3 className="text-cream font-semibold mb-2">Piscină cu vedere</h3>
              <p className="text-muted text-sm">
                Relaxează-te și răcorește-te admirând peisajul unic al falezei
              </p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">🎣</div>
              <h3 className="text-cream font-semibold mb-2">Ponton & Pescuit</h3>
              <p className="text-muted text-sm">
                Ponton privat pentru cafea dimineața sau pescuit
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
                "Aer condiționat",
                "Smart TV",
                "WiFi de mare viteză",
                "Parcare gratuită monitorizată",
                "Ponton privat",
                "Piscină cu vedere",
                "Grătar & foișor",
                "Baie privată",
                "Vedere panoramică",
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
