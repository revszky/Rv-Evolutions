"use client";

import React, { useEffect, useState } from "react";
import NavbarW from "../set/NavbarW";

const HomeBrand = () => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let threshold = 0;

      if (window.matchMedia("(min-width: 1024px)").matches) {
        threshold = 240;
      } else if (window.matchMedia("(min-width: 1280px)").matches) {
        threshold = 280;
      } else {
        threshold = 240;
      }

      setIsScrolledPast(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const background = [
    "https://fastly.picsum.photos/id/808/1920/1080.jpg?hmac=F5GHMKc6mj7fz0ZmTCySRPYFVY8gV2VaoFz16-ONrug",
  ];
  return (
    <div className="flex flex-col">
      <div className="relative">
        <div
          className={`fixed z-20 w-full transition-colors duration-300 ${
            isScrolledPast ? "bg-black bg-opacity-50" : ""
          }`}
        >
          <NavbarW />
        </div>

        <div>
          <div
            className="relative flex items-center justify-center w-full h-64 md:h-80 lg:h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end justify-center p-2 md:p-10 lg:p-16">
              <div className="flex items-start justify-center gap-8 md:gap-28 lg:gap-32">
                <div className="text-left text-white">
                  <h1 className="font-mono font-bold">THE BRAND</h1>
                  <p className="font-mono text-sm">&lsquo;PAGE&lsquo;</p>
                </div>

                <div className="p-2 text-white">
                  <p className="font-mono font-bold">/</p>
                </div>

                <div className="text-white">
                  <h2 className="font-mono font-bold text-left">INDEX</h2>
                  <div className="py-4 text-left">
                    <p className="font-mono text-sm">RV Evolutions</p>
                    <p className="font-mono text-sm">THE DNA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrand;
