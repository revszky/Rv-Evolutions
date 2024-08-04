import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

interface MenuNavProps {
  pilihMenu: () => void;
}

const MenuVertical = ({ pilihMenu }: MenuNavProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const mengaturMenuKlik = () => {
    pilihMenu();
  };

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
      judul: "BRAND",
      halaman: "#",
    },
    {
      judul: "COLLECTION",
      halaman: "#",
    },
    {
      judul: "NEW",
      halaman: "#",
    },
  ];

  return (
    <div className="w-full flex items-start justify-between gap-32">
      <div className="flex flex-col items-start justify-center">
        {urutanMenu.map((menu, urutan) => (
          <Link
            key={urutan}
            href={menu.halaman}
            onClick={mengaturMenuKlik}
            className="font-mono py-2"
          >
            {menu.judul}
          </Link>
        ))}
      </div>

      <div className="relative">
        <button
          ref={buttonRef}
          onClick={toggleDropdown}
          className="px-2 py-1.5 text-xs font-mono bg-black text-white"
        >
          CHECK ID
        </button>

        <div
          ref={dropdownRef}
          className={`absolute mt-2 -right-2 w-[230px] bg-white border border-black transform transition-all duration-700 ease-in-out ${
            dropdownVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="p-2">
            <p className="text-center font-mono text-xs">
              ID tags ensure product authenticity by checking unique codes,
              check your ID
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuVertical;
