"use client";

import React, { useEffect, useRef, useState } from "react";
import { IconBell, IconBellRinging } from "@tabler/icons-react";

interface ModalNotificationProps {
  classModalNotif: string;
}

const Notification: React.FC<ModalNotificationProps> = ({
  classModalNotif,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animasiPutar, mengaturAnimasiPutar] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const klikLuar = (klik: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === klik.target) {
      setIsModalOpen(false);
      mengaturAnimasiPutar(false);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    mengaturAnimasiPutar(!animasiPutar);
  };

  useEffect(() => {
    const klikEsc = (klik: { keyCode: number }) => {
      if (klik.keyCode === 27 && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", klikEsc);

    return () => {
      document.removeEventListener("keydown", klikEsc);
    };
  }, [isModalOpen]);

  return (
    <>
      <button
        onClick={handleOpenModal}
        className={`transform ${
          animasiPutar ? "rotate-[360deg]" : ""
        } transition duration-500 ${classModalNotif}`}
      >
        {isModalOpen ? (
          <IconBell className="stroke-[2.2]" />
        ) : (
          <IconBellRinging className="stroke-[2.2]" />
        )}
      </button>

      <div
        className={`fixed -inset-2 z-50 flex items-center justify-center bg-black bg-opacity-35 xl:bg-black xl:bg-opacity-70 transition-opacity ${
          isModalOpen
            ? "opacity-100 duration-700"
            : "opacity-0 pointer-events-none duration-700"
        }`}
        ref={modalRef}
        onClick={klikLuar}
      >
        <div className="flex flex-col items-center justify-center bg-white p-2 rounded shadow-lg">
          <div className="p-4">
            <h1 className="text-center font-mono font-bold">
              Greetings, from us RV.
            </h1>
          </div>

          <div className="max-w-xs md:max-w-sm lg:max-w-xl p-4">
            <p className="text-center font-mono text-xs md:text-sm">
              Sorry, we do not yet provide a direct purchase feature on our
              official website. We hope to bring this feature as soon as
              possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
