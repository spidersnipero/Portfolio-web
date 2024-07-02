import React from "react";

const Image = () => {
  const link =
    "https://www.shutterstock.com/shutterstock/photos/1554086789/display_1500/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg";
  return (
    <div>
      <img
        className=" rounded-full w-120 h-120 md:w-190 md:h-190 lg:w-250 lg:h-250"
        src={link}
        alt="image"
      />
    </div>
  );
};

export default Image;
