import React, { useState } from "react";

export default function YouveWonTrap({ active }) {
  const [trapped, setTrapped] = useState(false);
  if (!active) return null;
  if (trapped) {
    return (
      <div className="fixed inset-0 bg-red-900 z-[130] flex flex-col items-center justify-center animate-flicker overflow-hidden">
        <div className="text-[7vw] text-yellow-300 font-extrabold animate-shake">Too greedy. You were warned.</div>
        <div className="text-[3vw] text-red-400 font-mono animate-shake mt-8">System lockdown. <span className="animate-pulse">⚠️</span></div>
        <audio autoPlay loop src="/assets/alarm.mp3" />
        <style>{`
          @keyframes shake { 0% { transform: translateX(0) skew(0deg); } 20% { transform: translateX(-8px) skew(-8deg); } 40% { transform: translateX(8px) skew(8deg); } 60% { transform: translateX(-4px) skew(-4deg); } 80% { transform: translateX(4px) skew(4deg); } 100% { transform: translateX(0) skew(0deg); } }
          .animate-shake { animation: shake 0.18s infinite; }
          @keyframes flicker { 0%,100% { opacity: 1; } 50% { opacity: 0.7; filter: hue-rotate(20deg) brightness(1.2); } }
          .animate-flicker { animation: flicker 0.3s infinite alternate; }
        `}</style>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-yellow-200 via-pink-200 to-cyan-200 z-[120] flex flex-col items-center justify-center overflow-hidden">
      <div className="text-[6vw] text-pink-600 font-extrabold animate-pulse">YOU'VE WON!</div>
      <div className="text-[2vw] text-blue-700 font-mono mt-8 animate-pulse">Click to claim your prize!</div>
      <button className="mt-12 px-12 py-6 bg-red-500 text-white text-[2vw] font-bold rounded-lg shadow-lg animate-shake" onClick={() => setTrapped(true)}>CLAIM</button>
      <style>{`
        @keyframes shake { 0% { transform: translateX(0) skew(0deg); } 20% { transform: translateX(-8px) skew(-8deg); } 40% { transform: translateX(8px) skew(8deg); } 60% { transform: translateX(-4px) skew(-4deg); } 80% { transform: translateX(4px) skew(4deg); } 100% { transform: translateX(0) skew(0deg); } }
        .animate-shake { animation: shake 0.18s infinite; }
      `}</style>
    </div>
  );
}
