"use client";

import React, { useEffect, useState } from "react";
import CombinedItems from "../../item/CombinedItems";
import NotFound from "../../not-found";

interface DetailBuyProps {
  detaiBuy: string;
}

const DetailBuy: React.FC<DetailBuyProps> = ({ detaiBuy }) => {
  const [itemData, setItemData] = useState<any>(null);
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [activeImage, setActiveImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Function to parse query string and find item data
    const getQueryParams = () => {
      const params = new URLSearchParams(window.location.search);
      const itemUrl = params.get("itemUrl") || detaiBuy;
      const selectedSize = params.get("size") || "";
      const selectedColor = params.get("color") || "";
      const itemPrice = params.get("price") || "";

      // Find item data
      const item = CombinedItems.find((item) => item.url === itemUrl);

      if (item) {
        setItemData(item);
        setSize(selectedSize);
        setColor(selectedColor);
        setPrice(itemPrice);

        // Set active image based on selected color
        const colorIndex = item.colorName.split(", ").indexOf(selectedColor);
        setActiveImage(item.picture.split(", ")[colorIndex]);
      } else {
        setItemData(null);
      }
    };

    const timer = setTimeout(() => {
      getQueryParams();
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [detaiBuy]);

  if (loading) {
    return <p>Loading...</p>;
  }

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
    <div className="flex flex-col items-center justify-center px-4">
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-center p-2 border border-black">
          <div className="w-full h-full md:w-48 md:h-32 p-2">
            <img
              src={activeImage}
              alt={itemData.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col items-start p-2">
            <div className="text-left">
              <h1 className="font-mono font-bold md:text-lg">
                {itemData.title}
              </h1>
            </div>

            <div>
              <p className="font-mono text-xs md:text-sm">Size: {size}</p>
              <p className="font-mono text-xs md:text-sm">Color: {color}</p>
              <p className="font-mono font-bold text-xs md:text-sm">
                IDR {price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBuy;
