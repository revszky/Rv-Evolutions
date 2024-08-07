import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="text-center text-6xl">
          <p className="font-glitch">....</p>
        </div>

        <div className="text-center">
          <p className="font-mono">
            The page you are looking for does not exist,
          </p>
          <p className="font-mono">or may be protected.</p>
        </div>

        <Link
          href="/"
          className="relative flex items-center justify-center m-6"
        >
          <p className="relative text-white font-mono">Go Home</p>
          <p className="absolute -top-14 -left-4 font-glitch text-9xl -z-10">
            -
          </p>
          <p className="absolute -top-14 -right-4 font-glitch text-9xl -z-10">
            -
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
