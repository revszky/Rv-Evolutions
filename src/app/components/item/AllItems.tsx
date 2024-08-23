"use client";

import React, { useEffect, useState } from "react";
import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";
import Link from "next/link";
import CombinedItems from "../../item/CombinedItems";

const AllItems = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const newItemsPerSlide = window.innerWidth >= 768 ? 4 : 2;

      const slideOffset = Math.floor(
        (currentSlide * itemsPerSlide!) / newItemsPerSlide
      );
      setItemsPerSlide(newItemsPerSlide);
      setCurrentSlide(slideOffset);
    };

    updateItemsPerSlide();

    window.addEventListener("resize", updateItemsPerSlide);
    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, [currentSlide, itemsPerSlide]);

  useEffect(() => {
    if (itemsPerSlide !== null) {
      const maxSlides = Math.ceil(CombinedItems.length / itemsPerSlide) - 1;
      if (currentSlide > maxSlides) {
        setCurrentSlide(maxSlides);
      }
    }
  }, [itemsPerSlide, currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide, itemsPerSlide]);

  if (itemsPerSlide === null) {
    return null;
  }

  const maxSlides = Math.ceil(CombinedItems.length / itemsPerSlide) - 1;

  const nextSlide = () => {
    if (currentSlide < maxSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const touchDiff = touchStartX - touchEndX;

      if (touchDiff > 50) {
        nextSlide();
      } else if (touchDiff < -50) {
        prevSlide();
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className="relative w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentSlide * 100) / itemsPerSlide}%)`,
          }}
        >
          {CombinedItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 md:w-1/4 p-2"
              style={{
                minWidth: `${100 / itemsPerSlide}%`,
              }}
            >
              <Link href={`/item/${item.url}`}>
                <div className="p-2">
                  <img
                    src={item.picture}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="py-2">
                    <div className="pb-4">
                      <h3 className="font-mono font-bold">{item.title}</h3>
                      <p className="font-mono text-xs md:text-sm">{item.sub}</p>
                    </div>

                    <p className="font-mono font-bold text-xs md:text-sm">
                      <span className="pr-[4px]">IDR</span>
                      {item.price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`absolute top-1/2 transform -translate-y-1/2 left-[6px] p-2 rounded-full bg-black bg-opacity-60 ${
          currentSlide === 0 ? "hidden" : ""
        }`}
        onClick={prevSlide}
      >
        <IconChevronsLeft className="text-white" />
      </button>

      <button
        className={`absolute top-1/2 transform -translate-y-1/2 right-[6px] p-2 rounded-full bg-black bg-opacity-60 ${
          currentSlide === maxSlides ? "hidden" : ""
        }`}
        onClick={nextSlide}
      >
        <IconChevronsRight className="text-white" />
      </button>
    </div>
  );
};

export default AllItems;
