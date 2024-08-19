import React from "react";
import HeroBrand from "@/app/components/brand/HeroBrand";
import CarouselBrand from "@/app/components/brand/CarouselBrand";
import Hero from "@/app/components/hero/Hero";

export const metadata = {
  title: "RV • Brand",
};

const page = () => {
  return (
    <main className="">
      <section>
        <div>
          <CarouselBrand />
        </div>
      </section>

      <section className="pt-[350px] lg:pt-[500px] xl:pt-[550px] pb-12">
        <div>
          <HeroBrand />
        </div>
      </section>
    </main>
  );
};

export default page;
