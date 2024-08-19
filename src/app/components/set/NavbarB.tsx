"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IconMenu2, IconSearch, IconX } from "@tabler/icons-react";
import SearchVerticalB from "../search/SearchVerticalB";
import MenuVerticalB from "./MenuVerticalB";
import MenuHorizontalB from "./MenuHorizontalB";

const NavbarB = () => {
  const [bukaMenu, mengaturBukaMenu] = useState(false);
  const [animasiPutar, mengaturAnimasiPutar] = useState(false);
  const [openSearchMenu, setOpenSearchMenu] = useState(false);

  const openMenu = () => {
    mengaturBukaMenu(!bukaMenu);
    setOpenSearchMenu(false);
    mengaturAnimasiPutar(!animasiPutar);
  };

  const openMenuID = () => {
    setOpenSearchMenu(!openSearchMenu);
    mengaturBukaMenu(false);
    mengaturAnimasiPutar(false);
  };

  const closeMenuID = () => {
    setOpenSearchMenu(false);
  };

  const closeMenu = () => {
    setOpenSearchMenu(false);
    mengaturBukaMenu(false);
    mengaturAnimasiPutar(false);
  };

  useEffect(() => {
    const mengubahUkuran = () => {
      if (window.innerWidth > 768 && (bukaMenu || openSearchMenu)) {
        closeMenu();
        closeMenuID();
      }
    };

    const klikEsc = (klik: { keyCode: number }) => {
      if (klik.keyCode === 27 && (bukaMenu || openSearchMenu)) {
        closeMenu();
        closeMenuID();
      }
    };

    window.addEventListener("resize", mengubahUkuran);
    document.addEventListener("keydown", klikEsc);

    return () => {
      window.removeEventListener("resize", mengubahUkuran);
      document.removeEventListener("keydown", klikEsc);
    };
  }, [bukaMenu, openSearchMenu]);

  const sidebarClass = `fixed flex flex-col items-center justify-center top-0 left-0 w-full h-52 bg-white p-4 transform transition-transform duration-700 ease-in-out -z-10 ${
    bukaMenu ? "translate-y-0" : "-translate-y-full"
  }`;

  const sidebarID = `fixed flex justify-center top-0 left-0 w-full h-52 bg-white p-4 transform transition-transform duration-700 ease-in-out -z-10 ${
    openSearchMenu ? "translate-y-0" : "-translate-y-full"
  }`;

  return (
    <header className="sticky top-0 left-0 right-0 z-10">
      <div className="hidden xl:block">
        <MenuHorizontalB />
      </div>

      <div className="block xl:hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-white">
          <button onClick={openMenuID}>
            <div className="flex items-center justify-center relative">
              <div>
                <h1 className="font-mono font-bold text-xl">ID</h1>
              </div>

              <div className="absolute -bottom-[2px] -right-[10px]">
                <IconSearch className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          </button>

          <Link href="/" onClick={closeMenu}>
            <img src="/logo/rvblack.png" alt="Rv" className="w-12 m-[6px]" />
          </Link>

          <button
            onClick={openMenu}
            className={`transform ${
              animasiPutar ? "rotate-180" : ""
            } transition duration-300`}
          >
            {bukaMenu ? (
              <IconX className="stroke-[2.5]" />
            ) : (
              <IconMenu2 className="stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>

      {(bukaMenu || openSearchMenu) && (
        <div
          className="fixed inset-0 -z-50 bg-black bg-opacity-70"
          onClick={() => {
            closeMenu();
            closeMenuID();
          }}
        />
      )}

      <div className={sidebarClass}>
        <div className="w-full md:px-4 mt-8">
          <MenuVerticalB pilihMenu={closeMenu} />
        </div>
      </div>

      <div className={sidebarID}>
        <div className="my-10">
          <div className="py-2">
            <p className="font-mono text-center text-xs">
              Enter the 9-digit RV code in the label tag column below without
              using the hyphen &quot;-&quot;.
            </p>
          </div>

          <div className="py-2">
            <SearchVerticalB isOpen={openSearchMenu} onClose={closeMenuID} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarB;
