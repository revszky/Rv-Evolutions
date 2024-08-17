import React from "react";
import HeroBrand from "@/app/components/brand/HeroBrand";
import NavbarB from "@/app/components/set/NavbarB";

export const metadata = {
  title: "RV • Brand",
};

const page = () => {
  return (
    <main>
      <section>
        <div>
          <NavbarB />
        </div>
      </section>

      <section className="pt-10 md:pt-20">
        <div>
          <HeroBrand />
        </div>
      </section>
    </main>
  );
};

export default page;
