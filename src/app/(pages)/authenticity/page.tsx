import React from "react";
import Navbar from "../../components/set/Navbar";
import Authenticity from "../../components/authenticity/Authenticity";
import SearchPage from "../../components/search/SearchPage";
import Footer from "../../components/set/Footer";
import AuthenticityProtection from "../../components/authenticity/AuthenticityProtection";

export const metadata = {
  title: "RV • AUTHENTICITY",
  description: "Unique id code as a marker.",
};

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
        <section className="pt-12 md:pt-14 lg:pt-28">
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

            <div className="pt-4">
              <img
                src="https://fastly.picsum.photos/id/894/800/400.jpg?hmac=WwXq08kJHbrCjuZcjFyLCXViBRm-7gedR44Hk1HyykA"
                alt="ID"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-10 px-4">
          <div>
            <AuthenticityProtection />
          </div>
        </section>
      </section>

      <section>
        <div>
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
