import React from "react";
import Navbar from "../../components/set/Navbar";
import Archives from "../../components/archives/Archives";
import ArchivesMobile from "../../components/archives/ArchivesMobile";
import ArchivesMedium from "../../components/archives/ArchivesMedium";
import Footer from "@/app/components/set/Footer";

const page = () => {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <section className="relative">
        <div className="fixed w-full z-20 bg-black bg-opacity-80">
          <Navbar
            picture="/logo/rvwhite.png"
            colorsText="text-white"
            colorsIcon="text-white"
          />
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-12 md:pt-14 lg:pt-28">
          <div>
            <Archives />
          </div>
        </section>

        <section className="py-4">
          <div className="block md:hidden">
            <ArchivesMobile />
          </div>

          <div className="hidden md:block">
            <ArchivesMedium />
          </div>
        </section>
      </section>

      <section>
        <div>
          <Footer
            judul="RV Evolutions"
            place="ARCHIVES"
            classText="text-white"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
