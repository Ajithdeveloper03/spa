import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Foot Pulse Reflexology — Relax • Recharge • Restore",
  description:
    "Luxury foot reflexology with exclusive VIP suites. Relax, recharge, and restore with our premium reflexology treatments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${cormorant.variable} ${montserrat.variable} font-montserrat bg-[#004d40] text-cream antialiased selection:bg-gold-500/30 selection:text-gold-200`}>
        {children}
      </body>
    </html>
  );
}
