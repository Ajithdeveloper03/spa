import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
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
    <html lang="en">
      <body className={`bg-[#0d0905] ${plusJakartaSans.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
