import React from "react";

const collection = [
  "https://fastly.picsum.photos/id/50/300/300.jpg?hmac=OWBcjk58-GZvJc5dEq9oADDWwuAz2_wxk-MXZ37GRHs",

  "https://fastly.picsum.photos/id/271/300/300.jpg?hmac=gxbzS-CvNnW76MBMqJ1n3gx_TZBYr6rnwZMygtiPB38",

  "https://fastly.picsum.photos/id/506/300/300.jpg?hmac=gmD5V7qL4CEWACeGq_yvYPnz7JoFqWaLioJEn38mefM",

  "https://fastly.picsum.photos/id/390/300/300.jpg?hmac=vIwFiXdW16lazu7WfEtZYsQ3UJSXWKISG7tOiTT-nhc",

  "https://fastly.picsum.photos/id/18/300/300.jpg?hmac=RfFlFeFYTCqdxb7qXoqG9RFy8AGCs2o3bFYa98TuH6U",

  "https://fastly.picsum.photos/id/107/300/300.jpg?hmac=FI0__yexKtFkHnuBfrFrQQmagFU6cjt7IB21YVmOTO0",

  "https://fastly.picsum.photos/id/348/300/300.jpg?hmac=wkcO7Tj40eNEQP6HOQ9jBualRFsCavnenW-EEu8o7Ys",

  "https://fastly.picsum.photos/id/493/300/300.jpg?hmac=E6Fv6KH8Tbw42v56m8unmT4WUOC8a4TQ-0CFPdBECGQ",
];

const GalleryCollection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {collection.map((galerry, index) => (
          <div
            className="w-full h-28 md:w-[170px] md:h-[170px] lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[300px]"
            key={index}
          >
            <img
              src={galerry}
              alt="gallery"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCollection;
