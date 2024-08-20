"use client";

import React, { useEffect, useState } from "react";

const konten = [
  {
    title: "RV EVOLUTIONS",
    description:
      "Liven up every moment with a revolutionary fashion twist, a collection of clothing designed to combine an active and dynamic lifestyle, and each design embodies the spirit of modernity and boldness.",
    order: "001",
  },
  {
    title: "THE DNA",
    description:
      "People who share the brand's DNA, who understand the essence of style and boldness in every design, appreciate innovation that differentiates them from others, and express their identity through fashion choices that are full of meaning and character.",
    order: "002",
  },
  {
    title: "LIFE",
    description:
      "A reflection of life's journey and the way we express ourselves through style. In every moment of life, the clothes we choose become an extension of who we are, representing courage, creativity and identity.",
    order: "003",
  },
];

const background = [
  "https://fastly.picsum.photos/id/808/1920/1080.jpg?hmac=F5GHMKc6mj7fz0ZmTCySRPYFVY8gV2VaoFz16-ONrug",

  "https://fastly.picsum.photos/id/888/1920/1080.jpg?hmac=gILdWiv5GfYCDYWFiZrEcK8TpR6X-Mm05tExxvr6YsY",

  "https://fastly.picsum.photos/id/365/1920/1080.jpg?hmac=zrSgapRP3QLjKtN1LEuOdTLlGG1lMaCK3N-rN6H_NZo",
];

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(konten.length - 1);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    setPrevIndex(currentIndex === 0 ? konten.length - 1 : currentIndex - 1);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % konten.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentIndex < konten.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const showPreview = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50 && currentIndex < konten.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (touchEndX - touchStartX > 50 && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center w-full min-h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${background[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="flex flex-col items-center justify-center">
          <div
            className="relative flex items-center justify-center w-full h-72 md:h-[360px] bg-cover bg-center overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`w-full h-full flex transition-transform duration-1000 ${
                currentIndex > prevIndex ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {konten.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 flex items-start justify-between px-6 md:px-20"
                >
                  <div className="p-2 text-left text-white max-w-xl">
                    <h1 className="font-mono font-bold">{image.title}</h1>
                    <p>•</p>
                    <p className="font-mono text-xs md:text-sm">
                      {image.description}
                    </p>
                  </div>

                  <div className="p-2 text-right text-white">
                    <p className="font-mono font-bold">{image.order}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 flex items-center justify-center gap-6 lg:gap-8 z-20">
              {konten.map((_, index) => (
                <div
                  key={index}
                  onClick={() => showPreview(index)}
                  className={`w-10 md:w-14 lg:w-20 h-[6px] cursor-pointer bg-white ${
                    currentIndex === index ? "opacity-100" : "opacity-50"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
