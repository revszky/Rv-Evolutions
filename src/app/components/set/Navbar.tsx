"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Menu from "./MenuVertical";
import MenuHorizontal from "./MenuHorizontal";
import SearchMenu from "../search/SearchMenu";

const Navbar = () => {
  const [bukaMenu, mengaturBukaMenu] = useState(false);
  const [animasiPutar, mengaturAnimasiPutar] = useState(false);

  const toggleMenu = () => {
    mengaturBukaMenu(!bukaMenu);
    mengaturAnimasiPutar(!animasiPutar);
  };

  const closeMenu = () => {
    mengaturBukaMenu(false);
    mengaturAnimasiPutar(false);
  };

  useEffect(() => {
    const mengubahUkuran = () => {
      if (window.innerWidth > 768 && bukaMenu) {
        closeMenu();
      }
    };

    const klikEsc = (klik: { keyCode: number }) => {
      if (klik.keyCode === 27 && bukaMenu) {
        mengaturBukaMenu(false);
        mengaturAnimasiPutar(false);
      }
    };

    window.addEventListener("resize", mengubahUkuran);
    document.addEventListener("keydown", klikEsc);

    return () => {
      window.removeEventListener("resize", mengubahUkuran);
      document.addEventListener("keydown", klikEsc);
    };
  }, [bukaMenu]);

  const sidebarClass = `fixed flex flex-col items-center justify-center top-0 left-0 w-full h-52 bg-white p-4 transform transition-transform duration-700 ease-in-out -z-10${
    bukaMenu ? " translate-y-0" : " -translate-y-full"
  }`;

  return (
    <header className="sticky top-0 left-0 right-0">
      <div className="hidden xl:block">
        <MenuHorizontal />
      </div>

      <div className="block xl:hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-white">
          <SearchMenu />

          <Link href="/">
            <img src="/logo/rvblack.png" alt="Rv" className="w-12" />
          </Link>

          <button
            onClick={toggleMenu}
            className={`transform ${
              animasiPutar ? "rotate-180" : ""
            } transition duration-300`}
          >
            {bukaMenu ? <IconX /> : <IconMenu2 />}
          </button>
        </div>
      </div>

      {bukaMenu && (
        <div
          className="fixed inset-0 -z-50 bg-black bg-opacity-70"
          onClick={toggleMenu}
        />
      )}

      <div className={sidebarClass}>
        <div className="w-full md:px-4 mt-8">
          <Menu pilihMenu={closeMenu} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
