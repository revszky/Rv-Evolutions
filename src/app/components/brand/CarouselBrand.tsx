"use client";
import React, { useState, useEffect } from "react";

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
    <div className="flex flex-col items-center justify-center">
      <div className="w-full md:w-96 lg:w-[500px] h-36 md:h-56 flex items-center justify-center overflow-hidden">
        <div
          className={`w-full h-full flex transition-transform duration-1000 ${
            currentIndex > prevIndex ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 px-2">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
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
  );
};

export default CarouselBrand;
