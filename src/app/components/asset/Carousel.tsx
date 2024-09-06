"use client";
import React, { useState, useEffect } from "react";

const images = [
  "https://fastly.picsum.photos/id/995/800/400.jpg?hmac=zCeFmrNGeRhpB4mnZhMnf8sxjRrLS_L-Yi7BUxDfVn0",
  "https://fastly.picsum.photos/id/476/800/400.jpg?hmac=l7CIXyHUHqULb35pJw4zvwVBC8oBm9b6RlxubJZytKE",
  "https://fastly.picsum.photos/id/929/800/400.jpg?hmac=3YWDs_hJ6hv6uXu_WYT9Xxnl1B3h8iDDbvdVnnBENg8",
  "https://fastly.picsum.photos/id/1078/800/400.jpg?hmac=p-8Snml3EvJCdYrX0OKdn919GA2XBOs2vtX8Nv5Vrok",
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);

  useEffect(() => {
    setPrevIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex]);

  const showPreview = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-full h-full flex transition-transform duration-1000 ${
            currentIndex > prevIndex ? "translate-x-0" : "translate-x-full"
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
      </div>

      <div className="absolute bottom-0 left-0 w-full flex overflow-x-scroll space-x-2 p-2 bg-gray-800 bg-opacity-50">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Preview ${index}`}
            className="w-24 h-12 object-cover cursor-pointer border-2 border-transparent hover:border-white"
            onClick={() => showPreview(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
