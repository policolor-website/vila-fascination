import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vila.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl py-20">
        <p
          className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4"
          style={{ animation: "fadeUp 0.8s ease forwards" }}
        >
          Predeal · Muntele Bucegi
        </p>
        <h1
          className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight mb-4"
          style={{ animation: "fadeUp 0.8s ease 0.2s forwards", opacity: 0 }}
        >
          Vila <span className="text-gradient-gold">Fascination</span>
        </h1>
        <p
          className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-6 leading-relaxed"
          style={{ animation: "fadeUp 0.8s ease 0.4s forwards", opacity: 0 }}
        >
          Escapada perfectă la munte, departe de agitația orașului. Camere
          confortabile cu balcon, mic dejun inclus și grădină generoasă, la
          1.4 km de centrul stațiunii Predeal.
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
