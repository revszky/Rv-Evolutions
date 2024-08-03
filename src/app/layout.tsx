import type { Metadata } from "next";
import "./globals.css";

interface CustomMetadata extends Metadata {
  image?: string;
}

export const metadata: CustomMetadata = {
  title: "RV • Evolutions",
  description: "",
  image: "/logo/rv-evolutions.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/rv-evolutions.png" sizes="any" />
        <meta property="og:image" content={metadata.image} />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
