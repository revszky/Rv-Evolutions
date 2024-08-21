import React from "react";
import HeroBrand from "@/app/components/brand/HeroBrand";
import GalleryBrand from "@/app/components/brand/GalleryBrand";
import HomeBrand from "@/app/components/brand/HomeBrand";
import Footer from "@/app/components/set/Footer";

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
        <section className="py-14">
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
        <div className="px-2 md:px-6 lg:px-8 xl:px-10">
          <Footer judul="RV Evolutions" place="BRAND" classText="text-black" />
        </div>
      </section>
    </main>
  );
};

export default page;
