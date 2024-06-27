import type { Metadata, Viewport } from "next";
import { Unbounded, Tilt_Warp, Secular_One } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
});

const tilt_warp = Tilt_Warp({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tilt_warp",
});

const secular_one = Secular_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-secular_one",
});

export const metadata: Metadata = {
  title: "good luck!",
  description: "Maureen's website!",
  openGraph: {
    url: "https://maureen-rawr.vercel.app/",
    title: "good luck!",
    description: "Maureen's website!",
  },
};

export const viewport: Viewport = {
  themeColor: "#fdba74",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable} ${tilt_warp.variable} ${secular_one.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
