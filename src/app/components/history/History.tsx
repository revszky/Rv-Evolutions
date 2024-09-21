import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const History = () => {
  return (
    <div className="w-full px-4 h-96 flex items-center justify-center">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center md:justify-between">
        <Link
          href="/"
          className="flex items-center font-mono font-bold text-white self-start lg:self-auto py-8 lg:py-0"
        >
          <IconChevronLeft className="w-4 h-4" />
          BACK
        </Link>

        <div className="flex items-start gap-10">
          <div className="text-left text-white">
            <h1 className="font-mono font-bold">HISTORY OF RV</h1>
            <p className="font-mono text-sm">&lsquo;PAGE&lsquo;</p>
          </div>

          <div className="text-white max-w-[160px] md:max-w-md">
            <p className="text-left font-mono text-sm">
              Creating DNA in the world of fashion, combining dynamic and
              innovative designs to express each individual&lsquo;s unique
              identity.
            </p>
          </div>
        </div>

        <div className="text-white self-end lg:self-auto px-0 lg:px-2 pt-8 lg:pt-0">
          <p className="font-mono font-bold text-sm">&lsquo;RV24&lsquo;-25</p>
        </div>
      </div>
    </div>
  );
};

export default History;
