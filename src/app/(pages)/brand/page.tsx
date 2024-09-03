import React from "react";
import HeroBrand from "../../components/brand/HeroBrand";
import GalleryBrand from "../../components/brand/GalleryBrand";
import HomeBrand from "../../components/brand/HomeBrand";
import Footer from "../../components/set/Footer";

export const metadata = {
  title: "RV • BRAND",
  description: "Creating a dna trace in the fashion world.",
};

const page = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <section>
        <div>
          <HomeBrand />
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-14">
          <div>
            <HeroBrand />
          </div>
        </section>

        <section className="py-14">
          <div>
            <GalleryBrand />
          </div>
        </section>
      </section>

      <section className="w-full">
        <div>
          <Footer judul="RV Evolutions" place="BRAND" classText="text-black" />
        </div>
      </section>
    </main>
  );
};

export default page;
