import React from "react";
import DetailItem from "@/app/components/product/DetailItem";

interface DetailItemProps {
  params: {
    detail: string;
  };
}

const Page: React.FC<DetailItemProps> = ({ params }) => {
  return (
    <main>
      <section>
        <div>
          <DetailItem detaiItem={params.detail} />
        </div>
      </section>
    </main>
  );
};

export default Page;
