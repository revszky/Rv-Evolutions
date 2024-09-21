"use client";
import React, { useEffect, useState } from "react";
import HeroHistory from "../../components/history/HeroHistory";
import History from "../../components/history/History";
import NoteHistory from "../../components/history/NoteHistory";
import GalleryHistory from "../../components/history/GalleryHistory";
import HistoryDNA from "../../components/history/HistoryDNA";
import Footer from "../../components/set/Footer";
import Navbar from "@/app/components/set/Navbar";

const Page = () => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let threshold = 0;

      if (window.matchMedia("(min-width: 1024px)").matches) {
        threshold = 100;
      } else if (window.matchMedia("(min-width: 1280px)").matches) {
        threshold = 100;
      } else {
        threshold = 100;
      }

      setIsScrolledPast(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="min-h-screen flex flex-col">
      <section>
        <div
          className={`fixed z-20 w-full transition-colors duration-300 ${
            isScrolledPast ? "bg-black bg-opacity-80" : ""
          }`}
        >
          <Navbar
            picture="/logo/rvwhite.png"
            colorsText="text-white"
            colorsIcon="text-white"
          />
        </div>
      </section>

      <section>
        <div>
          <HeroHistory />
        </div>
      </section>

      <section>
        <History />
      </section>

      <section className="flex-grow bg-white">
        <section className="pt-14">
          <div>
            <NoteHistory />
          </div>
        </section>

        <section className="py-14">
          <div>
            <GalleryHistory />
          </div>
        </section>

        <section className="pb-14">
          <div>
            <HistoryDNA />
          </div>
        </section>
      </section>

      <section className="w-full bg-white">
        <div>
          <Footer
            judul="RV Evolutions"
            place="HISTORY"
            classText="text-black"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
