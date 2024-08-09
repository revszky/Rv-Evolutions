"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
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
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [originalValue, setOriginalValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHidden]);

  useEffect(() => {
    if (searchValue.length < 9) {
      setResult(null);
    }
  }, [searchValue]);

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
        setWarningMessage("The ID you are looking for was not found.");
      }
      setOriginalValue(searchValue);
      setSearchValue("XXX-XXX-XXX");
      setIsHidden(true);
      inputRef.current?.blur();
    } else {
      setWarningMessage("Please enter a 9 digit number.");
      setResult(null);
    }
  };

  const handleInputBlur = () => {
    if (!inputFocused) {
      setWarningMessage("Please check your ID.");
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

  const handleButtonClick = () => {
    if (result) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
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
          maxLength={9}
          placeholder="XXX-XXX-XXX"
          onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
          ref={inputRef}
          className="p-2 w-56 md:w-96 border font-mono border-black focus:outline-black"
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

      {result && searchValue && (
        <div className="mt-4 p-2 border border-gray-300 rounded-lg">
          <button onClick={handleButtonClick}>
            <p>{result.title}</p>
          </button>
        </div>
      )}

      {!searchValue && !warningMessage && (
        <p className="p-2 text-gray-400 text-center rounded-xl">
          For now it is still empty
        </p>
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
