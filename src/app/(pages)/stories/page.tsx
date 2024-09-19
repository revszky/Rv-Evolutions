import React from "react";
import Navbar from "../../components/set/Navbar";

const page = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative">
        <div className="fixed w-full z-20 bg-white bg-opacity-80">
          <Navbar
            picture="/logo/rvblack.png"
            colorsText="text-black"
            colorsIcon="text-black"
          />
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-32">
          <div className="font-mono text-center">
            <h1 className="text-xl">maintenance in progress</h1>
          </div>
        </section>
      </section>
    </main>
  );
};

export default page;
