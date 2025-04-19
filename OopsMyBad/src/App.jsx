// src/App.jsx
import React from "react";

function App() {
  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">I Messed Up.</h1>
      <p className="text-lg text-gray-700 max-w-xl">
        I know what I did. And this website? It's my humble, over-engineered
        apology. Click below to witness my emotional breakdown in HTML.
      </p>
      <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all shadow-lg">
        Read My Apology
      </button>
    </main>
  );
}

export default App;
