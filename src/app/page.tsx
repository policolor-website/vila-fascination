import Hero from "@/components/Hero";
import BookingEngine from "@/components/BookingEngine";
import DespreNoi from "@/components/DespreNoi";
import Facilities from "@/components/Facilities";
import RoomsPreview from "@/components/RoomsPreview";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="relative z-20 -mt-16 px-6">
        <div className="w-full">
          <BookingEngine />
        </div>
      </section>
      <DespreNoi />
      <Facilities />
      <RoomsPreview />
      <Reviews />
      <CTA />
    </>
  );
}
