import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Bebas_Neue as BebasNeue } from "next/font/google";
import { Providers } from "@/components/theme/providers";
import Navbar from "@/components/header/Navbar";
import Footer from "../components/footerDesign/Footer";

const bebasNeue = BebasNeue({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smiliy-Talk",
  description: "talk to the image with smiliy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image.png" />
      </head>
      <body className={bebasNeue.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex items-center justify-center">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
