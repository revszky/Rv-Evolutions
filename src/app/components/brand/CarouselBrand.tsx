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
  const [touchStartX, setTouchStartX] = useState(0);
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    setPrevIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentIndex < images.length - 1) {
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
    if (touchStartX - touchEndX > 50 && currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (touchEndX - touchStartX > 50 && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let threshold = 0;

      if (window.matchMedia("(min-width: 1024px)").matches) {
        threshold = 420;
      } else if (window.matchMedia("(min-width: 1280px)").matches) {
        threshold = 380;
      } else {
        threshold = 280;
      }

      setIsScrolledPast(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="relative">
        <div
          className={`fixed z-20 w-full transition-colors duration-300 ${
            isScrolledPast ? "bg-black bg-opacity-50" : ""
          }`}
        >
          <NavbarW />
        </div>

        <div className="absolute top-0 left-0 right-0">
          <div className="flex flex-col items-center justify-center">
            <div
              className="relative flex items-center justify-center w-full h-80 lg:h-[460px] xl:h-[400px] bg-cover bg-center overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
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

              <div className="absolute inset-0 bg-black bg-opacity-60"></div>

              <div className="absolute bottom-6 flex items-center justify-center gap-2 md:gap-4 lg:gap-8">
                {images.map((_, index) => (
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
    </div>
  );
};

export default CarouselBrand;
