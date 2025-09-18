import React from "react";

const PremiumFontDetails = ({ premiumFont }) => {
  console.log(premiumFont);
  const {
    id,
    fontName,
    fontCategory,
    fontDetails,
    license,
    useCases,
    popularity,
    fontFormats,
    authorInfo,
    monthlyPrice,
    plan,
    fontFeatures,
  } = premiumFont;
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
      <div className="card-body">
        <span className="badge badge-xs badge-warning">{plan}</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{fontName}</h2>
          <span className="text-xl">{monthlyPrice}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <div>
            {fontFeatures.map((features) => (
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{features}</span>
              </li>
            ))}
          </div>
        </ul>
        {/* author info  */}
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <img
              className="w-10 rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
            <div>
              <p className="font-semibold">{authorInfo?.authorName}</p>
              <p className="text-gray-500">{authorInfo?.authorPassion}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <button className="btn btn-circle btn-outline">x</button>
            {/* <button className="btn btn-circle btn-outline">t</button> */}
            {/* <button className="btn btn-circle">y</button> */}
          </div>
        </div>
        <div className="mt-6">
          <button className="btn hover:bg-fuchsia-500 hover:text-white btn-block">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumFontDetails;
