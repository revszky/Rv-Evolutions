import React from "react";

const Hero = () => {
  const background =
    "https://fastly.picsum.photos/id/851/1920/1080.jpg?hmac=8dpXaXykD3QOXMLOFPAMyWGveKGA1pbxbw1PxSZgaX0";
  return (
    <div
      className="relative flex items-center justify-center w-full h-60 lg:h-[460px] xl:h-[500px] bg-cover bg-center -z-20"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black flex flex-col items-center md:items-start justify-center">
        <div className="p-2">
          <h1 className="font-mono text-white">ASDF</h1>
        </div>

        <div className="max-w-xl text-center md:text-left p-2">
          <p className="font-mono text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
            incidunt velit eos explicabo adipisci.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
