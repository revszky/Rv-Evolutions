import DetailResi from "@/app/components/search/DetailResi";
import React from "react";

interface PageParams {
  detail: string;
}

const Page: React.FC<{ params: PageParams }> = ({ params }) => {
  return (
    <main>
      <section className="my-4">
        <div className="flex items-center justify-center">
          <DetailResi detailId={params.detail} />
        </div>
      </section>
    </main>
  );
};

export default Page;
