import React from "react";

const HeroBrand = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10 md:gap-0 px-4 md:px-12 xl:px-16">
      <div className="flex flex-col items-start justify-center">
        <div className="pb-2">
          <h1 className="font-mono font-bold">RV EVOLUTIONS</h1>
        </div>

        <div className="max-w-sm md:max-w-md xl:max-w-xl pt-2">
          <p className="font-mono text-xs md:text-sm">
            Bringing innovation and style into every design, creating a balance
            between modern aesthetics and maximum comfort. Each product is
            designed to revolutionize fashion trends, combining timeless
            elegance with a bold touch of evolution.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <div className="pb-2">
          <h1 className="font-mono font-bold">DNA-813</h1>
        </div>

        <div className="max-w-sm md:md:max-w-md xl:max-w-xl pt-2">
          <p className="font-mono text-xs md:text-sm">
            Creating a DNA Trace in the Fashion World, where every piece of
            clothing is a manifestation of innovation and style. We bring the
            fashion revolution to life with ever-evolving designs, combining
            boldness with creativity to create new trends. Discover styles that
            not only follow, but create new directions in each of our
            collections, making them a statement of boldness and progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBrand;
