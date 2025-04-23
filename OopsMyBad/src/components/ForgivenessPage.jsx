import { useState, useRef } from "react";

export default function ForgivenessPage() {
  const [decision, setDecision] = useState(null);
  const [rejectPos, setRejectPos] = useState({ x: 50, y: 50 });
  const buttonRef = useRef(null);

  const moveButton = () => {
    const x = Math.floor(Math.random() * 90) + 5;
    const y = Math.floor(Math.random() * 80) + 10;
    setRejectPos({ x, y });
  };

  if (decision === "forgiven") {
    return (
      <div className="min-h-screen bg-green-100 flex flex-col justify-center items-center text-center p-10">
        <h2 className="text-5xl font-bold text-green-700 mb-6">
          You Are Forgiven ❤️
        </h2>
        <p className="text-xl mb-4">
          Wow… your apology worked. Miracles do happen.
        </p>
        <p className="text-lg italic text-gray-700">Go and sin no more 🕊️</p>
        <button
          onClick={() => setDecision(null)}
          className="mt-8 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full"
        >
          Back to Choices
        </button>
      </div>
    );
  }

  if (decision === "rejected") {
    return (
      <div className="min-h-screen bg-red-100 flex flex-col justify-center items-center text-center p-10">
        <h2 className="text-5xl font-bold text-red-600 mb-6">REJECTED 💔</h2>
        <p className="text-xl mb-4">Oof. Not forgiven. That one hurt.</p>
        <p className="text-lg italic text-gray-700">Please reconsider… 🥺</p>
        <button
          onClick={() => setDecision(null)}
          className="mt-8 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full"
        >
          Reconsider
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-200 relative overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center min-h-screen p-10">
        <h2 className="text-5xl font-bold mb-10 text-purple-700">
          Will You Forgive Them?
        </h2>
        <div className="flex flex-row gap-6">
          <button
            onClick={() => setDecision("forgiven")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-xl"
          >
            Forgive 💖
          </button>
        </div>
      </div>

      {/* Sneaky Reject Button */}
      <button
        ref={buttonRef}
        onClick={() => setDecision("rejected")}
        onMouseEnter={moveButton}
        style={{
          position: "absolute",
          top: `${rejectPos.y}%`,
          left: `${rejectPos.x}%`,
          transform: "translate(-50%, -50%)",
        }}
        className="bg-red-500 text-white px-6 py-3 rounded-full text-xl transition-all duration-200"
      >
        Reject 😐
      </button>
    </div>
  );
}
