import React from "react";

const HeroCollection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-start justify-center gap-4  md:gap-20 xl:gap-24 px-4">
        <div className="text-left">
          <h1 className="font-mono font-bold">
            STYLE TRANSFORMATION IN EACH COLLECTION
          </h1>
          <p className="font-mono text-sm">&lsquo;PAGE&lsquo;</p>
        </div>

        <div className="max-w-xl">
          <p className="font-mono text-sm">
            This collection is a symbol of the journey of evolution and
            revolution in the world of fashion. Each design carries a story of
            change and renewal, reflecting how the style continues to evolve
            without forgetting its authentic roots. Through an innovative blend
            of tradition and the latest trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCollection;
