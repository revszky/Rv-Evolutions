"use client";
import React, { useEffect, useState, useRef } from "react";
import CombinedItems from "../../product/CombinedItems";
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
  const itemData = CombinedItems.find((detail) => detail.url === detaiItem);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColorName, setSelectedColorName] = useState(
    itemData?.colorName.split(", ")[0] || ""
  );
  const [activeSize, setActiveSize] = useState<string>("");
  const [isTouching, setIsTouching] = useState(false);
  const touchStartX = useRef(0);

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

  const handleSizeClick = (size: string) => {
    setActiveSize(size);
  };

  const handleColorClick = (index: number) => {
    setActiveImageIndex(index);
    setSelectedColorName(itemData.colorName.split(", ")[index]);
  };

  const handlePrevClick = () => {
    if (activeImageIndex > 0) {
      const newIndex = activeImageIndex - 1;
      setActiveImageIndex(newIndex);
      setSelectedColorName(itemData.colorName.split(", ")[newIndex]);
    }
  };

  const handleNextClick = () => {
    if (activeImageIndex < itemData.picture.split(", ").length - 1) {
      const newIndex = activeImageIndex + 1;
      setActiveImageIndex(newIndex);
      setSelectedColorName(itemData.colorName.split(", ")[newIndex]);
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
    <div className="flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-2 md:gap-6 xl:gap-32">
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

        <div className="flex flex-col items-start justify-center p-2">
          <div className="text-left p-2">
            <h1 className="font-mono font-bold md:text-lg">{itemData.title}</h1>

            <p className="font-mono text-xs md:text-sm">{itemData.sub}</p>
          </div>

          <div className="text-left px-2 py-4">
            <p className="font-mono text-xs md:text-sm">
              {itemData.description}
            </p>
          </div>

          <div className="flex flex-col items-start justify-center px-2 py-4">
            <div className="flex items-start justify-center py-2 gap-[6px]">
              <div className="text-left">
                <p className="font-mono text-xs md:text-sm">Colors:</p>
              </div>

              <div className="flex flex-col items-start justify-center">
                <div className="text-left">
                  <p className="font-mono font-bold text-xs md:text-sm">
                    {selectedColorName}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-[12px] pb-[4px]">
                  {itemData.colors.split(", ").map((color, idx) => (
                    <div key={idx}>
                      <div
                        className="px-4 py-[6px] cursor-pointer"
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorClick(idx)}
                      ></div>

                      {idx === activeImageIndex && (
                        <div className="py-[2px] w-8 border-b border-black"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start justify-center py-2 gap-[6px]">
              <div className="text-left">
                <p className="font-mono text-xs md:text-sm">Size:</p>
              </div>

              <div className="flex gap-6">
                {itemData.size.split(", ").map((size, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center justify-center"
                  >
                    <div
                      onClick={() => handleSizeClick(size)}
                      className={`cursor-pointer ${
                        size === activeSize ? "font-bold text-black" : ""
                      }`}
                    >
                      <p className="font-mono text-xs md:text-sm">{size}</p>
                    </div>

                    {size === activeSize && (
                      <div className="absolute -bottom-[2px] w-[12px] border-b border-black"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center md:text-left px-2 py-4">
            <p className="font-mono font-bold text-xs md:text-sm">
              <span className="pr-[4px]">IDR</span>
              {itemData.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
