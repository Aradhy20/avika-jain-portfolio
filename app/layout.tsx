import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avika Jain — Graphic, Product & Visual Designer",
  description: "Portfolio of Avika Jain, a multidisciplinary creative working across graphic design, product design, branding and video editing.",
  openGraph: {
    title: "Avika Jain — Creative Portfolio",
    description: "Designing thoughtful digital and visual experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
