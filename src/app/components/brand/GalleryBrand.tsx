import React from "react";

const GalleryBrand = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="w-36 flex items-center justify-center order-1 md:order-2">
          <div className="p-2 text-center">
            <h1 className="font-mono font-bold">RV</h1>
            <p className="font-mono text-xs md:text-sm">- 001</p>
          </div>
        </div>

        <div className="w-36 md:w-40 lg:w-52 h-60 lg:h-80 bg-black order-2 md:order-1">
          <img src="" alt="RV" className="w-full h-full object-cover" />
        </div>

        <div className="w-36 md:w-40 lg:w-52 h-60 lg:h-80 bg-black order-2 md:order-3">
          <img src="" alt="DNA" className="w-full h-full object-cover" />
        </div>

        <div className="w-36 flex items-center justify-center order-3 md:order-4">
          <div className="p-2 text-center">
            <h2 className="font-mono font-bold">DNA</h2>
            <p className="font-mono text-xs md:text-sm">- 002</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryBrand;
