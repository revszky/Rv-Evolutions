import React from "react";
import AllItems from "../../components/item/AllItems";
import HomeItem from "@/app/components/item/HomeItem";
import Footer from "@/app/components/set/Footer";

const page = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <section>
        <div>
          <HomeItem />
        </div>
      </section>

      <section className="flex-grow">
        <section className="py-14">
          <div>
            <AllItems />
          </div>
        </section>
      </section>

      <section className="w-full">
        <div className="px-2 md:px-6 lg:px-8 xl:px-10">
          <Footer
            judul="RV Evolutions"
            place="ALL ITEM"
            classText="text-black"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
