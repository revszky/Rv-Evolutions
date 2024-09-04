"use client";

import React, { useEffect, useState } from "react";
import CombinedItems from "../../item/CombinedItems";
import FilterItem from "./FilterItem";
import CarouselItem from "./CarouselItem";

const AllItems = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL ITEMS");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [items, setItems] = useState(
    CombinedItems.map((item) => ({
      ...item,
      activeImageIndex: 0,
    }))
  );

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
    <div className="w-full">
      <div className="flex items-start justify-between p-4">
        <h1 className="font-mono font-bold">
          {selectedCategory === "ALL ITEMS"
            ? "ALL ITEMS"
            : `ALL ${selectedCategory}`}{" "}
          &apos;{filteredItems.length}&apos;
        </h1>

        <FilterItem
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
      </div>

      <CarouselItem
        filteredItems={filteredItems}
        currentSlide={currentSlide}
        itemsPerSlide={itemsPerSlide}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        handleColorClick={handleColorClick}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
      />
    </div>
  );
};

export default AllItems;
