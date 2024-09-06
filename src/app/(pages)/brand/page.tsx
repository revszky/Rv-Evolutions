import React from "react";

import HomeBrand from "../../components/brand/HomeBrand";
import Brand from "../../components/brand/Brand";
import GalleryBrand from "../../components/brand/GalleryBrand";
import BrandDNA from "../../components/brand/BrandDNA";
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
            <Brand />
          </div>
        </section>

        <section className="py-14">
          <div>
            <GalleryBrand />
          </div>
        </section>
      </section>

      <section className="pb-14">
        <div>
          <BrandDNA />
        </div>
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
