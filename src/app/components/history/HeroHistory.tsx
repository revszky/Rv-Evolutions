import React from "react";

import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";

const HeroHistory = () => {
  const background = [
    "https://fastly.picsum.photos/id/808/1920/1080.jpg?hmac=F5GHMKc6mj7fz0ZmTCySRPYFVY8gV2VaoFz16-ONrug",
  ];
  return (
    <div className="flex flex-col">
      <div
        className="fixed -z-40 flex items-center justify-center w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
    </div>
  );
};

export default HeroHistory;
