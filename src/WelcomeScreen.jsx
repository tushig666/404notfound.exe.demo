import React from "react";

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="fixed inset-0 w-full h-full min-h-screen flex flex-col items-center justify-center bg-black">
      <button
        className="px-8 py-4 text-2xl font-bold rounded shadow-lg bg-black border-2 border-cyan-400 neon-btn glitch"
        onClick={onStart}
        style={{ filter: "drop-shadow(0 0 8px #00f0ff)" }}
      >
        START
      </button>
    </div>
  );
}
