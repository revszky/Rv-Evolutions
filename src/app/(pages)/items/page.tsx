import React from "react";
import NavbarLarge from "../../components/set/NavbarLarge";
import NavbarMobile from "../../components/set/NavbarMobile";
import HeroItems from "../../components/items/HeroItems";
import AllItems from "../../components/items/AllItems";
import Footer from "../../components/set/Footer";

export const metadata = {
  title: "RV • COLLECTION",
  description: "A collection of evolutionary and revolutions.",
};

const page = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative">
        <div className="fixed w-full z-30 bg-white bg-opacity-80">
          <div className="hidden xl:block">
            <NavbarLarge
              classText="text-black font-mono font-bold"
              classTextID="text-white font-mono font-bold"
              classExtra="px-4 py-2 bg-black"
              picture="/logo/rvblack.png"
              classModalNotif="text-black"
            />
          </div>

          <div className="block xl:hidden">
            <NavbarMobile
              picture="/logo/rvblack.png"
              classText="text-black"
              classTextID="text-white"
              classInput="border-black"
              classInputLogo="border-black"
              classInputIconSearch="text-black"
              classTextDropdown="text-white"
              classBgBtn="bg-black"
              classBgSidebar="bg-white"
              classBgDropdown="bg-black border border-black"
              classModalNotif="text-black"
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
          <Footer
            judul="RV Evolutions"
            place="OUR COLLECTION"
            classText="text-black"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
