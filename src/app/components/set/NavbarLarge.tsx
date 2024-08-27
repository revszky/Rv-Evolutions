import { IconNotification } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

interface NavbarLargeProps {
  picture: string;
  classExtra: string;
  classText: string;
  classTextID: string;
}

const menuItems = [
  { href: "/brand", label: "BRAND" },
  { href: "/our-collection", label: "OUR COLLECTION" },
];

const NavbarLarge: React.FC<NavbarLargeProps> = ({
  picture,
  classExtra,
  classText,
  classTextID,
}) => {
  return (
    <div className="relative flex items-center justify-between px-28 py-4">
      <div className="flex items-center justify-center gap-10">
        {menuItems.slice(0, 2).map((item, index) => (
          <Link key={index} href={item.href}>
            <h1 className={classText}>{item.label}</h1>
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="absolute top-[14px] left-1/2 transform -translate-x-1/2"
      >
        <img src={picture} alt="Rv" className="w-[70px]" />
      </Link>

      <div className="flex items-center justify-center gap-10">
        <button className={classText}>
          <IconNotification className="w-6 h-6 stroke-[2.4]" />
        </button>

        <Link href="/authenticity" className={classExtra}>
          <h2 className={classTextID}>CHECK ID</h2>
        </Link>
      </div>
    </div>
  );
};

export default NavbarLarge;
