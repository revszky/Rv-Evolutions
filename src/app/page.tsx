"use client";

import HomeHero from "./components/hero/HomeHero";
import NavbarLarge from "./components/set/NavbarLarge";
import NavbarMobile from "./components/set/NavbarMobile";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative">
        <div className="relative z-40">
          <div className="hidden xl:block">
            <NavbarLarge
              classText="text-white font-mono font-bold"
              classTextID="text-black font-mono font-bold"
              classExtra="px-4 py-2 bg-white"
              picture="/logo/rvwhite.png"
            />
          </div>

          <div className="block xl:hidden">
            <NavbarMobile
              picture="/logo/rvwhite.png"
              classText="text-white"
              classTextID="text-black"
              classInput="border-white text-white"
              classInputLogo="border-white"
              classInputIconSearch="text-white"
              classTextDropdown="text-black"
              classBgBtn="bg-white"
              classBgSidebar="bg-black"
              classBgDropdown="bg-white border border-black"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0">
          <HomeHero />
        </div>
      </section>
    </main>
  );
}
