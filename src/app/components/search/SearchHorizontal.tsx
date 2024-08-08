"use client";

import React, { useEffect, useState } from "react";
import DataDetailID from "@/app/data/DataDetailID";
import { IconSearch } from "@tabler/icons-react";
import ModalCheckHorizontal from "@/app/components/check/ModalCheckHorizontal";

interface DataID {
  url: string;
  id: string;
  image: string;
  title: string;
  type: string;
  size: string;
  description: string;
}

const SearchHorizontal = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<string>("");
  const [result, setResult] = useState<DataID | null>(null);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (searchValue.length < 4) {
      setResult(null);
    }
  }, [searchValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setSearchValue(value);
      setWarningMessage("");
    }
  };

  const handleSearchClick = () => {
    if (searchValue.length === 4) {
      const foundItem = DataDetailID.find((item) => item.id === searchValue);
      if (foundItem) {
        setResult(foundItem);
        setWarningMessage("");
      } else {
        setResult(null);
        setWarningMessage("ID yang Anda cari tidak ditemukan");
      }
    } else {
      setWarningMessage("Harap masukkan angka 4 digit");
      setResult(null);
    }
  };

  const handleInputBlur = () => {
    if (!inputFocused) {
      setWarningMessage("Harap periksa ID Anda");
    }
    setInputFocused(false);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
    setWarningMessage("");
  };

  const handleButtonClick = () => {
    if (result) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center">
        <input
          type="text"
          name="authenticity"
          value={searchValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          maxLength={4}
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-lg"
        />

        <button
          className="p-2 bg-blue-500 text-white rounded-lg flex items-center"
          onClick={handleSearchClick}
        >
          <IconSearch className="w-5 h-5" />
        </button>
      </div>

      {warningMessage && (
        <p className="text-red-500 text-sm mt-2">{warningMessage}</p>
      )}

      {result && (
        <div className="mt-4 p-2 border border-gray-300 rounded-lg">
          <button onClick={handleButtonClick}>
            <p>{result.id}</p>
            <p>{result.title}</p>
          </button>
        </div>
      )}

      {result && (
        <ModalCheckHorizontal
          isOpen={isModalOpen}
          onClose={closeModal}
          result={result}
        />
      )}
    </div>
  );
};

export default SearchHorizontal;
