import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0d0905]">{children}</body>
    </html>
  );
}
