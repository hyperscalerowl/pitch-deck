import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HyperScalerOwl GreenCloud",
  description:
    "GreenCloud is the distributed hyperscaler redefining cloud infrastructure with community-powered, sustainable compute.",
  metadataBase: new URL("https://greencloud.hyperscalerowl.com"),
  openGraph: {
    title: "HyperScalerOwl GreenCloud",
    description:
      "Discover the people-powered cloud delivering sustainable, distributed infrastructure for affiliates, customers, and investors.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HyperScalerOwl GreenCloud",
    description:
      "A modern landing experience for the GreenCloud revolution by HyperScalerOwl.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
