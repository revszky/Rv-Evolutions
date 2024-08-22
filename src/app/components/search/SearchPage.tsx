"use client";

import React, { useEffect, useState, useRef } from "react";
import Identifier from "../../valid/identifier.json";
import { IconSearch } from "@tabler/icons-react";
import ModalCheckHorizontal from "../../components/check/ModalCheckHorizontal";

interface DataID {
  check: string;
  id: string;
  valid: string;
}

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<string>("");
  const [result, setResult] = useState<DataID | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [originalValue, setOriginalValue] = useState<string>("");
  const [shouldOpenModal, setShouldOpenModal] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

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

  useEffect(() => {
    if (shouldOpenModal) {
      setIsModalOpen(true);
      setShouldOpenModal(false);
    }
  }, [shouldOpenModal]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/-/g, "");
    if (/^\d{0,9}$/.test(value)) {
      setSearchValue(value);
      setWarningMessage("");
      setResult(null);
      setIsNotFound(false);
    }
  };

  const formatID = (id: string): string => {
    if (id.length === 9) {
      return `${id.slice(0, 3)}-${id.slice(3, 6)}-${id.slice(6, 9)}`;
    }
    return id;
  };

  const handleSearchClick = () => {
    if (searchValue === "xxx-xxx-xxx") {
      setShouldOpenModal(true);
      return;
    }

    const formattedID = formatID(searchValue);
    const foundItem = Identifier.find((item) => item.id === formattedID);

    if (searchValue.length === 9) {
      if (foundItem) {
        setResult(foundItem);
      } else {
        setResult({
          check: "checking",
          id: searchValue,
          valid: "not-found",
        });
      }
      setOriginalValue(searchValue);
      setSearchValue("xxx-xxx-xxx");
      setIsHidden(true);
      setShouldOpenModal(true);
      inputRef.current?.blur();
    } else {
      setWarningMessage("Please enter a 9-digit number.");
      setResult(null);
    }
  };

  const handleInputBlur = () => {
    if (isHidden) {
      setSearchValue("xxx-xxx-xxx");
    }
  };

  const handleInputFocus = () => {
    if (isHidden) {
      setSearchValue(originalValue);
      setIsHidden(false);
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
          <h1 className="font-mono font-bold text-lg text-white text-center">
            RV
          </h1>
        </div>

        <input
          type="text"
          name="authenticity"
          value={searchValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          maxLength={9}
          placeholder="xxx-xxx-xxx"
          onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
          ref={inputRef}
          className="p-2 w-56 md:w-96 border font-mono font-bold border-black focus:outline-black"
        />

        <button className="p-2 absolute right-0" onClick={handleSearchClick}>
          <IconSearch className="w-5 h-5" />
        </button>
      </div>

      <div className="h-6">
        {warningMessage && (
          <p className="text-red-500 text-sm mt-2 text-center font-mono">
            {warningMessage}
          </p>
        )}
      </div>

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

export default SearchPage;
