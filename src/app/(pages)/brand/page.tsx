import React from "react";
import HeroBrand from "@/app/components/brand/HeroBrand";
import NavbarB from "@/app/components/set/NavbarB";
import CarouselBrand from "@/app/components/brand/CarouselBrand";

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

      <section className="pt-96 lg:pt-[500px]">
        <div>
          <HeroBrand />
        </div>
      </section>
    </main>
  );
};

export default page;
