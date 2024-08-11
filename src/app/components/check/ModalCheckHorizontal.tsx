import {
  IconBookmarkFilled,
  IconCircleCheckFilled,
  IconPointFilled,
} from "@tabler/icons-react";
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
      <div className="flex flex-col items-center justify-center bg-white p-4">
        <div className="p-2 relative">
          <div className="w-56 md:w-80">
            <img
              src={result.image}
              alt={result.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-0 -right-[2px] md:-top-[2px] md:-right-[4px]">
            <IconBookmarkFilled className="w-10 h-10 md:w-12 md:h-12" />
          </div>

          <div className="absolute top-2 right-[10px] md:top-[4px] md:right-[8px]">
            <IconCircleCheckFilled className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </div>
        </div>

        <div className="p-2">
          <h1 className="font-mono text-center text-xl">{result.title}</h1>
        </div>

        <div className="flex items-center justify-center p-2">
          <p className="font-mono text-center">{result.type}</p>

          <div className="px-2">
            <IconPointFilled className="w-2 h-2" />
          </div>

          <p className="font-mono text-center">{result.size}</p>
        </div>

        <div className="max-w-xs md:max-w-md p-2">
          <p className="font-mono text-center text-sm">{result.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalCheckHorizontal;
