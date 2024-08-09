"use client";

import React, { useState, useEffect, useRef } from "react";
import { IconSearch } from "@tabler/icons-react";
import DataDetailID from "@/app/data/DataDetailID";
import ModalCheckVertical from "@/app/components/check/ModalCheckVertical";

interface DataID {
  url: string;
  id: string;
  image: string;
  title: string;
  type: string;
  size: string;
  description: string;
}

const SearchVertical = ({
  isOpen,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<string>("");
  const [result, setResult] = useState<DataID | null>(null);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [originalValue, setOriginalValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    } else if (!isOpen) {
      resetTimeoutRef.current = setTimeout(() => {
        resetAll();
      }, 700);
    }

    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        if (
          inputRef.current &&
          !inputRef.current.contains(event.target as Node)
        ) {
          setInputFocused(false);
          if (isHidden) {
            setSearchValue("xxx-xxx-xxx");
            setIsHidden(true);
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isHidden]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/-/g, "");
    if (/^\d{0,9}$/.test(value)) {
      setSearchValue(value);
      setWarningMessage("");
    }
  };

  const formatID = (id: string): string => {
    if (id.length === 9) {
      return `${id.slice(0, 3)}-${id.slice(3, 6)}-${id.slice(6, 9)}`;
    }
    return id;
  };

  const handleSearchClick = () => {
    if (searchValue.length === 9) {
      const formattedID = formatID(searchValue);
      const foundItem = DataDetailID.find((item) => item.id === formattedID);
      if (foundItem) {
        setResult(foundItem);
        setWarningMessage("");
      } else {
        setResult(null);
        setWarningMessage("ID yang Anda cari tidak ditemukan");
      }
      setOriginalValue(searchValue);
      setSearchValue("XXX-XXX-XXX");
      setIsHidden(true);
      inputRef.current?.blur();
    } else {
      setWarningMessage("Harap masukkan angka 9 digit");
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
    if (isHidden) {
      setSearchValue(originalValue);
      setIsHidden(false);
    }
  };

  const handleResultClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const resetAll = () => {
    setSearchValue("");
    setResult(null);
    setWarningMessage("");
    setIsHidden(false);
    setOriginalValue("");
    setIsModalOpen(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center"
      ref={containerRef}
    >
      <div className="flex items-center justify-center relative ml-8">
        <div className="p-[7px] bg-black absolute -left-[34px]">
          <h1 className="font-mono text-lg text-white text-center">RV</h1>
        </div>

        <input
          type="text"
          name="authenticity"
          value={searchValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          placeholder="XXX-XXX-XXX"
          className="p-2 w-52 border font-mono border-black focus:outline-black"
          maxLength={9}
          onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
          ref={inputRef}
        />

        <button className="p-2 absolute right-0" onClick={handleSearchClick}>
          <IconSearch className="w-5 h-5" />
        </button>
      </div>

      {warningMessage && (
        <p className="text-red-500 text-sm mt-2 text-center font-mono">
          {warningMessage}
        </p>
      )}

      {result && (
        <div className="mt-4 p-2 border border-gray-300 rounded-lg">
          <button onClick={handleResultClick}>
            <p>{result.title}</p>
          </button>
        </div>
      )}

      <ModalCheckVertical
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        result={result}
      />
    </div>
  );
};

export default SearchVertical;
