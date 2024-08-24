"use client";

import React, { useEffect, useState } from "react";
import NavbarMobile from "../set/NavbarMobile";
import NavbarLarge from "../set/NavbarLarge";
import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";

const HomeItem = () => {
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
          <div className="hidden xl:block">
            <NavbarLarge
              classText="text-white font-mono font-bold"
              classTextID="text-black font-mono font-bold"
              classExtra="px-4 py-2 bg-white"
              picture="/logo/rvwhite.png"
            />
          </div>

          <div className="block xl:hidden">
            <NavbarMobile
              picture="/logo/rvwhite.png"
              classText="text-white"
              classTextID="text-black"
              classTextDropdown="text-black"
              classBgBtn="bg-white"
              classBgSidebar="bg-black"
              classBgDropdown="bg-white border border-black"
            />
          </div>
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
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="absolute w-full px-4">
              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center md:justify-between">
                <Link
                  href="/"
                  className="flex items-center font-mono font-bold text-white self-start lg:self-auto py-8 lg:py-0"
                >
                  <IconChevronLeft className="w-4 h-4" />
                  BACK
                </Link>

                <div className="flex items-start gap-10">
                  <div className="text-left text-white">
                    <h1 className="font-mono font-bold">ALL ITEM</h1>
                    <p className="font-mono text-sm">&lsquo;PAGE&lsquo;</p>
                  </div>

                  <div className="text-white max-w-[160px] md:max-w-md">
                    <p className="text-left font-mono text-sm">
                      Explore all our products designed with attention to detail
                      and quality. Find items that suit your personality here.
                    </p>
                  </div>
                </div>

                <div className="text-white self-end lg:self-auto px-0 lg:px-2 pt-8 lg:pt-0">
                  <p className="font-mono font-bold text-sm">
                    &lsquo;RV24&lsquo;-25
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

export default HomeItem;