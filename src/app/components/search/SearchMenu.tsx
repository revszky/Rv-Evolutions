import { IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";
import DataResi from "@/app/data/DataResi";
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
    }, 300);
  };

  const handleSearch = () => {
    if (searchId.length !== 4) {
      setInvalidId(true);
      setResult(null);
      setNotFound(false);
      return;
    }

    const foundItem = DataResi.find((item) => item.id === searchId);
    if (foundItem) {
      setResult(foundItem);
      setNotFound(false);
      setInvalidId(false);
    } else {
      setResult(null);
      setNotFound(true);
      setInvalidId(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (/^\d*$/.test(value) && value.length <= 4) {
      setSearchId(value);
    }
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
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SearchMenu;
