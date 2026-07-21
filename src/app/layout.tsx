import type { Metadata } from "next";
import { Suspense } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Phone3D from "@/components/Phone3D";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pensiunea Donaris — Cazare Eșelnița | Cazanele Dunării",
  description:
    "Pensiunea Donaris oferă cazare în Eșelnița cu vedere la Dunăre, aproape de Cazanele Dunării. Confort, natură și peisaje spectaculoase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-night text-cream">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <Phone3D />
        </Suspense>
      </body>
    </html>
  );
}
