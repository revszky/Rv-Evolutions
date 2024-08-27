"use client";
import React, { useEffect } from "react";
import CombinedItems from "../../item/CombinedItems";
import NotFound from "../../not-found";

interface DetailItemProps {
  detaiItem: string;
  onTitleChange: (typeItem: string) => void;
}

const DetailItem: React.FC<DetailItemProps> = ({
  detaiItem,
  onTitleChange,
}) => {
  const itemData = CombinedItems.find((detail) => detail.url === detaiItem);

  useEffect(() => {
    if (itemData) {
      document.title = `RV • ${itemData.typeItem}`;
      onTitleChange(itemData.typeItem);
    }
  }, [itemData, onTitleChange]);

  if (!itemData) {
    return (
      <main>
        <section>
          <div>
            <NotFound />
          </div>
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
