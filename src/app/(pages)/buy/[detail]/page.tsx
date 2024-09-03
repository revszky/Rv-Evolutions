import React from "react";
import NavbarMobile from "../../../components/set/NavbarMobile";
import NavbarLarge from "../../../components/set/NavbarLarge";
import DetailBuy from "../../../components/item/DetailBuy";
import Footer from "../../../components/set/Footer";

interface DetailBuyProps {
  params: {
    detail: string;
  };
}

const Page: React.FC<DetailBuyProps> = ({ params }) => {
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
          <div>
            <DetailBuy detaiBuy={params.detail} />
          </div>
        </section>
      </section>

      <section>
        <div>
          <Footer
            judul="RV Evolutions"
            place="DETAIL • PURCHASE"
            classText="text-black"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
