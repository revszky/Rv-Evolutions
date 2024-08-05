"use client";

import React, { useState } from "react";
import { IconEyeSearch } from "@tabler/icons-react";
import DataTagID from "@/app/data/DataTagID";
import Link from "next/link";

interface DataID {
  id: string;
  title: string;
}

const SearchHorizontal = () => {
  const [searchId, setSearchId] = useState<string>("");
  const [result, setResult] = useState<DataID | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [invalidId, setInvalidId] = useState<boolean>(false);
  const [shortId, setShortId] = useState<boolean>(false);
  const [emptyInput, setEmptyInput] = useState<boolean>(false);

  const handleSearch = () => {
    setInvalidId(false);
    setNotFound(false);
    setShortId(false);
    setEmptyInput(false);

    if (searchId === "") {
      setEmptyInput(true);
      return;
    }

    if (searchId.length < 4) {
      setShortId(true);
      return;
    }

    if (searchId.length !== 4 || isNaN(Number(searchId))) {
      setInvalidId(true);
      return;
    }

    const foundResult = DataTagID.find((item) => item.id === searchId);
    if (foundResult) {
      setResult(foundResult);
    } else {
      setNotFound(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 4) {
      setSearchId(value);
    }

    setInvalidId(false);
    setNotFound(false);
    setShortId(false);
    setEmptyInput(false);
    setResult(null);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative -z-20">
        <div className="flex items-center">
          <div className="p-2 bg-black">
            <h2 className="font-mono text-xl text-white">RV</h2>
          </div>

          <input
            type="text"
            name="ID"
            value={searchId}
            onChange={handleChange}
            placeholder="EXAMPLE 1234"
            className="w-60 md:w-80 xl:w-96 p-2 focus:outline-none bg-white border border-black font-mono"
          />
        </div>

        <div className="absolute top-0 right-0">
          <button onClick={handleSearch} className="p-2">
            <IconEyeSearch />
          </button>
        </div>
      </div>

      {emptyInput && (
        <div className="mt-4 text-red-500 max-w-[200px]">
          <p className="font-mono text-xs text-center">
            Silakan periksa kode yang Anda masukkan.
          </p>
        </div>
      )}

      {shortId && !emptyInput && (
        <div className="mt-4 text-red-500 max-w-[200px]">
          <p className="font-mono text-xs text-center">
            ID tidak valid. Harap masukkan 4 digit angka.
          </p>
        </div>
      )}

      {invalidId && !shortId && !emptyInput && (
        <div className="mt-4 text-red-500 max-w-[200px]">
          <p className="font-mono text-xs text-center">
            ID tidak valid. Harap masukkan 4 digit angka.
          </p>
        </div>
      )}

      {result && (
        <div>
          <Link href={`/check/${result.id}`}>
            <h3 className="text-lg font-semibold">{result.id}</h3>
            <h4 className="text-lg font-semibold">{result.title}</h4>
          </Link>
        </div>
      )}

      {notFound && (
        <div className="mt-4 text-red-500">
          <p className="font-mono text-xs">ID not found</p>
        </div>
      )}
    </div>
  );
};

export default SearchHorizontal;
