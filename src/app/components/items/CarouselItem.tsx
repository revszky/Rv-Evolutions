import React from "react";
import Link from "next/link";
import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";

interface CarouselItemProps {
  filteredItems: Array<{
    url: string;
    picture: string;
    activeImageIndex: number;
    title: string;
    sub: string;
    colors: string;
    price: string;
  }>;
  currentSlide: number;
  itemsPerSlide: number;
  prevSlide: () => void;
  nextSlide: () => void;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
  handleColorClick: (filteredItemIndex: number, colorIndex: number) => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  filteredItems,
  currentSlide,
  itemsPerSlide,
  prevSlide,
  nextSlide,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  handleColorClick,
}) => {
  const maxSlides = Math.max(filteredItems.length - itemsPerSlide, 0);

  return (
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
            transform: `translateX(-${(currentSlide * 100) / itemsPerSlide}%)`,
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
        className={`absolute top-1/2 transform -translate-y-1/2 left-[6px] p-2 rounded-full bg-black bg-opacity-60 ${
          currentSlide === 0 || filteredItems.length <= itemsPerSlide
            ? "hidden"
            : ""
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
  );
};

export default CarouselItem;
