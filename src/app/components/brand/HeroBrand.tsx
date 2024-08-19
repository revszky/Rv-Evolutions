import React from "react";

const HeroBrand = () => {
  return (
    <div className="flex flex-col px-4 lg:px-8 2xl:px-32">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-10">
        <div className="flex items-start justify-center gap-10 md:gap-6 xl:gap-10">
          <div className="text-left">
            <h1 className="font-mono font-bold">RV EVOLUTIONS</h1>
            <h2 className="font-mono font-bold">-</h2>
          </div>

          <div className="max-w-sm md:max-w-md xl:max-w-xl">
            <p className="font-mono text-xs md:text-sm text-left">
              Our designs reflect a dynamic personality, where every detail is
              considered to provide a unique fashion experience. We believe that
              fashion is self-expression, and every item from our collection is
              created to empower the wearer with confidence. Using high quality
              materials and the best production techniques, we ensure each
              product is durable and comfortable to use. RV Evolutions not only
              follows trends, but also sets new standards in the world of
              fashion.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center">
          <div className="pb-2">
            <h3 className="font-mono font-bold text-left">-DNA</h3>
          </div>

          <div className="max-w-sm md:md:max-w-md xl:max-w-xl pt-2">
            <p className="font-mono text-xs md:text-sm text-left">
              Creating a DNA Trace in the Fashion World, where every piece of
              clothing is a manifestation of innovation and style. We bring the
              fashion revolution to life with ever-evolving designs, combining
              boldness with creativity to create new trends. Discover styles
              that not only follow, but create new directions in each of our
              collections, making them a statement of boldness and progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBrand;
