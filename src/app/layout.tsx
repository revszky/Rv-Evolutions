import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RV • Evolutions",
  description: "Liven up every moment with a revolutionary fashion twist.",
  openGraph: {
    title: "RV • Evolutions",
    description: "Liven up every moment with a revolutionary fashion twist.",
    url: "https://www.rvevolutions.com/",
    type: "website",
    images: [
      {
        url: "/rv-fav.jpg",
        width: 800,
        height: 600,
        alt: "RV • Evolutions Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rv.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/rv.ico" />
      </head>

      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
