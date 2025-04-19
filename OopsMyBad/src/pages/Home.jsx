// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-200 to-pink-100 text-center p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">I Messed Up 😞</h1>
      <p className="text-lg max-w-md text-gray-700">
        I know what I did. And this website? It's my humble, over-engineered
        apology. Click below to witness my emotional breakdown in HTML.
      </p>
      <button
        onClick={() => navigate("/apology")}
        className="mt-8 bg-red-500 text-white px-8 py-3 rounded-full text-lg hover:bg-red-600 transition-all shadow-lg"
      >
        View Full Apology
      </button>
    </div>
  );
}
