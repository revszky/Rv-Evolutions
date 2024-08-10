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

    const mengubahUkuran = () => {
      if (window.innerWidth > 768 && isOpen) {
        onClose();
      }
    };

    window.addEventListener("resize", mengubahUkuran);

    return () => {
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
      <div className="bg-white p-4 rounded-lg w-1/2 relative z-60">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{result.title}</h2>
        </div>
        <img src={result.image} alt={result.title} className="w-full mb-4" />
        <p>
          <strong>ID:</strong> {result.id}
        </p>
        <p>
          <strong>Type:</strong> {result.type}
        </p>
        <p>
          <strong>Size:</strong> {result.size}
        </p>
        <p>
          <strong>Description:</strong> {result.description}
        </p>
      </div>
    </div>,
    document.body
  );
};

export default ModalCheckVertical;
