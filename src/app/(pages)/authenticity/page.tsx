import React from "react";
import SearchHorizontal from "@/app/components/search/SearchHorizontal";

export const metadata = {
  title: "RV • Authenticity",
};

const page = () => {
  return (
    <main>
      <section>
        <div>
          <SearchHorizontal />
        </div>
      </section>
    </main>
  );
};

export default page;
