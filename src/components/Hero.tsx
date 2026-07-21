import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hotel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl py-20">
        <p
          className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4"
          style={{ animation: "fadeUp 0.8s ease forwards" }}
        >
          Eșelnița · Cazanele Dunării
        </p>
        <h1
          className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight mb-4"
          style={{ animation: "fadeUp 0.8s ease 0.2s forwards", opacity: 0 }}
        >
          Pensiunea <span className="text-gradient-gold">Donaris</span>
        </h1>
        <p
          className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-6 leading-relaxed"
          style={{ animation: "fadeUp 0.8s ease 0.4s forwards", opacity: 0 }}
        >
          Experiența unică a relaxării pe malul Dunării. Confort modern într-un
          cadru natural spectaculos, la 25 km de Porțile de Fier 1.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: "fadeUp 0.8s ease 0.6s forwards", opacity: 0 }}
        >
          <Link
            href="/camere"
            className="px-8 py-4 bg-gold text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold-light"
          >
            Rezervă acum
          </Link>
          <Link
            href="/galerie"
            className="px-8 py-4 border border-cream/30 text-cream text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:border-gold hover:text-gold"
          >
            Vezi galeria
          </Link>
        </div>
      </div>
    </section>
  );
}
