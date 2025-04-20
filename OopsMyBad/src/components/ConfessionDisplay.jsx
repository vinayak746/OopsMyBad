import { useNavigate } from "react-router-dom";

export default function ConfessionDisplay() {
  const navigate = useNavigate();

  return (
    <div className="text-left bg-white shadow-lg p-6 rounded-xl">
      <p className="mb-4">
        Dear You,
        <br />
        <br />
        I messed up. I said things I didn’t mean and hurt you in the worst way.
        Every moment since, I’ve been haunted by the silence between us.
        <br />
        <br />
        You didn’t deserve that, and I’d do anything to take it back. This
        apology is not enough—but it’s the only place I can start.
        <br />
        <br />
        I’m sorry. Truly. Deeply.
      </p>

      <button
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => navigate("/forgiveness")}
      >
        I’ve Read It 😶
      </button>
    </div>
  );
}
