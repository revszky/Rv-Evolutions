"use client";

import React, { useState } from "react";
import DetailItem from "../../../components/item/DetailItem";
import NavbarMobile from "../../../components/set/NavbarMobile";
import NavbarLarge from "../../../components/set/NavbarLarge";
import Footer from "../../../components/set/Footer";

interface DetailItemProps {
  params: {
    detail: string;
  };
}

const Page: React.FC<DetailItemProps> = ({ params }) => {
  const [title, setTitle] = useState<string>("");

  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative">
        <div className="fixed w-full z-20 bg-white">
          <div className="hidden xl:block">
            <NavbarLarge
              classText="text-black font-mono font-bold"
              classTextID="text-white font-mono font-bold"
              classExtra="px-4 py-2 bg-black"
              picture="/logo/rvblack.png"
            />
          </div>

          <div className="block xl:hidden">
            <NavbarMobile
              picture="/logo/rvblack.png"
              classText="text-black"
              classTextID="text-white"
              classTextDropdown="text-white"
              classBgBtn="bg-black"
              classBgSidebar="bg-white"
              classBgDropdown="bg-black border border-black"
            />
          </div>
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-24 md:pt-28">
          <div>
            <DetailItem detaiItem={params.detail} onTitleChange={setTitle} />
          </div>
        </section>
      </section>

      <section>
        <div className="px-2 md:px-6 lg:px-8 xl:px-10">
          <Footer
            judul="RV Evolutions"
            place={`DETAIL • ${title.toUpperCase()}`}
            classText="text-black"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
