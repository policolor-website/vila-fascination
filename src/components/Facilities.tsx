import { facilities } from "@/lib/data";
import Reveal from "./Reveal";

const iconMap: Record<string, string> = {
  car: "🚗",
  wifi: "�",
  garden: "�",
  bbq: "�",
  kids: "🧒",
  balcony: "🏔️",
  breakfast: "�",
  accessible: "♿",
};

export default function Facilities() {
  return (
    <section className="py-24 bg-night">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Facilități
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Facilitățile vilei
          </h2>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <Reveal key={f.label} delay={i * 80}>
              <div className="card-hover bg-night-light border border-border-dark p-6 text-center h-full">
                <div className="text-3xl mb-3">{iconMap[f.icon] || "✨"}</div>
                <h3 className="text-cream font-semibold text-sm mb-1">{f.label}</h3>
                <p className="text-muted text-xs">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
