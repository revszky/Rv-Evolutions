"use client";
import React, { useState } from "react";

const ArchivesMobile = () => {
  const images = [
    {
      src: "https://fastly.picsum.photos/id/437/500/500.jpg?hmac=4A4Nc_CJMkPoXQ9Lje_DF-OX1xpidgsyV_XaAFwi0eY",
      title: "Image 1",
    },
    {
      src: "https://fastly.picsum.photos/id/1014/500/500.jpg?hmac=IzRie6X2O3Z3eNoIESSHwScKgUrmrQ2ozOVNmeTT9g4",
      title: "Image 2",
    },
    {
      src: "https://fastly.picsum.photos/id/307/500/500.jpg?hmac=5dYElKIPcY5zPPQBVJ30Cusmfl2oOsd119oq96e6-Tg",
      title: "Image 3",
    },
    {
      src: "https://fastly.picsum.photos/id/1063/500/500.jpg?hmac=hMMeY8PDQbzi3p5JZVrZClVz-ejoEVfYKrhKBXv-lTE",
      title: "Image 4",
    },
    {
      src: "https://fastly.picsum.photos/id/161/500/500.jpg?hmac=q1Dxq7a7_D87mjXcPLAleHA6Rpdjr0GjDiaM1KGHutw",
      title: "Image 5",
    },
    {
      src: "https://fastly.picsum.photos/id/629/500/500.jpg?hmac=VOmpB84_hQ2C_pk1hdolpBSIJqU2j5D52tJ4WFXKSeg",
      title: "Image 6",
    },
    {
      src: "https://fastly.picsum.photos/id/719/500/500.jpg?hmac=IHocu2FRHKpodM6zBX4naLOxwaWhIj4KWj8OFOTyqKM",
      title: "Image 7",
    },
    {
      src: "https://fastly.picsum.photos/id/1018/500/500.jpg?hmac=oMRZn8SYyf1AoWeCyhpPIwhWsUV1QN1RFcYL1lijwLg",
      title: "Image 8",
    },
    {
      src: "https://fastly.picsum.photos/id/267/500/500.jpg?hmac=EgYYR4vOAKPZRt-U_7pSsFpAooNhOlfQLhQccveylPI",
      title: "Image 9",
    },
    {
      src: "https://fastly.picsum.photos/id/456/500/500.jpg?hmac=KYHI5Sn9DyLi9OUIYX1OlevuzoFyqfTSJBlolYPCaV8",
      title: "Image 10",
    },
    {
      src: "https://fastly.picsum.photos/id/102/500/500.jpg?hmac=B0KI1e2bgYjHUk7tfMIQ_w6Q3TbnQSYJDrWuNNHx_-o",
      title: "Image 11",
    },
    {
      src: "https://fastly.picsum.photos/id/367/500/500.jpg?hmac=Wzm0QDfnRl9RI_ViqGafJD9vlS12uturZnvzQkRyk0w",
      title: "Image 12",
    },
  ];

  const [visibleImages, setVisibleImages] = useState(4);

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 4);
  };

  return (
    <div className="w-full px-4 text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4">
        {images.slice(0, visibleImages).map((image, index) => (
          <div key={index}>
            <div className="p-2">
              <img src={image.src} alt={image.title} />
            </div>

            <div className="px-2 text-left">
              <h1 className="font-mono">{image.title}</h1>
            </div>
          </div>
        ))}
      </div>
      {visibleImages < images.length && (
        <div className="flex items-center justify-center py-4">
          <button
            className="font-mono font-bold text-center"
            onClick={loadMoreImages}
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default ArchivesMobile;
