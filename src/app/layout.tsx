import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const space_grotesk = Space_Grotesk({
  variable: "--font-space_grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galvanite Clone | Digital Solutions",
  description: "Web, App, and AI Solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${space_grotesk.variable} antialiased bg-black text-foreground`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
