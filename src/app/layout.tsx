import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serene Oasis Spa | Luxury Wellness & Spa Thailand",
  description:
    "Experience the pinnacle of luxury wellness at Serene Oasis Spa. Professional excellence meets compassionate care in the world of wellness. Book your spa experience today.",
  keywords:
    "luxury spa, Thai massage, wellness, spa treatment, spa packages, Bangkok spa",
  openGraph: {
    title: "Serene Oasis Spa | Luxury Wellness & Spa Thailand",
    description:
      "Where professional excellence meets the art of compassionate care in the world of wellness.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
