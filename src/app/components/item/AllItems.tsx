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
  const [items, setItems] = useState(
    CombinedItems.map((item) => ({
      ...item,
      activeImageIndex: 0,
    }))
  );

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const newItemsPerSlide = window.innerWidth >= 768 ? 4 : 2;
      setItemsPerSlide(newItemsPerSlide);
    };

    updateItemsPerSlide();

    window.addEventListener("resize", updateItemsPerSlide);
    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);

  useEffect(() => {
    if (itemsPerSlide !== null) {
      const maxSlides = items.length - itemsPerSlide;

      if (currentSlide > maxSlides) {
        setCurrentSlide(maxSlides);
      }

      if (items.length <= itemsPerSlide) {
        setCurrentSlide(0);
      }
    }
  }, [itemsPerSlide, items.length]);

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

  const nextSlide = () => {
    if (itemsPerSlide !== null && currentSlide + 1 < items.length) {
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

      if (touchDiff > 50 && currentSlide < maxSlides) {
        nextSlide();
      } else if (touchDiff < -50 && currentSlide > 0) {
        prevSlide();
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleColorClick = (itemIndex: number, colorIndex: number) => {
    const updatedItems = items.map((item, idx) =>
      idx === itemIndex ? { ...item, activeImageIndex: colorIndex } : item
    );
    setItems(updatedItems);
  };

  const maxSlides = items.length - itemsPerSlide;

  return (
    <div className="w-full">
      <div className="p-4">
        <h1 className="font-mono font-bold">
          ALL COLLECTION &apos;{items.length}&apos;
        </h1>
      </div>

      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${
                (currentSlide * 100) / itemsPerSlide
              }%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 md:w-1/4 p-2"
                style={{
                  minWidth: `${100 / itemsPerSlide}%`,
                }}
              >
                <Link href={`/our-collection/${item.url}`}>
                  <div>
                    <img
                      src={item.picture.split(", ")[item.activeImageIndex]}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>

                <div className="py-2">
                  <div className="text-left">
                    <h2 className="font-mono font-bold text-sm md:text-base">
                      {item.title}
                    </h2>
                    <p className="font-mono text-xs md:text-sm">{item.sub}</p>
                  </div>

                  <div className="flex items-center justify-start py-2 gap-[6px]">
                    <div className="text-left">
                      <p className="font-mono text-xs md:text-sm">Colors:</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {item.colors.split(", ").map((color, idx) => (
                        <button
                          key={idx}
                          className="px-[10px] md:px-4 py-[6px]"
                          style={{ backgroundColor: color }}
                          onClick={() => handleColorClick(index, idx)}
                        ></button>
                      ))}
                    </div>
                  </div>

                  <p className="font-mono font-bold text-xs md:text-sm">
                    <span className="pr-[4px]">IDR</span>
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`absolute top-1/2 transform -translate-y-1/2 left-[6px] p-2 rounded-full bg-black bg-opacity-60 ${
            currentSlide === 0 || items.length <= itemsPerSlide ? "hidden" : ""
          }`}
          onClick={prevSlide}
        >
          <IconChevronsLeft className="text-white" />
        </button>

        <button
          className={`absolute top-1/2 transform -translate-y-1/2 right-[6px] p-2 rounded-full bg-black bg-opacity-60 ${
            currentSlide >= maxSlides ? "hidden" : ""
          }`}
          onClick={nextSlide}
        >
          <IconChevronsRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default AllItems;
