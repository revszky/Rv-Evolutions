"use client";

import React, { useEffect, useRef, useState } from "react";
import { IconEyeSearch } from "@tabler/icons-react";
import DataDetailID from "@/app/data/DataDetailID";
import ModalCheck from "@/app/components/check/ModalCheck";

interface DataID {
  url: string;
  id: string;
  title: string;
  type: string;
  size: string;
  price: string;
  description: string;
  image: string;
}

const SearchHorizontal = () => {
  const [searchId, setSearchId] = useState<string>("");
  const [result, setResult] = useState<DataID | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    setSearchId("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 4) {
      setSearchId(value);
    }
    setResult(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const openModal = () => {
    setModalOpen(true);
    if (result) {
      window.history.pushState(null, "", `/check/${result.url}`);
      setSearchId("");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    window.history.pushState(null, "", "/check");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="p-[7px] bg-black text-white">
          <h2 className="font-mono text-lg">RV</h2>
        </div>

        <input
          ref={inputRef}
          type="text"
          name="ID"
          value={searchId}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="1234"
          className="w-60 md:w-80 p-2 focus:outline-none bg-white border-b border-t border-l border-black font-mono"
        />

        <button
          onClick={handleSearch}
          className="p-2 border-b border-t border-r border-black"
        >
          <IconEyeSearch className="w-6 h-6" />
        </button>
      </div>

      {result && (
        <button onClick={openModal}>
          <h4 className="text-lg font-semibold">{result.title}</h4>
        </button>
      )}

      <ModalCheck
        isOpenCheck={modalOpen}
        onCloseCheck={closeModal}
        result={result}
        url={result?.url || ""}
      />
    </div>
  );
};

export default SearchHorizontal;
