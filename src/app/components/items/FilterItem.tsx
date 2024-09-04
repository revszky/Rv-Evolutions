import React, { useEffect, useRef } from "react";
import { IconChevronCompactDown } from "@tabler/icons-react";

interface FilterItemProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
}

const FilterItem: React.FC<FilterItemProps> = ({
  selectedCategory,
  setSelectedCategory,
  dropdownOpen,
  setDropdownOpen,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownOpen, setDropdownOpen]);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center gap-[10px]"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <IconChevronCompactDown className="w-[18px]" />
        <h2 className="font-mono font-bold">{selectedCategory}</h2>
      </button>

      <div
        ref={dropdownRef}
        className={`absolute top-full mt-2 w-40 -right-6 bg-white border border-black z-10 shadow-xl rounded-xl p-4 transform transition-all duration-500 ease-in-out ${
          dropdownOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4"
        }`}
      >
        {["ALL ITEMS", "JACKET", "HOODIE", "T-SHIRT", "PANTS"].map(
          (category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setDropdownOpen(false);
              }}
              className="block w-full text-left p-2 hover:bg-gray-200 font-mono font-bold"
            >
              {category}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default FilterItem;
