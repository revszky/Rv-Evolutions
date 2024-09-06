"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  IconChevronCompactDown,
  IconChevronCompactUp,
  IconChevronsLeft,
  IconChevronsRight,
  IconLoader,
} from "@tabler/icons-react";
import Link from "next/link";
import CombinedItems from "../../item/CombinedItems";
import FilterItem from "./FilterItem";

const AllItems = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL ITEMS");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [animasiFilter, setAnimasiFilter] = useState(false);
  const [items, setItems] = useState(
    CombinedItems.map((item) => ({
      ...item,
      activeImageIndex: 0,
    }))
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [newCategory, setNewCategory] = useState<string | null>(null);

  useEffect(() => {
    if (newCategory) {
      setLoadingFilter(true);
      setTimeout(() => {
        setSelectedCategory(newCategory);
        setLoadingFilter(false);
        setNewCategory(null);
      }, 1000);
    }
  }, [newCategory]);

  const handleLoadingCategory = (category: string) => {
    setNewCategory(category);
  };

  const openFilterDrop = () => {
    setDropdownOpen(!dropdownOpen);
    setAnimasiFilter(!animasiFilter);
  };

  const closeFilterDrop = () => {
    setDropdownOpen(false);
    setAnimasiFilter(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeFilterDrop();
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeFilterDrop();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const filteredItems =
    selectedCategory === "ALL ITEMS"
      ? items
      : items.filter(
          (item) => item.typeItem.toUpperCase() === selectedCategory
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
      const maxSlides = Math.max(filteredItems.length - itemsPerSlide, 0);

      if (currentSlide > maxSlides) {
        setCurrentSlide(maxSlides);
      }

      if (filteredItems.length <= itemsPerSlide) {
        setCurrentSlide(0);
      }
    }
  }, [itemsPerSlide, filteredItems.length]);

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
    if (itemsPerSlide !== null) {
      const maxSlides = Math.max(filteredItems.length - itemsPerSlide, 0);
      if (currentSlide < maxSlides) {
        setCurrentSlide(currentSlide + 1);
      }
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
      const maxSlides = Math.max(filteredItems.length - itemsPerSlide, 0);

      if (touchDiff > 50 && currentSlide < maxSlides) {
        nextSlide();
      } else if (touchDiff < -50 && currentSlide > 0) {
        prevSlide();
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleColorClick = (filteredItemIndex: number, colorIndex: number) => {
    const itemToUpdate = filteredItems[filteredItemIndex];
    const originalItemIndex = items.findIndex(
      (item) => item.url === itemToUpdate.url
    );

    const updatedItems = items.map((item, idx) =>
      idx === originalItemIndex
        ? { ...item, activeImageIndex: colorIndex }
        : item
    );

    setItems(updatedItems);
  };

  const maxSlides = Math.max(filteredItems.length - itemsPerSlide, 0);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-start justify-between p-4 relative z-20 bg-white">
        <h1 className="font-mono font-bold">
          {selectedCategory === "ALL ITEMS"
            ? "ALL ITEMS"
            : `ALL ${selectedCategory}`}
          &apos;{filteredItems.length}&apos;
        </h1>

        <div ref={dropdownRef}>
          <button
            className="flex items-center justify-center gap-[10px]"
            onClick={openFilterDrop}
          >
            <div
              className={`transform ${
                animasiFilter ? "rotate-90" : ""
              } transition duration-500`}
            >
              {dropdownOpen ? (
                <IconChevronCompactUp className="w-[18px] -rotate-[90deg]" />
              ) : (
                <IconChevronCompactDown className="w-[18px]" />
              )}
            </div>

            <h2 className="font-mono font-bold">{selectedCategory}</h2>
          </button>
        </div>
      </div>

      <FilterItem
        selectedCategory={selectedCategory}
        setSelectedCategory={handleLoadingCategory}
        // setSelectedCategory={setSelectedCategory}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={closeFilterDrop}
      />

      <div className="relative">
        <div
          className={`absolute inset-0 flex justify-center bg-white z-30 transition-opacity ${
            loadingFilter
              ? "opacity-100 duration-700"
              : "opacity-0 pointer-events-none duration-150"
          }`}
        >
          <div className="p-8">
            <IconLoader className="animate-spin" />
          </div>
        </div>

        <div
          className="relative py-4"
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
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 md:w-1/4 p-2"
                  style={{
                    minWidth: `${100 / itemsPerSlide}%`,
                  }}
                >
                  <Link href={`/items/${item.url}`}>
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
            className={`absolute top-1/2 transform -translate-y-1/2 left-0 p-2 rounded-full bg-black bg-opacity-40 ${
              currentSlide === 0 || filteredItems.length <= itemsPerSlide
                ? "hidden"
                : ""
            }`}
            onClick={prevSlide}
          >
            <IconChevronsLeft className="text-white" />
          </button>

          <button
            className={`absolute top-1/2 transform -translate-y-1/2 right-0 p-2 rounded-full bg-black bg-opacity-40 ${
              currentSlide >= maxSlides ? "hidden" : ""
            }`}
            onClick={nextSlide}
          >
            <IconChevronsRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default AllItems;
