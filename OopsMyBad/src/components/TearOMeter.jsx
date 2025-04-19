// src/components/TearOMeter.jsx
import { useState } from "react";

export default function TearOMeter() {
  const [tears, setTears] = useState(5);

  return (
    <div className="flex flex-col items-center mt-10 w-full max-w-md">
      <label className="text-lg font-medium text-gray-700 mb-2">
        Tear-O-Meter™ 😭 – How Sorry Are You For Me?
      </label>
      <input
        type="range"
        min="0"
        max="10"
        value={tears}
        onChange={(e) => setTears(e.target.value)}
        className="w-full accent-red-500"
      />
      <p className="mt-3 text-pink-800 font-semibold text-xl">
        {tears < 3
          ? "A few sniffles 😢"
          : tears < 7
          ? "Ugly crying stage 😭"
          : "Niagara Falls of Regret 💦"}
      </p>
    </div>
  );
}
