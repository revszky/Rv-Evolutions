import React from "react";
import HeroBrand from "@/app/components/brand/HeroBrand";
import Carousel from "@/app/components/brand/Carousel";

export const metadata = {
  title: "RV • Brand",
};

const page = () => {
  return (
    <main>
      <section className="pt-10 md:pt-20">
        <div>
          <HeroBrand />
        </div>
      </section>
    </main>
  );
};

export default page;
