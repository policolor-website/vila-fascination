import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/fascination.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-night/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
            Îți oferim o vacanță <span className="text-gradient-gold">de neuitat</span>
          </h2>
          <p className="text-lg text-cream/80 mb-10 leading-relaxed">
            Aici, muntele nu este doar o destinație, ci un stil de viață.
            Rezervă acum și bucură-te de experiența unică la Vila Fascination Predeal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/camere"
              className="px-8 py-4 bg-gold text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold-light"
            >
              Rezervă acum
            </Link>
            <a
              href="tel:0745575225"
              className="px-8 py-4 border border-cream/30 text-cream text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:border-gold hover:text-gold"
            >
              Sună: 0745 575 225
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
