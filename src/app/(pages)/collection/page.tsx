import GalleryCollection from "@/app/components/collection/GalleryCollection";
import HeroCollection from "@/app/components/collection/HeroCollection";
import Footer from "@/app/components/set/Footer";
import NavbarB from "@/app/components/set/NavbarB";
import React from "react";

export const metadata = {
  title: "RV • COLLECTION",
  description: "A collection of evolutionary and revolutions.",
};

const page = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative">
        <div className="fixed w-full">
          <NavbarB />
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-24 md:pt-28">
          <div>
            <HeroCollection />
          </div>
        </section>

        <section className="pt-24 md:pt-28">
          <div>
            <GalleryCollection />
          </div>
        </section>
      </section>

      <section className="w-full">
        <div className="px-2 md:px-6 lg:px-8 xl:px-10">
          <Footer
            judul="RV Evolutions"
            place="COLLECTION"
            classText="text-black"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
