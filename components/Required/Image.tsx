import React from "react";

const Image = () => {
  const link = "./Me2.jpg";
  return (
    <div>
      <img
        className=" rounded-full object-cover w-120 h-120 md:w-190 md:h-190 lg:w-250 lg:h-250 hover:shadow-2xl hover:shadow-blue-200 "
        src={link}
        alt="image"
      />
    </div>
  );
};

export default Image;
