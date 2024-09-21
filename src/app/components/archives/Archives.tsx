import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Archives = () => {
  return (
    <div className="w-full px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center md:justify-between text-white">
        <Link
          href="/"
          className="flex items-center font-mono font-bold self-start lg:self-auto py-8 lg:py-0"
        >
          <IconChevronLeft className="w-4 h-4" />
          BACK
        </Link>

        <div className="flex flex-col items-center justify-center">
          <div className="p-2 text-center">
            <h1 className="font-mono font-bold">THE ARCHIVES</h1>
          </div>

          <div className="max-w-4xl text-center p-2">
            <p className="font-mono text-xs md:text-sm">
              Each collection is a story, showcasing evolution and innovation in
              every design. Inspiration shines behind every detail, depicting a
              journey of limitless creativity and expression.
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

export default Archives;
