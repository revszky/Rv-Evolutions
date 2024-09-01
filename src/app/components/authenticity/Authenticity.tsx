import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Authenticity = () => {
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

        <div className="flex items-start gap-10 xl:gap-32">
          <div className="text-left">
            <h1 className="font-mono font-bold">AUTHENTICITY</h1>
            <p className="font-mono text-sm">&lsquo;PAGE&lsquo;</p>
          </div>

          <div className="max-w-xl xl:max-w-2xl">
            <p className="font-mono text-sm">
              We understand how important the authenticity and exclusivity of
              each of our products is. Therefore, each of our clothing items
              comes with a unique serial number ensuring that you are getting a
              genuine product from RV. This serial number is not just
              identification, but also a guarantee that you are getting the
              quality and design that we have carefully designed.
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

export default Authenticity;
