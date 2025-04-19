import { useState } from "react";

export default function ForgivenessPage() {
  const [forgiven, setForgiven] = useState(false);
  const [clickedNo, setClickedNo] = useState(false);

  const handleForgive = () => {
    setForgiven(true);
  };

  const handleNotForgive = () => {
    setClickedNo(true);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-8">
        I’m Sorry! Please Forgive Me 🙏
      </h1>

      {!forgiven && !clickedNo ? (
        <>
          <p className="text-xl mb-6">
            I know I messed up, but I’m really trying to fix things. Please,
            forgive me? 💔
          </p>
          <div className="flex gap-6">
            <button
              onClick={handleForgive}
              className="bg-green-500 px-6 py-3 rounded-lg text-white hover:bg-green-600 transition"
            >
              I Forgive You 💖
            </button>
            <button
              onClick={handleNotForgive}
              className="bg-red-500 px-6 py-3 rounded-lg text-white hover:bg-red-600 transition"
            >
              Not Yet 🫣
            </button>
          </div>
        </>
      ) : null}

      {forgiven && (
        <div className="mt-8 text-2xl">
          <p>Thank you for forgiving me! You’re a true hero 🦸‍♂️💥</p>
          <button
            onClick={() => setForgiven(false)}
            className="mt-6 bg-purple-500 px-6 py-3 rounded-lg text-white hover:bg-purple-600 transition"
          >
            Start Over 😅
          </button>
        </div>
      )}

      {clickedNo && (
        <div className="mt-8 text-center">
          <p className="text-xl">
            I see you're not ready to forgive me… but here's a meme to cheer you
            up!
          </p>
          <img
            src="https://media.giphy.com/media/Ju7l5y8p5DTq8/giphy.gif"
            alt="Not yet forgiven"
            className="mt-6 rounded-xl"
          />
          <button
            onClick={handleForgive}
            className="mt-6 bg-yellow-500 px-6 py-3 rounded-lg text-white hover:bg-yellow-600 transition"
          >
            Okay, Fine, I Forgive You 😂
          </button>
        </div>
      )}
    </div>
  );
}
