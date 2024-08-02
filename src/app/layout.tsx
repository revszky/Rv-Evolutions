import type { Metadata } from "next";
import "./globals.css";

interface CustomMetadata extends Metadata {
  image?: string;
}

export const metadata: CustomMetadata = {
  title: "KYRIZKYP - Creativity Everything",
  description:
    "Introducing me Rizky Putra, a Front-End Web Developer, specialist and precision in creating websites or what is usually called landing pages.",
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
