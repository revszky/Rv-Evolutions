import {
  IconLoader,
  IconRosette,
  IconRosetteDiscountCheck,
  IconX,
} from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";

interface DataID {
  check: string;
  id: string;
  valid: string;
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
  const [loading, setLoading] = useState<boolean>(true);

  const klikLuar = (klik: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === klik.target) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && result) {
      setPreviousUrl(window.location.pathname);
      window.history.pushState(null, "", `/authenticity?=${result.check}`);
      setLoading(true);

      const loadTimeout = setTimeout(() => {
        setLoading(false);

        window.history.pushState(null, "", `/authenticity?=${result.valid}`);
      }, 5000);

      return () => clearTimeout(loadTimeout);
    } else if (previousUrl) {
      window.history.pushState(null, "", previousUrl);
    }
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
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <IconLoader className="text-white w-14 h-14 md:w-20 md:h-20 animate-spin" />
        </div>
      ) : result.valid === "not-found" ? (
        <div className="flex flex-col items-center justify-center bg-white border-2 border-red-500 p-2 rounded-2xl">
          <div className="p-4">
            <div className="flex items-center justify-center relative">
              <IconRosette className="w-28 h-28 stroke-[0.6] text-red-500" />
              <IconX className="absolute w-10 h-10 stroke-[1.5] text-red-500" />
            </div>

            <h1 className="text-center font-mono font-bold">NOT VERIFIED</h1>
          </div>

          <div className="max-w-xs p-4">
            <p className="font-mono text-center text-xs md:text-sm">
              The authenticity of the items you own, cannot be found.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center bg-white border-2 border-green-500 p-2 rounded-2xl">
            <div className="p-4">
              <IconRosetteDiscountCheck className="w-28 h-28 stroke-[0.6] text-green-500" />

              <h1 className="text-center font-mono font-bold">VERIFIED</h1>
            </div>

            <div className="max-w-xs p-4">
              <p className="font-mono text-center text-xs md:text-sm">
                The authenticity of the items you own, has been found.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ModalCheckHorizontal;
