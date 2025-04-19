// src/components/ConfessionForm.jsx
import { useState } from "react";

export default function ConfessionForm() {
  const [confession, setConfession] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confession.trim().length > 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center mt-8 text-yellow-700 font-semibold text-xl">
        Your dramatic confession has been recorded 📜💔
        <br />
        They might forgive you... or roast you in their group chat. Good luck 🤞
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-lg bg-white shadow-xl rounded-xl p-6 border border-yellow-200"
    >
      <h2 className="text-2xl font-bold text-yellow-600 mb-4">
        My Public Apology 📣
      </h2>
      <label className="block text-left text-sm font-medium text-gray-700 mb-1">
        What did you do? Why do you deserve another chance?
      </label>
      <textarea
        value={confession}
        onChange={(e) => setConfession(e.target.value)}
        rows={4}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 mb-4"
        placeholder="Spill your guts. Make it Oscar-worthy."
        required
      />
      <button
        type="submit"
        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
      >
        Submit Apology Letter 💌
      </button>
    </form>
  );
}
