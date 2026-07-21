"use client";

import { useState } from "react";
import DatePicker from "./DatePicker";

export default function BookingForm({
  roomName,
  roomPrice,
}: {
  roomName: string;
  roomPrice: number;
}) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-night-light border border-gold p-6 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h3 className="text-gold font-semibold text-lg mb-2">Cerere trimisă!</h3>
        <p className="text-cream/80 text-sm">
          Vă vom contacta în cel mai scurt timp pentru confirmarea rezervării
          la <span className="text-gold">{roomName}</span>.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-muted hover:text-gold text-xs underline border-0 bg-transparent cursor-pointer"
        >
          Trimite o altă cerere
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-night-light border border-border-dark p-6">
      <h3 className="text-gold font-semibold text-lg mb-4">Rezervă această cameră</h3>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-xs text-muted uppercase tracking-wider mb-1">Check-in</label>
          <DatePicker
            value={checkIn}
            onChange={setCheckIn}
            placeholder="Check-in"
          />
        </div>
        <div>
          <label className="block text-xs text-muted uppercase tracking-wider mb-1">Check-out</label>
          <DatePicker
            value={checkOut}
            onChange={setCheckOut}
            placeholder="Check-out"
            minDate={checkIn ? new Date(checkIn) : undefined}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="block text-xs text-muted uppercase tracking-wider mb-1">Oaspeți</label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full bg-night border border-border-dark text-cream px-3 py-2 text-sm focus:border-gold focus:outline-none transition-colors"
        >
          <option value="1">1 persoană</option>
          <option value="2">2 persoane</option>
          <option value="3">3 persoane</option>
          <option value="4">4 persoane</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block text-xs text-muted uppercase tracking-wider mb-1">Nume</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-night border border-border-dark text-cream px-3 py-2 text-sm focus:border-gold focus:outline-none transition-colors"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs text-muted uppercase tracking-wider mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-night border border-border-dark text-cream px-3 py-2 text-sm focus:border-gold focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-muted uppercase tracking-wider mb-1">Telefon</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full bg-night border border-border-dark text-cream px-3 py-2 text-sm focus:border-gold focus:outline-none transition-colors"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-muted text-xs">Preț/noapte</span>
        <span className="text-gold font-bold">{roomPrice} lei</span>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-gold text-night text-sm font-semibold uppercase tracking-wider transition-all hover:bg-gold-light cursor-pointer border-0"
      >
        Trimite cererea
      </button>
    </form>
  );
}
