"use client";
import React, { useEffect, useState, useRef } from "react";
import CombinedItems from "../../item/CombinedItems";
import NotFound from "../../not-found";
import Link from "next/link";
import {
  IconChevronLeft,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";

interface DetailItemProps {
  detaiItem: string;
  onTitleChange: (typeItem: string) => void;
}

const DetailItem: React.FC<DetailItemProps> = ({
  detaiItem,
  onTitleChange,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const touchStartX = useRef(0);
  const itemData = CombinedItems.find((detail) => detail.url === detaiItem);

  useEffect(() => {
    if (itemData) {
      document.title = `RV • ${itemData.typeItem}`;
      onTitleChange(itemData.typeItem);
    }
  }, [itemData, onTitleChange]);

  if (!itemData) {
    return (
      <main>
        <section>
          <div>
            <NotFound />
          </div>
        </section>
      </main>
    );
  }

  const handleColorClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const handlePrevClick = () => {
    if (activeImageIndex > 0) {
      setActiveImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (activeImageIndex < itemData.picture.split(", ").length - 1) {
      setActiveImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsTouching(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching) return;

    const touchEndX = e.touches[0].clientX;
    const touchDiff = touchStartX.current - touchEndX;

    if (
      touchDiff > 50 &&
      activeImageIndex < itemData.picture.split(", ").length - 1
    ) {
      handleNextClick();
      setIsTouching(false);
    } else if (touchDiff < -50 && activeImageIndex > 0) {
      handlePrevClick();
      setIsTouching(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  return (
    <div className="w-full px-4 md:px-6 lg:px-20">
      <div className="px-2 pb-4 md:pb-10">
        <Link
          href="/our-collection"
          className="flex items-center font-mono font-bold"
        >
          <IconChevronLeft className="w-4 h-4" />
          BACK TO OUR COLLECTION
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between p-2">
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="w-full md:w-[500px] flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
            >
              {itemData.picture.split(", ").map((picture, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <img
                    src={picture}
                    alt={`${itemData.title} - ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className={`absolute top-1/2 transform -translate-y-1/2 -left-4 p-2 rounded-full bg-black bg-opacity-60 ${
              activeImageIndex === 0 ? "hidden" : ""
            }`}
            onClick={handlePrevClick}
          >
            <IconChevronsLeft className="text-white" />
          </button>

          <button
            className={`absolute top-1/2 transform -translate-y-1/2 -right-4 p-2 rounded-full bg-black bg-opacity-60 ${
              activeImageIndex === itemData.picture.split(", ").length - 1
                ? "hidden"
                : ""
            }`}
            onClick={handleNextClick}
          >
            <IconChevronsRight className="text-white" />
          </button>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center p-2">
          <div className="text-center md:text-left p-2">
            <h1 className="font-mono font-bold md:text-lg">{itemData.title}</h1>

            <p className="font-mono text-xs md:text-sm">{itemData.sub}</p>
          </div>

          <div className="text-center md:text-left p-2">
            <p className="font-mono text-xs md:text-sm">
              {itemData.description}
            </p>
          </div>

          <div className="flex flex-col items-start justify-center p-2">
            <div className="flex items-start justify-center py-2 gap-[6px]">
              <div className="text-center">
                <p className="font-mono text-xs md:text-sm">Colors:</p>
              </div>

              <div className="flex flex-col items-start justify-center">
                <div>
                  <p></p>
                </div>

                <div className="grid grid-cols-3 gap-2 py-[12px]">
                  {itemData.colors.split(", ").map((color, idx) => (
                    <div
                      key={idx}
                      className="px-[10px] md:px-4 py-[6px] cursor-pointer"
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorClick(idx)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="font-mono font-bold text-xs md:text-sm">
                <span className="pr-[4px]">IDR</span>
                {itemData.price}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end px-2 pt-4 md:pt-10">
        <p className="font-mono font-bold text-sm">&lsquo;RV24&lsquo;-25</p>
      </div>
    </div>
  );
};

export default DetailItem;
