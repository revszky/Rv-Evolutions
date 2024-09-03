"use client";

import React, { useState } from "react";
import DetailItem from "../../../components/item/DetailItem";
import NavbarMobile from "../../../components/set/NavbarMobile";
import NavbarLarge from "../../../components/set/NavbarLarge";
import Footer from "../../../components/set/Footer";
import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";

interface DetailItemProps {
  params: {
    detail: string;
  };
}

const Page: React.FC<DetailItemProps> = ({ params }) => {
  const [typeItem, setTypeItem] = useState<string>("");

  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative">
        <div className="fixed w-full z-20 bg-white bg-opacity-80">
          <div className="hidden xl:block">
            <NavbarLarge
              classText="text-black font-mono font-bold"
              classTextID="text-white font-mono font-bold"
              classExtra="px-4 py-2 bg-black"
              picture="/logo/rvblack.png"
              classModalNotif="text-black"
            />
          </div>

          <div className="block xl:hidden">
            <NavbarMobile
              picture="/logo/rvblack.png"
              classText="text-black"
              classTextID="text-white"
              classInput="border-black"
              classInputLogo="border-black"
              classInputIconSearch="text-black"
              classTextDropdown="text-white"
              classBgBtn="bg-black"
              classBgSidebar="bg-white"
              classBgDropdown="bg-black border border-black"
              classModalNotif="text-black"
            />
          </div>
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-20 pb-10 md:pt-20 lg:pt-28">
          <div className="px-2 xl:px-10 pb-4 md:pb-16">
            <Link
              href="/our-collection"
              className="flex items-center font-mono font-bold"
            >
              <IconChevronLeft className="w-4 h-4" />
              BACK TO OUR COLLECTION
            </Link>
          </div>

          <div>
            <DetailItem detaiItem={params.detail} onTitleChange={setTypeItem} />
          </div>

          <div className="flex items-end justify-end px-2 xl:px-10 pt-4 md:pt-20">
            <p className="font-mono font-bold text-sm">&lsquo;RV24&lsquo;-25</p>
          </div>
        </section>
      </section>

      <section>
        <div>
          <Footer
            judul="RV Evolutions"
            place={`DETAIL • ${typeItem}`}
            classText="text-black"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
