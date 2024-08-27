import Link from "next/link";
import React from "react";
import Notification from "./Notification";

interface NavbarLargeProps {
  picture: string;
  classExtra: string;
  classText: string;
  classTextID: string;
  classModalNotif: string;
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
  classModalNotif,
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
        <Notification classModalNotif={classModalNotif} />

        <Link href="/authenticity" className={classExtra}>
          <h2 className={classTextID}>CHECK ID</h2>
        </Link>
      </div>
    </div>
  );
};

export default NavbarLarge;
