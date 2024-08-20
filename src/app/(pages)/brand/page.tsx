import React from "react";
import HeroBrand from "@/app/components/brand/HeroBrand";
import GalleryBrand from "@/app/components/brand/GalleryBrand";
import HomeBrand from "@/app/components/brand/HomeBrand";

export const metadata = {
  title: "RV • BRAND",
  description: "Creating a dna trace in the fashion world.",
};

const page = () => {
  return (
    <main>
      <section>
        <div>
          <HomeBrand />
        </div>
      </section>

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
    </main>
  );
};

export default page;
