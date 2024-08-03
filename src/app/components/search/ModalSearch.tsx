import React from "react";
import Link from "next/link";

interface DataTag {
  id: string;
  title: string;
}

interface ModalSearchProps {
  isOpen: boolean;
  searchId: string;
  onSearchIdChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  result: DataTag | null;
  notFound: boolean;
  onClose: () => void;
}

const ModalSearch: React.FC<ModalSearchProps> = ({
  isOpen,
  searchId,
  onSearchIdChange,
  onSearch,
  result,
  notFound,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">Search</h2>
        <input
          type="text"
          value={searchId}
          onChange={onSearchIdChange}
          placeholder="Enter ID"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={onSearch}
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
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalSearch;
