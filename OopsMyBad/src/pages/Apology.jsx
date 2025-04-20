// src/pages/Apology.jsx
import { useNavigate } from "react-router-dom";
import TearOMeter from "../components/TearOMeter.jsx";
import ConfessionDisplay from "../components/ConfessionDisplay.jsx";
export default function Apology() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-rose-100 to-pink-200 text-center px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
        I’m So, So Sorry 😔
      </h1>
      <p className="max-w-2xl text-lg text-gray-800 mb-8">
        I made a mistake. A colossal, catastrophic, meme-worthy mistake. Whether
        it was ghosting you mid-convo or eating your fries when I said I wasn’t
        hungry… I was wrong. Utterly, deeply, unapologetically wrong. And now, I
        stand here (virtually)... pleading for your forgiveness, like a dramatic
        side character in a telenovela.
      </p>

      <TearOMeter />
      <ConfessionDisplay />

      <button
        onClick={() => navigate("/")}
        className="mt-8 text-sm underline text-gray-600 hover:text-red-600"
      >
        Go back and try again?
      </button>
    </div>
  );
}
