import type { Metadata, Viewport } from "next";
import "./globals.css";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://avika-jain-portfolio.vercel.app"),
  title: {
    default: "Avika Jain — Graphic Designer, UI/UX & Product Designer, Video Editor",
    template: "%s | Avika Jain"
  },
  description:
    "Official portfolio of Avika Jain — an independent multidisciplinary creative specializing in graphic design, digital product experiences (UI/UX), brand identity systems, and video motion editing.",
  keywords: [
    "Avika Jain",
    "Avika Jain Graphic Designer",
    "Avika Jain Portfolio",
    "Graphic Designer Portfolio",
    "UI UX Designer Portfolio",
    "Product Designer Portfolio",
    "Freelance Graphic Designer",
    "Video Editor Portfolio",
    "Brand Designer India",
    "Figma UI UX Designer",
    "Adobe Photoshop Illustrator",
    "Premiere Pro Video Editor"
  ],
  authors: [{ name: "Avika Jain", url: "https://avika-jain-portfolio.vercel.app" }],
  creator: "Avika Jain",
  publisher: "Avika Jain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Avika Jain — Graphic Designer, UI/UX & Product Designer, Video Editor",
    description:
      "Transforming thoughtful ideas into identities, interfaces, and moving images. Explore curated case studies in graphic design, product UX, branding, and motion.",
    url: "https://avika-jain-portfolio.vercel.app",
    siteName: "Avika Jain Portfolio",
    images: [
      {
        url: "/avika-showcase.jpg",
        width: 946,
        height: 1024,
        alt: "Avika Jain — Graphic Designer, UI/UX & Product Designer, Video Editor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avika Jain — Graphic Designer, UI/UX & Product Designer, Video Editor",
    description:
      "Transforming thoughtful ideas into identities, interfaces, and moving images. Explore curated case studies.",
    images: ["/avika-showcase.jpg"],
    creator: "@avikajain",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "https://avika-jain-portfolio.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#39283A",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
