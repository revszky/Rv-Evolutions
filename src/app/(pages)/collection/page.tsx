import HeroCollection from "@/app/components/collection/HeroCollection";
import NavbarB from "@/app/components/set/NavbarB";
import React from "react";

export const metadata = {
  title: "RV • Collection",
};

const page = () => {
  return (
    <main>
      <section>
        <div>
          <NavbarB />
        </div>
      </section>

      <section>
        <div>
          <HeroCollection />
        </div>
      </section>
    </main>
  );
};

export default page;
