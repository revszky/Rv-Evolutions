import React from "react";

const HeroBrand = () => {
  return (
    <div className="flex flex-col px-4 lg:px-8 2xl:px-32">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-6 lg:gap-10">
        <div className="flex items-start justify-center gap-10 lg:gap-6 xl:gap-10">
          <div className="text-left">
            <h1 className="font-mono font-bold">RV EVOLUTIONS</h1>
            <h2 className="font-mono font-bold">•</h2>
          </div>

          <div className="max-w-sm md:max-w-xl lg:max-w-md xl:max-w-xl">
            <p className="font-mono text-xs md:text-sm text-left">
              Our designs reflect a dynamic personality, where every detail is
              considered to provide a unique fashion experience. We believe that
              fashion is self-expression, and each item from our collection is
              created to give the wearer confidence. RV Evolutions not only
              keeps up with trends, but also sets new standards in the world of
              fashion.
            </p>
          </div>
        </div>

        <div className="max-w-sm md:md:max-w-xl lg:max-w-md xl:max-w-xl">
          <p className="font-mono text-xs md:text-sm text-center lg:text-left">
            Creating a DNA Trace in the World of Fashion, where people with DNA
            who are interested in the world of fashion can express their unique
            identity through authentic and innovative style. RV Evolutions is
            determined to present collections that not only follow trends, but
            also shape them, providing an unforgettable and relevant fashion
            experience for every individual.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBrand;
