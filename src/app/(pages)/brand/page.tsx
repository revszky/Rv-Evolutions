import React from "react";
import HeroBrand from "@/app/components/brand/HeroBrand";
import CarouselBrand from "@/app/components/brand/CarouselBrand";
import GalleryBrand from "@/app/components/brand/GalleryBrand";

export const metadata = {
  title: "RV • Brand",
  description: "Creating a dna trace in the fashion world.",
};

const page = () => {
  return (
    <main>
      <section>
        <div>
          <CarouselBrand />
        </div>
      </section>

      <section className="pt-[345px] lg:pt-[500px] xl:pt-[460px]">
        <div>
          <HeroBrand />
        </div>
      </section>

      <section className="py-20">
        <div>
          <GalleryBrand />
        </div>
      </section>
    </main>
  );
};

export default page;
