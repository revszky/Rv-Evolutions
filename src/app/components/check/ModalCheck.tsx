import React, { useRef } from "react";
import { IconPointFilled } from "@tabler/icons-react";

interface DataID {
  url: string;
  id: string;
  title: string;
  type: string;
  size: string;
  price: string;
  description: string;
  image: string;
}

interface ModalCheckProps {
  isOpenCheck: boolean;
  onCloseCheck: () => void;
  result: DataID | null;
  url: string;
}

const ModalCheck: React.FC<ModalCheckProps> = ({
  isOpenCheck,
  onCloseCheck,
  result,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const klikLuar = (klik: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === klik.target) {
      onCloseCheck();
    }
  };

  if (!result) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity ${
        isOpenCheck
          ? "opacity-100 duration-500"
          : "opacity-0 pointer-events-none"
      }`}
      ref={modalRef}
      onClick={klikLuar}
    >
      <div className="bg-white p-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-60">
            <img src={result.image} alt="detail" />
          </div>

          <div className="flex flex-col items-center md:items-start justify-center">
            <div className="p-2">
              <h1 className="font-mono">{result.title}</h1>
            </div>

            <div className="flex items-center justify-center px-2">
              <h2 className="font-mono text-sm">{result.type}</h2>

              <div className="p-2">
                <IconPointFilled className="w-2 h-2" />
              </div>

              <h3 className="font-mono text-sm">{result.size}</h3>
            </div>

            <div className="max-w-[280px] md:max-w-xs py-2">
              <p className="text-xs text-center md:text-left font-mono">
                {result.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCheck;
