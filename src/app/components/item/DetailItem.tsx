"use client";
import React, { useEffect } from "react";
import CombinedItems from "../../item/CombinedItems";

interface DetailItemProps {
  detaiItem: string;
  onTitleChange: (title: string) => void;
}

const DetailItem: React.FC<DetailItemProps> = ({
  detaiItem,
  onTitleChange,
}) => {
  const itemData = CombinedItems.find((detail) => detail.url === detaiItem);

  useEffect(() => {
    if (itemData) {
      document.title = `RV • ${itemData.title}`;
      onTitleChange(itemData.title);
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
