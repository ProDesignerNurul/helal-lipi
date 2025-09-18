import React from "react";
import MainTitle from "../../components/MainTitle";

const SocialMeadia = () => {
  return (
    <div>
      <MainTitle mainTitle={"সোশ্যাল মিডিয়া"} />
      <div className="bg-red-600 p-4 md:p-10 grid grid-cols-3 gap-4">
        <button className="btn btn-semibold w-full py-8 md:py-16">
          হেলাল লিপি এর অফিসিয়াল ফেইসবুক পেইজ
        </button>
        <button className="btn btn-semibold w-full py-8 md:py-16">
          হেলাল লিপি এর অফিসিয়াল ইনস্টাগ্রাম
        </button>
        <button className="btn btn-semibold w-full py-8 md:py-16">
          হেলাল লিপি এর অফিসিয়াল ফেইসবুক পেইজ
        </button>
      </div>
    </div>
  );
};

export default SocialMeadia;
