"use client";

import { useState } from "react";

const ButtonLanguage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("id");

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="px-4 py-2 border rounded"
      >
        {currentLang === "id" ? "Indonesia" : "English"}
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
          <button
            onClick={() => switchLanguage("id")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Indonesia
          </button>
          <button
            onClick={() => switchLanguage("en")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonLanguage;
