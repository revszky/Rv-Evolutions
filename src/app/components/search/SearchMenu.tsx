import { IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";
import DataTagID from "@/app/data/DataDetailID";
import ModalSearch from "./ModalSearch";

interface MenuNavProps {
  pilihMenu: () => void;
}

interface DataTag {
  id: string;
  title: string;
  description: string;
}

const SearchMenu = ({ pilihMenu }: MenuNavProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchId, setSearchId] = useState("");
  const [result, setResult] = useState<DataTag | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [invalidId, setInvalidId] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
    pilihMenu();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    setTimeout(() => {
      setSearchId("");
      setResult(null);
      setNotFound(false);
      setInvalidId(false);
      setEmptyInput(false);
    }, 300);
  };

  const handleSearch = () => {
    setInvalidId(false);
    setNotFound(false);
    setEmptyInput(false);

    if (searchId === "") {
      setEmptyInput(true);
      return;
    }

    if (searchId.length !== 4) {
      setInvalidId(true);
      return;
    }

    const foundItem = DataTagID.find((item) => item.id === searchId);
    if (foundItem) {
      setResult(foundItem);
    } else {
      setNotFound(true);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (/^\d*$/.test(value) && value.length <= 4) {
      setSearchId(value);
    }

    setInvalidId(false);
    setNotFound(false);
    setEmptyInput(false);
    setResult(null);
  };

  return (
    <>
      <button onClick={handleButtonClick}>
        <div className="flex items-center justify-center relative">
          <div>
            <h1 className="font-mono text-xl">ID</h1>
          </div>

          <div className="absolute bottom-0 -right-2">
            <IconSearch className="w-4 h-4" />
          </div>
        </div>
      </button>

      <ModalSearch
        isOpen={isModalOpen}
        searchId={searchId}
        onSearchIdChange={handleInputChange}
        onSearch={handleSearch}
        result={result}
        notFound={notFound}
        invalidId={invalidId}
        emptyInput={emptyInput}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SearchMenu;
