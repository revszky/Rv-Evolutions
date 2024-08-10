import React, { useEffect, useRef, useState } from "react";

interface DataID {
  url: string;
  id: string;
  image: string;
  title: string;
  type: string;
  size: string;
  description: string;
}

interface ModalCheckHorizontalProps {
  isOpen: boolean;
  onClose: () => void;
  result: DataID;
}

const ModalCheckHorizontal: React.FC<ModalCheckHorizontalProps> = ({
  isOpen,
  onClose,
  result,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [previousUrl, setPreviousUrl] = useState<string | null>(null);

  const klikLuar = (klik: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === klik.target) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && result) {
      setPreviousUrl(window.location.pathname);
      window.history.pushState(null, "", `/authenticity?=${result.url}`);
    } else if (previousUrl) {
      window.history.pushState(null, "", previousUrl);
    }

    const klikEsc = (klik: { keyCode: number }) => {
      if (klik.keyCode === 27 && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", klikEsc);

    return () => {
      document.removeEventListener("keydown", klikEsc);
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed -inset-2 z-50 flex items-center justify-center bg-black bg-opacity-35 xl:bg-black xl:bg-opacity-70 transition-opacity ${
        isOpen
          ? "opacity-100 duration-700"
          : "opacity-0 pointer-events-none duration-700"
      }`}
      ref={modalRef}
      onClick={klikLuar}
    >
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{result.title}</h2>
        </div>

        <div className="mt-4">
          <img
            src={result.image}
            alt={result.title}
            className="w-28 rounded-md"
          />
          <p className="mt-4">{result.description}</p>
          <p className="mt-2">Size: {result.size}</p>
          <p className="mt-2">Type: {result.type}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalCheckHorizontal;
