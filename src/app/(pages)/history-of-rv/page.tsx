import React from "react";
import HeroHistory from "../../components/history-of-rv/HeroHistory";
import History from "../../components/history-of-rv/History";
import GalleryHistory from "../../components/history-of-rv/GalleryHistory";
import HistoryDNA from "../../components/history-of-rv/HistoryDNA";
import Footer from "../../components/set/Footer";

const page = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <section>
        <div>
          <HeroHistory />
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-14">
          <div>
            <History />
          </div>
        </section>

        <section className="py-14">
          <div>
            <GalleryHistory />
          </div>
        </section>
      </section>

      <section className="pb-14">
        <div>
          <HistoryDNA />
        </div>
      </section>

      <section className="w-full">
        <div>
          <Footer judul="RV Evolutions" place="BRAND" classText="text-black" />
        </div>
      </section>
    </main>
  );
};

export default page;
