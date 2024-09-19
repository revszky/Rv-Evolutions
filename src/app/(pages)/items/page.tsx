import React from "react";
import Navbar from "../../components/set/Navbar";
import HeroItems from "../../components/items/HeroItems";
import AllItems from "../../components/items/AllItems";
import Footer from "../../components/set/Footer";

export const metadata = {
  title: "RV • ITEMS",
  description: "A collection of evolutionary and revolutions.",
};

const page = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative">
        <div className="fixed w-full z-40 bg-white bg-opacity-80">
          <div className="fixed w-full z-40">
            <Navbar
              picture="/logo/rvwhite.png"
              colorsText="text-white"
              colorsIcon="text-white"
            />
          </div>
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-12 md:pt-14 lg:pt-28">
          <div>
            <HeroItems />
          </div>
        </section>

        <section className="py-10 px-4">
          <div>
            <AllItems />
          </div>
        </section>
      </section>

      <section className="w-full">
        <div>
          <Footer judul="RV Evolutions" place="ITEMS" classText="text-black" />
        </div>
      </section>
    </main>
  );
};

export default page;
