"use client";

import React, { useEffect, useState } from "react";
import NavbarW from "../set/NavbarW";

const HomeBrand = () => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let threshold = 0;

      if (window.matchMedia("(min-width: 1024px)").matches) {
        threshold = 300;
      } else if (window.matchMedia("(min-width: 1280px)").matches) {
        threshold = 300;
      } else {
        threshold = 300;
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
            className="relative flex items-center justify-center w-full h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <div className="text-white flex flex-col md:flex-row md:gap-8 items-center md:items-start justify-center p-4">
                <div className="text-center pb-2 md:pb-0">
                  <h1 className="font-mono font-bold">THE BRAND</h1>
                </div>

                <div className="max-w-md text-center md:text-left pt-2 md:pt-0">
                  <p className="font-mono text-xs md:text-sm">
                    Combining innovation and style is an important part of the
                    lives of those with a love for bold and authentic design.
                  </p>
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
