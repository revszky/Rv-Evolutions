import HeroCollection from "@/app/components/collection/HeroCollection";
import NavbarB from "@/app/components/set/NavbarB";
import React from "react";

export const metadata = {
  title: "RV • COLLECTION",
  description: "A collection of evolutionary and revolutions.",
};

const page = () => {
  return (
    <main>
      <section className="relative">
        <div className="fixed w-full">
          <NavbarB />
        </div>
      </section>

      <section className="pt-24 md:pt-28">
        <div>
          <HeroCollection />
        </div>
      </section>
    </main>
  );
};

export default page;
