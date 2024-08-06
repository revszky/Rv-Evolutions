"use client";

import React, { useEffect } from "react";
import DataTagID from "@/app/data/DataTagID";

interface DataDetailProps {
  detailTitle: string;
}

const DetailIdProduct: React.FC<DataDetailProps> = ({ detailTitle }) => {
  const data = DataTagID.find((detail) => detail.title === detailTitle);

  useEffect(() => {
    if (data) {
      document.title = `RV • ${data.title}`;
    }
  }, [data]);

  if (!data) {
    return (
      <main>
        <section>
          <h1>Data tidak ditemukan</h1>
        </section>
      </main>
    );
  }

  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default DetailIdProduct;
