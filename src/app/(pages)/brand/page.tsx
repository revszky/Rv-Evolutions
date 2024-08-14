import React from "react";
import HeroBrand from "@/app/components/brand/HeroBrand";
import Carousel from "@/app/components/brand/Carousel";

export const metadata = {
  title: "RV • Brand",
};

const page = () => {
  return (
    <main>
      <section>
        <div>
          <HeroBrand />
        </div>
      </section>
    </main>
  );
};

export default page;
