import { IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";
import DataResi from "@/app/data/DataResi";
import ModalSearch from "./ModalSearch";

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
    <>
      <button onClick={handleButtonClick}>
        <IconSearch />
      </button>

      <ModalSearch
        isOpen={isModalOpen}
        searchId={searchId}
        onSearchIdChange={handleInputChange}
        onSearch={handleSearch}
        result={result}
        notFound={notFound}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SearchMenu;
