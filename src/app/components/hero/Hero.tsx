import React from "react";

const Hero = () => {
  const background =
    "https://fastly.picsum.photos/id/851/1920/1080.jpg?hmac=8dpXaXykD3QOXMLOFPAMyWGveKGA1pbxbw1PxSZgaX0";
  return (
    <div
      className="relative flex items-center justify-center w-full h-80 md:h-96 lg:h-[460px] xl:h-[500px] bg-cover bg-center -z-20"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black flex flex-col items-center md:items-start justify-center">
        <div className="max-w-2xl text-center md:text-left px-14">
          <p className="font-mono text-white text-xs md:text-sm">
            <span className="text-lg md:text-xl">RV EVOLUTIONS</span> • liven up
            every moment with a revolutionary fashion twist. The clothing
            collection is designed to blend with an active and dynamic
            lifestyle, from t-shirts that provide everyday comfort to hoodies
            that exude elegance with every step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
