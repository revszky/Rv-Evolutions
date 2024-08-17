import React from "react";

const HeroBrand = () => {
  return (
    <div className="flex items-start justify-center">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-16 xl:gap-24 px-4">
        <div className="flex flex-col items-start justify-center">
          <div className="pb-2">
            <h1 className="font-mono font-bold">RV EVOLUTIONS</h1>

            <p className="font-mono font-bold">-</p>
          </div>

          <div className="max-w-xl">
            <p className="font-mono text-xs md:text-sm">
              Bringing innovation and style into every design, creating a
              balance between modern aesthetics and maximum comfort. Each
              product is designed to revolutionize fashion trends, combining
              timeless elegance with a bold touch of evolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBrand;
