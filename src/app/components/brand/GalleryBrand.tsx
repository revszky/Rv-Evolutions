"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React, { useState } from "react";

const images = [
  "https://fastly.picsum.photos/id/927/500/600.jpg?hmac=1iYKtgo4c_4MjiuR30GQA8t90N8Ul6ej8Z8Zeb7X6VA",

  "https://fastly.picsum.photos/id/642/500/600.jpg?hmac=wr7b4jLam-kuMQTs2XcDkQZrfr0tPi3ZTLrBUMd7iHQ",
];

const GalleryBrand: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div className="w-full px-4">
      <div className="block md:hidden">
        <div className="overflow-hidden">
          <div
            className={`flex  transition-transform duration-1000 ease-in-out`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full p-2">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-2 ${
              currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <IconChevronLeft className="stroke-[2.6]" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
            className={`p-2 ${
              currentIndex === images.length - 1
                ? "opacity-40 cursor-not-allowed"
                : ""
            }`}
          >
            <IconChevronRight className="stroke-[2.6]" />
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex items-center justify-center gap-2">
          {images.map((image, index) => (
            <div className="p-2" key={index}>
              <img
                key={index}
                src={image}
                alt={`Brand ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryBrand;
