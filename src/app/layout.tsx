import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/set/Navbar";

export const metadata: Metadata = {
  title: "RV • Evolutions",
  description: "Liven up every moment with a revolutionary fashion twist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rv-fav.jpg" sizes="any" />
      </head>

      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
