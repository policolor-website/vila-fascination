"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold text-cream mb-4">Contact</h1>
          <p className="text-muted text-lg">Suntem aici pentru tine</p>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-cream mb-6">
              Informații de contact
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center text-gold text-xl shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider mb-1">Telefon</p>
                  <a href="tel:0725916812" className="text-cream hover:text-gold no-underline transition-colors">
                    0725916812
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center text-gold text-xl shrink-0">
                  ✉
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:rezervari@pensiuneadonaris.ro" className="text-cream hover:text-gold no-underline transition-colors">
                    rezervari@pensiuneadonaris.ro
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center text-gold text-xl shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider mb-1">Adresă</p>
                  <p className="text-cream">Eșelnița, 227195, România</p>
                  <a
                    href="https://www.google.com/maps/dir//227195+E%C8%99elni%C8%9Ba/@44.7000929,22.3433695,14z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-sm hover:text-gold-light no-underline transition-colors"
                  >
                    Vezi pe hartă →
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 relative aspect-video overflow-hidden border border-border-dark">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.123456789!2d22.3433695!3d44.7000929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475186fa615d4683%3A0x943e2bd58042e5a5!2sE%C8%99elni%C8%9Ba!5e0!3m2!1sro!2sro!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pensiunea Donaris pe hartă"
              />
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-night-light border border-gold p-8 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h2 className="text-gold font-semibold text-xl mb-2">Mesaj trimis!</h2>
                <p className="text-cream/80 text-sm">
                  Vă vom răspunde în cel mai scurt timp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-muted hover:text-gold text-xs underline border-0 bg-transparent cursor-pointer"
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-night-light border border-border-dark p-8">
                <h2 className="font-display text-2xl font-bold text-cream mb-6">
                  Trimite-ne un mesaj
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">Nume</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">Telefon</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">Mesaj</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gold text-night text-sm font-semibold uppercase tracking-wider transition-all hover:bg-gold-light cursor-pointer border-0"
                  >
                    Trimite mesajul
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
