import { IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";
import DataResi from "@/app/data/DataResi";
import Link from "next/link";

interface DataTag {
  id: string;
  title: string;
  description: string;
}

const SearchMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchId, setSearchId] = useState("");
  const [result, setResult] = useState<DataTag | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchId("");
    setResult(null);
    setNotFound(false);
  };

  const handleSearch = () => {
    const foundItem = DataResi.find((item) => item.id === searchId);
    if (foundItem) {
      setResult(foundItem);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setSearchId(value);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        <IconSearch />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl mb-4">Search</h2>
            <input
              type="text"
              value={searchId}
              onChange={handleInputChange}
              placeholder="Enter ID"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleSearch}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Search
            </button>

            {result && (
              <div className="mt-4">
                <Link href={`/check/${result.id}`}>
                  <h3 className="text-lg font-semibold">{result.title}</h3>
                </Link>
              </div>
            )}
            {notFound && (
              <div className="mt-4 text-red-500">
                <p>ID not found</p>
              </div>
            )}
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchMenu;
