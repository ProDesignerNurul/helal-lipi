import React from "react";

const Header = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-3/4 mx-auto">
            <h1 className="text-5xl font-bold">
              হেলাল লিপি তে আপনাকে স্বাগতম।
            </h1>
            <p className="py-6 text-justify">
              আপনাদের সকলকে জানাই স্বাগতম ও আন্তরিক শুভেচ্ছা। এই ওয়েবসাইটে
              আপনাদের উপস্থিতি আমাদের আনন্দিত করেছে। আমরা আশা করি আমাদের
              তথ্যগুলো আপনাদের উপকারে আসবে এবং আপনারা আমাদের সাথে একটি সুন্দর
              সময় কাটাবেন। ধন্যবাদ।
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-ceber">সোশ্যাল মিডিয়া</h2>
        <div className="bg-red-600 p-4 md:p-10 grid grid-cols-3 gap-4">
          <button className="btn btn-semibold w-full py-8 md:py-16">
            হেলাল লিপি এর অফিসিয়াল ফেইসবুক পেইজ
          </button>
          <button className="btn btn-semibold w-full">ইনস্টাগ্রাম</button>
          <button className="btn btn-semibold w-full">ফেইসবুক</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
