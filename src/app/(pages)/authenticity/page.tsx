import React from "react";
import Authenticity from "../../components/authenticity/Authenticity";
import SearchPage from "../../components/search/SearchPage";
import Footer from "../../components/set/Footer";
import NavbarLarge from "../../components/set/NavbarLarge";
import NavbarMobile from "../../components/set/NavbarMobile";

export const metadata = {
  title: "RV • AUTHENTICITY",
  description: "Unique id code as a marker.",
};

const page = () => {
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
            />
          </div>
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-12 md:pt-28">
          <div>
            <Authenticity />
          </div>
        </section>

        <section className="py-10 px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-xl">
              <p className="font-mono text-sm text-center">
                Enter the 9-digit RV code in the label tag column below without
                using the hyphen &quot;-&quot;.
              </p>
            </div>

            <div className="py-4">
              <SearchPage />
            </div>

            <div className="max-w-2xl">
              <p className="font-mono text-sm text-center">
                We are committed to maintaining the safety and authenticity of
                each of our products. This verification system is part of our
                efforts to protect you from counterfeit products and ensure that
                you are getting genuine RV items that meet the highest quality
                standards.
              </p>
            </div>

            <div className="py-10">
              <img
                src="https://fastly.picsum.photos/id/509/500/250.jpg?hmac=w7iz-HMrmh4eorcs5Z6PhAcFlcQCC95-JyZDRXYBy54"
                alt="ID"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className="px-2 md:px-6 lg:px-8 xl:px-10">
          <Footer
            judul="RV Evolutions"
            place="AUTHENTICITY"
            classText="text-black"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
