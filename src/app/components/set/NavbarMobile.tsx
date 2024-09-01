"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IconEye, IconMenu2, IconSearch, IconX } from "@tabler/icons-react";
import SearchMobile from "../search/SearchMobile";
import Notification from "./Notification";

interface NavbarMobileProps {
  picture: string;
  classText: string;
  classTextID: string;
  classInput: string;
  classInputLogo: string;
  classInputIconSearch: string;
  classTextDropdown: string;
  classBgDropdown: string;
  classBgSidebar: string;
  classBgBtn: string;
  classModalNotif: string;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  picture,
  classText,
  classTextID,
  classInput,
  classInputLogo,
  classInputIconSearch,
  classTextDropdown,
  classBgSidebar,
  classBgDropdown,
  classBgBtn,
  classModalNotif,
}) => {
  const [bukaMenu, mengaturBukaMenu] = useState(false);
  const [animasiPutar, mengaturAnimasiPutar] = useState(false);
  const [animasiPutarID, mengaturAnimasiPutarID] = useState(false);
  const [openSearchMenu, setOpenSearchMenu] = useState(false);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const urutanMenu = [
    {
      judul: "HOME",
      halaman: "/",
    },
    {
      judul: "BRAND",
      halaman: "/brand",
    },
    {
      judul: "OUR COLLECTION",
      halaman: "/our-collection",
    },
  ];

  const openModalNotif = () => {
    closeMenu();
    closeMenuID();
  };

  const openMenu = () => {
    mengaturBukaMenu(!bukaMenu);
    setOpenSearchMenu(false);
    mengaturAnimasiPutar(!animasiPutar);
    mengaturAnimasiPutarID(false);
  };

  const openMenuID = () => {
    setOpenSearchMenu(!openSearchMenu);
    mengaturAnimasiPutarID(!animasiPutarID);
    mengaturBukaMenu(false);
    mengaturAnimasiPutar(false);
  };

  const closeMenuID = () => {
    setOpenSearchMenu(false);
    mengaturAnimasiPutarID(false);
  };

  const closeMenu = () => {
    setOpenSearchMenu(false);
    mengaturBukaMenu(false);
    mengaturAnimasiPutar(false);
    mengaturAnimasiPutarID(false);
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

  const sidebarClass = `fixed flex flex-col items-center justify-center top-0 left-0 w-full h-52 ${classBgSidebar} p-4 transform transition-transform duration-700 ease-in-out -z-10 ${
    bukaMenu ? "translate-y-0" : "-translate-y-full"
  }`;

  const sidebarID = `fixed flex justify-center top-0 left-0 w-full h-52 ${classBgSidebar} p-4 transform transition-transform duration-700 ease-in-out -z-10 ${
    openSearchMenu ? "translate-y-0" : "-translate-y-full"
  }`;

  return (
    <header className="sticky top-0 left-0 right-0 z-10">
      <div className="relative flex items-start justify-between p-4">
        <button
          onClick={openMenuID}
          className={`flex items-center justify-center relative ${classText}`}
        >
          <h1 className="font-mono font-bold text-xl">ID</h1>
          <div
            className={`absolute -bottom-[4px] -right-[18px] transform ${
              animasiPutarID ? "rotate-[360deg]" : ""
            } transition duration-500`}
          >
            {openSearchMenu ? (
              <IconEye className="w-5 h-5 stroke-[2.2]" />
            ) : (
              <IconSearch className="w-5 h-5 stroke-[2.2]" />
            )}
          </div>
        </button>

        <Link
          href="/"
          onClick={closeMenu}
          className="absolute top-[8px] left-1/2 transform -translate-x-1/2"
        >
          <img src={picture} alt="Rv" className="w-12 m-[6px]" />
        </Link>

        <div className="flex items-start gap-4">
          <div onClick={openModalNotif}>
            <Notification classModalNotif={classModalNotif} />
          </div>

          <button
            onClick={openMenu}
            className={`transform ${
              animasiPutar ? "rotate-180" : ""
            } transition duration-500 ${classText}`}
          >
            {bukaMenu ? (
              <IconX className="stroke-[2.2]" />
            ) : (
              <IconMenu2 className="stroke-[2.2]" />
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
          <div className="w-full flex items-start justify-between gap-32">
            <div className="flex flex-col items-start justify-center">
              {urutanMenu.map((menu, urutan) => (
                <Link
                  key={urutan}
                  href={menu.halaman}
                  onClick={closeMenu}
                  className={`font-mono font-bold text-sm py-2 ${classText}`}
                >
                  {menu.judul}
                </Link>
              ))}
            </div>

            <div className="relative">
              <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className={`px-2 py-1.5 text-xs md:text-sm font-mono font-bold ${classBgBtn} ${classTextID}`}
              >
                CHECK ID
              </button>

              <div
                ref={dropdownRef}
                className={`absolute mt-2 right-0 w-[230px] md:w-[360px] ${classBgDropdown} transform transition-all duration-500 ease-in-out ${
                  dropdownVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                <div className="p-2">
                  <p
                    className={`text-center font-mono text-xs md:text-sm ${classTextDropdown}`}
                  >
                    ID tag to ensure product authenticity, by checking the code
                    on the tag label.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={sidebarID}>
        <div className="my-10">
          <div className="py-2">
            <p className={`font-mono text-center text-xs ${classText}`}>
              Enter the 9-digit RV code in the label tag column below without
              using the hyphen &quot;-&quot;.
            </p>
          </div>

          <div className="py-2">
            <SearchMobile
              inputLogoClass={classInputLogo}
              inputIconSearchClass={classInputIconSearch}
              inputBorderClass={classInput}
              isOpen={openSearchMenu}
              onClose={closeMenuID}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarMobile;
