import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MasterLayout from "@/Components/Masterlayout/Master";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chillaxfc.vercel.app"),
  title: "Chillax FC",
  description: "Chill Together. Win Together",
  openGraph: {
    title: "Chillax FC",
    description: "Chill Together. Win Together",
    url: "https://chillaxfc.vercel.app",
    siteName: "Chillax FC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chillax FC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chillax FC",
    description: "Chill Together. Win Together",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <MasterLayout>{children}</MasterLayout>
        </Suspense>
      </body>
    </html>
  );
}