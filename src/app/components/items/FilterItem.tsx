import React from "react";

interface FilterItemProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  // setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  dropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const categories = ["ALL ITEMS", "JACKET", "HOODIE", "T-SHIRT", "PANTS"];

const FilterItem: React.FC<FilterItemProps> = ({
  selectedCategory,
  setSelectedCategory,
  dropdownOpen,
  setDropdownOpen,
}) => {
  return (
    <div className="relative">
      <div
        className={`absolute z-10 p-2 top-full w-40 md:w-56 -right-0 bg-white transform transition-all duration-700 ease-in-out ${
          dropdownOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`w-full py-2 px-4 text-left font-mono font-bold ${
              selectedCategory === category ? "bg-black text-white" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setDropdownOpen(false);
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterItem;
