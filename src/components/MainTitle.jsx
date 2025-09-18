import React from "react";

const MainTitle = ({ mainTitle, subTitle }) => {
  return (
    <div>
      <h2 className="text-center text-5xl font-semibold my-4 md:my-6">
        {mainTitle}
      </h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default MainTitle;
