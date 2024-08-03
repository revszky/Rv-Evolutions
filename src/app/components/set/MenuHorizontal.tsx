import Link from "next/link";
import React from "react";

const menuItems = [
  { href: "/brand", label: "BRAND" },
  { href: "/collection", label: "COLLECTION" },
  { href: "/check", label: "CHECK" },
];

const MenuHorizontal = () => {
  return (
    <div className="relative flex items-center justify-between px-10 py-4">
      <div className="flex items-center justify-center gap-4">
        {menuItems.slice(0, 2).map((item, index) => (
          <Link key={index} href={item.href}>
            <h1 className="font-mono">{item.label}</h1>
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="absolute top-2 left-1/2 transform -translate-x-1/2"
      >
        <img src="/logo/rvblack.png" alt="Rv" className="w-[70px]" />
      </Link>

      <div className="flex items-center justify-center gap-4">
        {menuItems.slice(2).map((item, index) => (
          <Link key={index} href={item.href}>
            <h1 className="font-mono">{item.label}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuHorizontal;
