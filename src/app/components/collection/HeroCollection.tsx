import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const HeroCollection = () => {
  return (
    <div className="w-full px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center md:justify-between">
        <Link
          href="/"
          className="flex items-center font-mono font-bold self-start lg:self-auto py-8 lg:py-0"
        >
          <IconChevronLeft className="w-4 h-4" />
          BACK
        </Link>

        <div className="flex items-start gap-10">
          <div className="text-left max-w-[200px]">
            <h1 className="font-mono font-bold">
              STYLE TRANSFORMATION IN EACH COLLECTION
            </h1>
            <p className="font-mono text-sm">&lsquo;PAGE&lsquo;</p>
          </div>

          <div className="max-w-xl">
            <p className="font-mono text-sm">
              This collection is a symbol of the journey of evolution and
              revolution in the world of fashion. Each design carries a story of
              change and renewal, reflecting how the style continues to evolve
              without forgetting its authentic roots. Through an innovative
              blend of tradition and the latest trends.
            </p>
          </div>
        </div>

        <div className="self-end lg:self-auto px-0 lg:px-2 pt-8 lg:pt-0">
          <p className="font-mono font-bold text-sm">&lsquo;RV24&lsquo;-25</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCollection;
