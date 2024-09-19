"use client";

import Navbar from "./components/set/Navbar";
import HomeHero from "./components/hero/HomeHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative">
        <div className="fixed w-full z-40">
          <Navbar
            picture="/logo/rvwhite.png"
            colorsText="text-white"
            colorsIcon="text-white"
          />
        </div>

        <div className="absolute top-0 left-0 right-0">
          <HomeHero />
        </div>
      </section>
    </main>
  );
}
