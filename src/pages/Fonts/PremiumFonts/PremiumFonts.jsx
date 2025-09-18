import React, { useEffect, useState } from "react";
import PremiumFontDetails from "./PremiumFontDetails";

const PremiumFonts = () => {
  const [premiumFonts, setPremiumFonts] = useState("");
  useEffect(() => {
    fetch("Fonts.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPremiumFonts(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center text-5xl">প্রিমিয়াম ফন্ট</h2>
      <div className="grid grid-cols-3 gap-4">
        {premiumFonts &&
          premiumFonts.map((premiumFont) => (
            <PremiumFontDetails
              key={premiumFont.id}
              premiumFont={premiumFont}
            />
          ))}
      </div>
    </div>
  );
};

export default PremiumFonts;
