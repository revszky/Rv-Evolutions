import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { IconEyeSearch } from "@tabler/icons-react";

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
  const modalRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", klikEscape);
    }
    return () => {
      document.removeEventListener("keydown", klikEscape);
    };
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
            ID numbers have 4 digit numbers, check your ID.
          </h1>
        </div>

        <div className="relative">
          <div className="flex items-center">
            <div className="p-2 bg-black">
              <h2 className="font-mono text-xl text-white">RV</h2>
            </div>

            <input
              type="text"
              name="resi"
              value={searchId}
              onChange={onSearchIdChange}
              placeholder=""
              autoFocus
              className="w-60 md:w-80 xl:w-96 p-2 focus:outline-none bg-white border border-black font-mono"
            />
          </div>

          <div className="absolute top-0 right-0">
            <button onClick={onSearch} className="p-2">
              <IconEyeSearch />
            </button>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default ModalSearch;
