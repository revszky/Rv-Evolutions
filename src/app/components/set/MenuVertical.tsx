import Link from "next/link";
import React from "react";

interface MenuNavProps {
  pilihMenu: () => void;
}

const MenuVertical = ({ pilihMenu }: MenuNavProps) => {
  const mengaturMenuKlik = () => {
    pilihMenu();
  };

  const urutanMenu = [
    {
      tag: "/ Introduction",
      judul: "COLLECTION",
      halaman: "/about-me",
    },

    {
      tag: "/ Notes",
      judul: "BRAND",
      halaman: "/blogs",
    },

    {
      tag: "/ Snapshot",
      judul: "GALLERY",
      halaman: "/gallery",
    },

    {
      tag: "/ Code art",
      judul: "ARTWORK",
      halaman: "/artwork",
    },
  ];

  return (
    <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center gap-4">
      {urutanMenu.map((menu, urutan) => (
        <Link
          key={urutan}
          href={menu.halaman}
          onClick={mengaturMenuKlik}
          className=""
        >
          <div className="block md:hidden">
            <div>
              <p className="font-pertama text-sm text-gray-400">{menu.tag}</p>
            </div>
          </div>

          <h1 className="text-2xl md:text-lg font-kedua px-2 md:px-0">
            {menu.judul}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default MenuVertical;
