import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center my-4 md:my-40 xl:my-20 2xl:my-40">
      <div className="flex flex-col xl:flex-row items-center justify-center md:gap-10 xl:gap-20">
        <div className="relative flex items-center justify-center">
          <div className="w-60 h-60 lg:w-80 lg:h-80 xl:w-[400px] xl:h-[400px] border border-black rounded-full flex items-center justify-center">
            <div className="text-center font-kedua font-extrabold">
              <h1 className="text-6xl">404</h1>
            </div>
          </div>

          <div className="absolute top-10 left-0 xl:left-4">
            <div className="w-40 h-10 border-t border-black"></div>
          </div>

          <div className="absolute bottom-10 right-0 xl:right-4">
            <div className="w-40 h-10 border-b border-black"></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="max-w-md text-center xl:text-left">
            <h2 className="font-kedua text-4xl p-2">THIS PAGE IS BLANK</h2>
            <div className="p-4 relative flex items-center justify-center">
              <div className="p-2 border-l border-r xl:border-r-0 border-black">
                <p className="font-pertama">
                  as quiet and empty as this feeling, there is nothing here.
                </p>
              </div>

              <div className="absolute top-2 left-2">
                <div className="w-6 h-10 border-l border-t border-black"></div>
              </div>

              <div className="block xl:hidden absolute bottom-2 right-2">
                <div className="w-6 h-10 border-r border-b border-black"></div>
              </div>
            </div>
          </div>

          <div className="xl:self-start my-4 mx-2">
            <Link
              href="/"
              className="px-6 py-2 bg-black text-white font-ketiga font-extrabold"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>

      <div className="my-4">
        <div className="p-4 text-4xl">
          <h3 className="font-kedua font-extrabold">{"//////"}</h3>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
