import React from "react";

const Hero = () => {
  const background =
    "https://fastly.picsum.photos/id/851/1920/1080.jpg?hmac=8dpXaXykD3QOXMLOFPAMyWGveKGA1pbxbw1PxSZgaX0";
  return (
    <div
      className="relative flex items-center justify-center w-full min-h-screen bg-cover bg-center -z-20"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
        <div className="max-w-2xl md:max-w-4xl text-center px-10 md:px-20">
          <p className="font-mono text-white text-xs md:text-base">
            Liven up every moment with a revolutionary fashion twist. The
            clothing collection is designed to combine an active and dynamic
            lifestyle. Each design is the embodiment of the spirit of modernity
            and boldness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
