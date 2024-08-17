import Link from "next/link";
import React from "react";

const menuItems = [
  { href: "/brand", label: "BRAND" },
  { href: "/collection", label: "COLLECTION" },
  { href: "/new", label: "NEW", extraClass: "text-white" },
  {
    href: "/authenticity",
    label: "CHECK ID",
    extraClass: "px-4 py-2 bg-white text-black",
  },
];

const MenuHorizontalW = () => {
  return (
    <div className="relative flex items-center justify-between px-28 py-4">
      <div className="flex items-center justify-center gap-10">
        {menuItems.slice(0, 2).map((item, index) => (
          <Link key={index} href={item.href}>
            <h1 className="font-mono font-bold text-white">{item.label}</h1>
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="absolute top-[12px] left-1/2 transform -translate-x-1/2"
      >
        <img src="/logo/rvwhite.png" alt="Rv" className="w-[70px]" />
      </Link>

      <div className="flex items-center justify-center gap-10">
        {menuItems.slice(2).map((item, index) => (
          <Link key={index} href={item.href} className={item.extraClass}>
            <h2 className="font-mono font-bold">{item.label}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuHorizontalW;
