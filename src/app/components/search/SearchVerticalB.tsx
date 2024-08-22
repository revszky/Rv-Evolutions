"use client";

import React, { useState, useEffect, useRef } from "react";
import { IconSearch } from "@tabler/icons-react";
import Identifier from "../../valid/identifier.json";
import ModalCheckVertical from "../../components/check/ModalCheckVertical";

interface DataID {
  check: string;
  id: string;
  valid: string;
}

const SearchVerticalB = ({
  isOpen,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<string>("");
  const [result, setResult] = useState<DataID | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [originalValue, setOriginalValue] = useState<string>("");
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [shouldOpenModal, setShouldOpenModal] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
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

  const handleInputFocus = () => {
    setWarningMessage("");
    if (isHidden) {
      setSearchValue(originalValue);
      setIsHidden(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsHidden(true);
    setSearchValue("xxx-xxx-xxx");
  };

  const resetAll = () => {
    setSearchValue("");
    setResult(null);
    setWarningMessage("");
    setIsHidden(false);
    setOriginalValue("");
    setIsModalOpen(false);
    setIsNotFound(false);
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
          onFocus={handleInputFocus}
          placeholder="xxx-xxx-xxx"
          className="p-2 w-52 border font-mono font-bold border-black focus:outline-black"
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

      <ModalCheckVertical
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        result={result}
      />
    </div>
  );
};

export default SearchVerticalB;
