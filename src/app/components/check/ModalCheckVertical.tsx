import {
  IconBookmarkFilled,
  IconCircleCheckFilled,
  IconLoader,
  IconPointFilled,
} from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface DataID {
  url: string;
  id: string;
  image: string;
  title: string;
  type: string;
  size: string;
  description: string;
}

const ModalCheckVertical = ({
  isOpen,
  onClose,
  result,
}: {
  isOpen: boolean;
  onClose: () => void;
  result: DataID | null;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [previousUrl, setPreviousUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const klikLuar = (klik: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === klik.target) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && result) {
      setPreviousUrl(window.location.pathname);
      window.history.pushState(null, "", `/authenticity?=${result.url}`);
      setLoading(true);

      const loadTimeout = setTimeout(() => {
        setLoading(false);
      }, 10000);

      return () => clearTimeout(loadTimeout);
    } else if (previousUrl) {
      window.history.pushState(null, "", previousUrl);
    }

    const mengubahUkuran = () => {
      if (window.innerWidth > 768 && isOpen) {
        onClose();
      }
    };

    const klikEsc = (klik: { keyCode: number }) => {
      if (klik.keyCode === 27 && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", klikEsc);
    window.addEventListener("resize", mengubahUkuran);

    return () => {
      document.addEventListener("keydown", klikEsc);
      window.removeEventListener("resize", mengubahUkuran);
    };
  }, [isOpen, result]);

  if (!result) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-35 xl:bg-black xl:bg-opacity-70 transition-opacity ${
        isOpen
          ? "opacity-100 duration-700"
          : "opacity-0 pointer-events-none duration-700"
      }`}
      ref={modalRef}
      onClick={klikLuar}
    >
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <IconLoader className="text-white w-14 h-14 md:w-20 md:h-20 animate-spin" />
        </div>
      ) : (
        <>
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
              <p className="font-mono text-center text-sm">
                {result.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>,
    document.body
  );
};

export default ModalCheckVertical;
