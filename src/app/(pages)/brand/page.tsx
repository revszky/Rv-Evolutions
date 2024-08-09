import React from "react";
import HeroBrand from "@/app/components/brand/HeroBrand";

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
