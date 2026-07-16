import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FOOT PULSE | Premium Foot Reflexology & Wellness Spa Chennai",
  description:
    "South India’s trusted reflexology hub in Mylapore & T. Nagar. Experience professional foot reflexology, couples therapy, and premium VIP spa treatment. Book your wellness journey today.",
  keywords:
    "foot reflexology, foot massage Chennai, spa Mylapore, spa T. Nagar, VIP couples suite, wellness center",
  openGraph: {
    title: "FOOT PULSE | Premium Foot Reflexology & Wellness Spa Chennai",
    description:
      "South India’s trusted reflexology hub in Mylapore & T. Nagar. Experience professional foot reflexology, couples therapy, and premium VIP spa treatment.",
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
