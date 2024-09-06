"use client";
import React, { useState } from "react";

const images = [
  "https://fastly.picsum.photos/id/995/800/400.jpg?hmac=zCeFmrNGeRhpB4mnZhMnf8sxjRrLS_L-Yi7BUxDfVn0",
  "https://fastly.picsum.photos/id/476/800/400.jpg?hmac=l7CIXyHUHqULb35pJw4zvwVBC8oBm9b6RlxubJZytKE",
  "https://fastly.picsum.photos/id/929/800/400.jpg?hmac=3YWDs_hJ6hv6uXu_WYT9Xxnl1B3h8iDDbvdVnnBENg8",
  "https://fastly.picsum.photos/id/1078/800/400.jpg?hmac=p-8Snml3EvJCdYrX0OKdn919GA2XBOs2vtX8Nv5Vrok",
];

const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-64 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    Card Title {index + 1}
                  </h2>
                  <p className="text-gray-600">
                    This is a description for card {index + 1}.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentIndex > 0 && (
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white"
          onClick={prevSlide}
        >
          &lt;
        </button>
      )}
      {currentIndex < images.length - 1 && (
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white"
          onClick={nextSlide}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default CardCarousel;
