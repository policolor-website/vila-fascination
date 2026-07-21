import Link from "next/link";
import Image from "next/image";
import { rooms } from "@/lib/data";
import BookingEngine from "@/components/BookingEngine";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Camere — Pensiunea Donaris",
  description: "Descoperă camerele și apartamentele Pensiunii Donaris din Eșelnița.",
};

export default function RoomsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold text-cream mb-4">
            Camerele noastre
          </h1>
          <p className="text-muted text-lg">Cazare Eșelnița · Cazanele Dunării</p>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </div>

        <div className="mb-16">
          <BookingEngine />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <Reveal key={room.slug} delay={i * 80}>
              <Link href={`/camere/${room.slug}`} className="group block no-underline">
                <div className="relative overflow-hidden aspect-4/3 mb-5">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                      De la {room.price} lei/noapte
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                  {room.name}
                </h3>
                <p className="text-muted text-sm mb-4">
                  {room.size} mp² · {room.capacity} · {room.beds}
                </p>
                <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                  Vezi detalii →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
