"use client";
import React, { useState, useEffect } from "react";
import NavbarW from "../set/NavbarW";

const images = [
  "https://fastly.picsum.photos/id/995/800/400.jpg?hmac=zCeFmrNGeRhpB4mnZhMnf8sxjRrLS_L-Yi7BUxDfVn0",
  "https://fastly.picsum.photos/id/476/800/400.jpg?hmac=l7CIXyHUHqULb35pJw4zvwVBC8oBm9b6RlxubJZytKE",
  "https://fastly.picsum.photos/id/929/800/400.jpg?hmac=3YWDs_hJ6hv6uXu_WYT9Xxnl1B3h8iDDbvdVnnBENg8",
  "https://fastly.picsum.photos/id/1078/800/400.jpg?hmac=p-8Snml3EvJCdYrX0OKdn919GA2XBOs2vtX8Nv5Vrok",
];

const CarouselBrand: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);

  useEffect(() => {
    setPrevIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex]);

  const showPreview = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className="fixed z-20 w-full">
          <NavbarW />
        </div>

        <div className="absolute top-0 left-0 right-0">
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center w-full h-80 lg:h-[460px] xl:h-[500px] bg-cover bg-center overflow-hidden">
              <div
                className={`w-full h-full flex transition-transform duration-1000 ${
                  currentIndex > prevIndex
                    ? "translate-x-0"
                    : "translate-x-full"
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <img
                      src={image}
                      alt={`Slide ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            <div className="flex items-center justify-center">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Preview ${index}`}
                  className="w-[88px] md:w-24 lg:w-28 h-16 object-cover cursor-pointer p-2"
                  onClick={() => showPreview(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBrand;
