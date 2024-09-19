"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Notification from "./Notification";

interface NavbarProps {
  picture: string;
  colorsText: string;
  colorsIcon: string;
}

const Navbar: React.FC<NavbarProps> = ({ picture, colorsText, colorsIcon }) => {
  const [openBrand, setBrand] = useState(false);
  const [openItems, setItems] = useState(false);
  const [openMenu, setMenu] = useState(false);
  const [animationMenu, setAnimationMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuBrand = [
    {
      judul: "HISTORY OF RV",
      halaman: "/history-of-rv",
    },
    {
      judul: "GALLERY ARCHIVES",
      halaman: "/gallery-archives",
    },
    {
      judul: "STORIES",
      halaman: "/stories",
    },
    {
      judul: "ITEM AUTHENTICITY",
      halaman: "/authenticity",
    },
  ];

  const menuItems = [
    {
      judul: "ALL OTHER ITEMS",
      halaman: "/",
    },
    {
      judul: "PLAIN & T-SHIRTS",
      halaman: "/brand",
    },
    {
      judul: "HOODIE & JACKET",
      halaman: "/items",
    },

    {
      judul: "SHORTS & TROUSERS",
      halaman: "/brand",
    },
  ];

  const openModalNotif = () => {
    closeMenuClick();
    closeBrandMenu();
    closeItemsMenu();
  };

  const openMenuClick = () => {
    setMenu(!openMenu);
    setAnimationMenu(!animationMenu);
    setBrand(false);
    setItems(false);
  };

  const openBrandMenu = () => {
    setBrand(!openBrand);
    setMenu(false);
    setAnimationMenu(false);
    setItems(false);
  };

  const openItemsMenu = () => {
    setItems(!openItems);
    setMenu(false);
    setAnimationMenu(false);
    setBrand(false);
  };

  const closeMenuClick = () => {
    setMenu(false);
    setAnimationMenu(false);
  };

  const closeBrandMenu = () => {
    setBrand(false);
  };

  const closeItemsMenu = () => {
    setItems(false);
  };

  useEffect(() => {
    const mengubahUkuran = () => {
      if (window.innerWidth > 768 && (openMenu || openBrand || openItems)) {
        closeMenuClick();
        closeBrandMenu();
        closeItemsMenu();
      }
    };

    const klikEsc = (klik: { keyCode: number }) => {
      if (klik.keyCode === 27 && (openMenu || openBrand || openItems)) {
        closeMenuClick();
        closeBrandMenu();
        closeItemsMenu();
      }
    };

    window.addEventListener("resize", mengubahUkuran);
    document.addEventListener("keydown", klikEsc);

    return () => {
      window.removeEventListener("resize", mengubahUkuran);
      document.removeEventListener("keydown", klikEsc);
    };
  }, [openMenu, openBrand, openItems]);

  const dropdownMenu = `fixed flex flex-col bg-white items-center justify-center top-0 left-0 w-full h-[500px] p-2 transform transition-transform duration-700 ease-in-out -z-10 ${
    openMenu ? "translate-y-0" : "-translate-y-full"
  }`;

  const dropdownBrand = `fixed flex flex-col bg-white items-center justify-center top-0 left-0 w-full h-96 xl:h-[500px] p-4 transform transition-transform duration-700 ease-in-out -z-10 ${
    openBrand ? "translate-y-0" : "-translate-y-full"
  }`;

  const dropdownItems = `fixed flex flex-col bg-white items-center justify-center top-0 left-0 w-full h-96 xl:h-[500px] p-4 transform transition-transform duration-700 ease-in-out -z-10 ${
    openItems ? "translate-y-0" : "-translate-y-full"
  }`;
  return (
    <header className="sticky top-0 left-0 right-0 z-10">
      <div className="relative flex items-start justify-between p-4">
        <Link
          href="/"
          onClick={() => {
            closeMenuClick();
            closeBrandMenu();
            closeItemsMenu();
          }}
          className="absolute top-[8px] left-1/2 transform -translate-x-1/2"
        >
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <img
              src="/logo/rvblack.png"
              alt="Rv"
              className={`absolute m-[6px] transition-opacity duration-700 transform ${
                openMenu || openBrand || openItems ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src={picture}
              alt="Rv"
              className={`absolute m-[6px] transition-opacity duration-700 transform ${
                openMenu || openBrand || openItems ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </Link>

        <div className="block md:hidden">
          <button
            onClick={openMenuClick}
            className={`transform ${
              animationMenu ? "rotate-180" : { colorsText }
            } transition duration-700`}
          >
            {openMenu ? (
              <IconX className="stroke-[2.2]" />
            ) : (
              <IconMenu2 className="stroke-[2.2]" />
            )}
          </button>
        </div>

        <div className="hidden md:block">
          <div className="flex items-start space-x-32">
            <button
              onClick={openBrandMenu}
              className={`font-mono font-bold transition-all duration-700 transform ${
                openMenu || openBrand || openItems ? "text-black" : colorsText
              }`}
            >
              BRAND
            </button>

            <button
              onClick={openItemsMenu}
              className={`font-mono font-bold transition-all duration-700 transform ${
                openMenu || openBrand || openItems ? "text-black" : colorsText
              }`}
            >
              LIFESTYLE
            </button>
          </div>
        </div>

        <div onClick={openModalNotif}>
          {openMenu || openBrand || openItems ? (
            <Notification classModalNotif="text-black" />
          ) : (
            <Notification classModalNotif={colorsIcon} />
          )}
        </div>
      </div>

      {(openMenu || openBrand || openItems) && (
        <div
          className="fixed inset-0 -z-50 bg-black bg-opacity-70"
          onClick={() => {
            closeBrandMenu();
            closeItemsMenu();
            closeMenuClick();
          }}
        />
      )}

      <div className={dropdownMenu}>
        <div className="w-full mt-8">
          <div className="w-full">
            <div className="flex flex-col items-start">
              <div className="pb-4">
                <div className="p-[2px]">
                  <p className="font-mono">WORLD OF RV</p>
                </div>

                <div className="p-[12px] flex flex-col items-start justify-center">
                  {menuBrand.map((menu, urutan) => (
                    <Link
                      key={urutan}
                      href={menu.halaman}
                      onClick={closeBrandMenu}
                      className="font-mono text-xs py-[6px]"
                    >
                      {menu.judul}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <div className="p-[2px]">
                  <p className="font-mono">LIFESTYLE &lsquo;SOON&lsquo;</p>
                </div>

                <div className="p-[12px] flex flex-col items-start justify-center">
                  {menuItems.map((menu, urutan) => (
                    <p
                      key={urutan}
                      onClick={closeBrandMenu}
                      className="font-mono text-xs py-[6px] text-gray-400"
                    >
                      {menu.judul}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={dropdownBrand}>
        <div className="w-full px-4 mt-8">
          <div className="w-full flex flex-col items-start">
            <div className="px-[2px] py-4 font-mono">
              <p className="text-[18px]">WORLD OF RV</p>
            </div>

            <div className="p-4 flex flex-col items-start justify-center">
              {menuBrand.map((menu, urutan) => (
                <Link
                  key={urutan}
                  href={menu.halaman}
                  onClick={closeBrandMenu}
                  className="py-2 hover:font-bold"
                >
                  <p className="font-mono text-sm">{menu.judul}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={dropdownItems}>
        <div className="w-full px-4 mt-8">
          <div className="w-full flex flex-col items-start">
            <div className="p-[2px] font-mono">
              <p className="text-[18px]">CATEGORY &lsquo;SOON&lsquo;</p>
            </div>

            <div className="p-4 flex flex-col items-start justify-center">
              {menuItems.map((menu, urutan) => (
                <p
                  key={urutan}
                  onClick={closeBrandMenu}
                  className="font-mono text-sm py-2 text-gray-400"
                >
                  {menu.judul}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
