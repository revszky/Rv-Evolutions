import Link from "next/link";
import React from "react";

const menuItems = [
  { href: "/brand", label: "BRAND" },
  { href: "/collection", label: "COLLECTION" },
];

const additionalMenuItems = [
  {
    href: "/check",
    label: "CHECK ID",
    className: "px-4 py-2 bg-black text-white",
  },
  { href: "/new", label: "NEW" },
];

const MenuHorizontal = () => {
  return (
    <div className="relative flex items-center justify-between px-28 py-4">
      <div className="flex items-center justify-center gap-10">
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

      <div className="flex items-center justify-center gap-10">
        {additionalMenuItems.map((item, index) => (
          <Link key={index} href={item.href} className={item.className}>
            <h2 className="font-mono">{item.label}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuHorizontal;
