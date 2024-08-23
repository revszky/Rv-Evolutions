"use client";
import React, { useEffect } from "react";
import CombinedItems from "../../item/CombinedItems";

interface DetailItemProps {
  detaiItem: string;
  onTitleChange: (title: string) => void; // Tambahkan prop baru
}

const DetailItem: React.FC<DetailItemProps> = ({
  detaiItem,
  onTitleChange,
}) => {
  const itemData = CombinedItems.find((detail) => detail.url === detaiItem);

  useEffect(() => {
    if (itemData) {
      const title = `RV • ${itemData.title}`;
      document.title = title;
      onTitleChange(itemData.title); // Kirim title ke Page
    }
  }, [itemData, onTitleChange]);

  if (!itemData) {
    return (
      <main>
        <section>
          <div>kosong</div>
        </section>
      </main>
    );
  }
  return (
    <div>
      <div>
        <img src={itemData.picture} alt={itemData.title} />
        <h1>{itemData.title}</h1>
        <p>{itemData.description}</p>
      </div>
    </div>
  );
};

export default DetailItem;
