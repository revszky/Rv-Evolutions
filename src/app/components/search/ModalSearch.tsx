import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { IconEyeSearch } from "@tabler/icons-react";

interface DataID {
  id: string;
  title: string;
}

interface ModalSearchProps {
  isOpen: boolean;
  searchId: string;
  onSearchIdChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  result: DataID | null;
  notFound: boolean;
  invalidId: boolean;
  emptyInput: boolean;
  onClose: () => void;
}

const ModalSearch: React.FC<ModalSearchProps> = ({
  isOpen,
  searchId,
  onSearchIdChange,
  onSearch,
  result,
  notFound,
  invalidId,
  emptyInput,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const klikLuar = (klik: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === klik.target) {
      onClose();
    }
  };

  const klikEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", klikEscape);

      const focusInput = () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      };
      focusInput();

      return () => {
        document.removeEventListener("keydown", klikEscape);
      };
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity ${
        isOpen ? "opacity-100 duration-500" : "opacity-0 pointer-events-none"
      }`}
      ref={modalRef}
      onClick={klikLuar}
    >
      <div className="flex flex-col items-center justify-center bg-white max-w-sm p-4 md:p-6">
        <div className="p-4 max-w-[260px] md:max-w-md">
          <h1 className="font-mono text-center text-xs md:text-lg">
            ID numbers must be 4 digits. Please check your ID.
          </h1>
        </div>

        <div className="relative">
          <div className="flex items-center">
            <div className="p-[7px] bg-black">
              <h2 className="font-mono text-lg text-white">RV</h2>
            </div>

            <input
              ref={inputRef}
              type="text"
              name="ID"
              value={searchId}
              onChange={onSearchIdChange}
              onKeyPress={handleKeyPress}
              placeholder="1234"
              className="w-60 md:w-80 xl:w-96 p-2 focus:outline-none bg-white border border-black font-mono"
            />
          </div>

          <div className="absolute top-0 right-0">
            <button onClick={onSearch} className="p-2">
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

        {invalidId && !emptyInput && (
          <div className="mt-4 text-red-500 max-w-[200px]">
            <p className="font-mono text-xs text-center">
              ID tidak valid. Harap masukkan 4 digit angka.
            </p>
          </div>
        )}

        {result && (
          <div className="mt-4">
            <Link href={`/check/${result.title}`} onClick={onClose}>
              <h4 className="text-lg font-semibold">{result.title}</h4>
            </Link>
          </div>
        )}

        {notFound && !result && (
          <div className="mt-4 text-red-500">
            <p className="font-mono text-xs">ID not found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalSearch;
