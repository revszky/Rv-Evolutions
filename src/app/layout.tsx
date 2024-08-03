import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/set/Navbar";

export const metadata: Metadata = {
  title: "RV • Evolutions",
  description: "",
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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
