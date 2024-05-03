import type { Metadata } from "next";
import { Unbounded, Tilt_Warp, Secular_One } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "good luck!",
  description: "welcome!",
};

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
