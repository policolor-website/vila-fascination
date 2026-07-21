"use client";

import { useState } from "react";
import { rooms } from "@/lib/data";
import DatePicker from "./DatePicker";

export default function BookingEngine() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [results, setResults] = useState<typeof rooms | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) return;
    setResults(rooms);
  };

  return (
    <div className="bg-night-light border border-border-dark p-4 md:p-6">
      <h3 className="font-display text-xl font-bold text-cream mb-4">
        Verifică disponibilitatea
      </h3>
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-xs text-gold uppercase tracking-wider mb-1.5">
            Check-in
          </label>
          <DatePicker
            value={checkIn}
            onChange={setCheckIn}
            placeholder="Check-in"
          />
        </div>
        <div>
          <label className="block text-xs text-gold uppercase tracking-wider mb-1.5">
            Check-out
          </label>
          <DatePicker
            value={checkOut}
            onChange={setCheckOut}
            placeholder="Check-out"
            minDate={checkIn ? new Date(checkIn) : undefined}
          />
        </div>
        <div>
          <label className="block text-xs text-gold uppercase tracking-wider mb-1.5">
            Oaspeți
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-night border border-border-dark text-cream px-4 py-2.5 text-sm focus:border-gold focus:outline-none transition-colors"
          >
            <option value="1">1 persoană</option>
            <option value="2">2 persoane</option>
            <option value="3">3 persoane</option>
            <option value="4">4 persoane</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full px-6 py-2.5 bg-gold text-night text-sm font-semibold uppercase tracking-wider transition-all hover:bg-gold-light cursor-pointer border-0"
          >
            Caută
          </button>
        </div>
      </form>

      {results && (
        <div className="space-y-4" style={{ animation: "fadeIn 0.5s ease forwards" }}>
          <p className="text-cream text-sm mb-4">
            {results.length} camere disponibile
          </p>
          {results.map((room) => (
            <div
              key={room.slug}
              className="flex flex-col md:flex-row gap-4 bg-night border border-border-dark p-4 hover:border-gold/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="text-cream font-semibold mb-1">{room.name}</h4>
                <p className="text-muted text-xs mb-2">
                  {room.size} mp² · {room.capacity} · {room.beds}
                </p>
                <div className="flex flex-wrap gap-2">
                  {room.facilities.slice(0, 4).map((f) => (
                    <span key={f} className="text-xs text-muted border border-border-dark px-2 py-1">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <p className="text-gold font-bold text-lg">
                  {room.price} lei
                  <span className="text-muted text-xs font-normal">/noapte</span>
                </p>
                <a
                  href={`/camere/${room.slug}`}
                  className="px-4 py-2 bg-gold text-night text-xs font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold-light"
                >
                  Rezervă
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
