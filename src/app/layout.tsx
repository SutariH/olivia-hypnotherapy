import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olivia Hypnotherapy | Professional Hypnotherapy Services",
  description: "Transform your life through professional hypnotherapy services. Specializing in weight management, emotional eating, stress management, and confidence building.",
  keywords: "hypnotherapy, weight management, emotional eating, stress management, confidence building, professional hypnotherapy, mental health, personal development",
  authors: [{ name: "Olivia" }],
  creator: "Olivia",
  publisher: "Olivia Hypnotherapy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://olivia-hypnotherapy.com",
    siteName: "Olivia Hypnotherapy",
    title: "Olivia Hypnotherapy | Professional Hypnotherapy Services",
    description: "Transform your life through professional hypnotherapy services. Specializing in weight management, emotional eating, stress management, and confidence building.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Olivia Hypnotherapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivia Hypnotherapy | Professional Hypnotherapy Services",
    description: "Transform your life through professional hypnotherapy services. Specializing in weight management, emotional eating, stress management, and confidence building.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://olivia-hypnotherapy.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#BADED7" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
