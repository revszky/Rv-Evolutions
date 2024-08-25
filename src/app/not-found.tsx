import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-[360px] h-[360px] border border-black">
          <img
            src="/logo/rvblack.png"
            alt="Rv"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center text-6xl p-2">
          <p className="font-mono">....</p>
        </div>

        <div className="text-center">
          <p className="font-mono">
            The page you are looking for does not exist,
          </p>
          <p className="font-mono">or may be protected.</p>
        </div>

        <Link
          href="/"
          className="m-6 px-4 py-[6px] border border-black hover:bg-black text-black hover:text-white hover:duration-500"
        >
          <p className="font-mono font-bold text-lg">Go Home</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
