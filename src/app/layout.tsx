import type { Metadata } from "next";
import "./globals.css";

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

        <meta property="og:title" content="RV • Evolutions" />
        <meta
          property="og:description"
          content="Liven up every moment with a revolutionary fashion twist."
        />
        <meta property="og:image" content="/rv-fav.jpg" />
        <meta property="og:url" content="https://www.rvevolutions.com/" />
        <meta property="og:type" content="website" />
      </head>

      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
