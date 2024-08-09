import React from "react";
import SearchHorizontal from "@/app/components/search/SearchHorizontal";
import Authenticity from "@/app/components/authenticity/Authenticity";

export const metadata = {
  title: "RV • Authenticity",
};

const page = () => {
  return (
    <main>
      <section className="pt-20">
        <div>
          <Authenticity />
        </div>
      </section>

      <section className="py-10">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-center">
              Enter the 9-digit RV code on the tag label into the column below
              without using the hyphen "-". After you click "Search", the
              results of our product authenticity verification will be displayed
              below the column.
            </p>
          </div>

          <div className="py-4">
            <SearchHorizontal />
          </div>

          <div>
            <p></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
