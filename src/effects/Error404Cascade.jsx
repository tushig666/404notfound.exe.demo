import React, { useEffect, useState } from "react";

const MAX_BARS = 30;

function randomStyle(i) {
  return {
    left: `${Math.random()*90}vw`,
    top: `${Math.random()*90}vh`,
    width: `${22 + Math.random()*18}vw`,
    transform: `skew(${Math.random()*8-4}deg)`,
    zIndex: 160 + i,
    animation: `glitchBar 0.7s infinite alternate`,
    filter: `brightness(${1+Math.random()*0.5}) blur(${Math.random()*2}px)`
  };
}

export default function Error404Cascade({ active }) {
  const [bars, setBars] = useState([]);
  useEffect(() => {
    if (!active) return;
    setBars([{ key: Math.random() }]);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    if (bars.length === 0) return;
    // Auto-delete after timeout
    const timers = bars.map((bar, i) => setTimeout(() => {
      setBars(b => b.filter(b2 => b2.key !== bar.key));
    }, 1800 + Math.random()*1200));
    return () => timers.forEach(clearTimeout);
  }, [bars, active]);

  function closeBar(idx) {
    setBars(b => {
      if (b.length >= MAX_BARS) return b.filter((_, i) => i !== idx);
      // Closing one spawns two more
      const newBars = [...b.filter((_, i) => i !== idx), { key: Math.random() }, { key: Math.random() }];
      return newBars.slice(0, MAX_BARS);
    });
  }

  if (!active) return null;
  return (
    <>
      {bars.map((bar, i) => (
        <div key={bar.key} className="fixed bg-black bg-opacity-90 border border-cyan-400 text-cyan-200 font-mono px-6 py-3 shadow-lg z-[160] animate-glitch-bar" style={randomStyle(i)}>
          <span className="font-bold">Error 404 Not Found</span>
          <button className="ml-6 px-2 py-1 bg-cyan-700 text-white rounded hover:bg-cyan-500" onClick={() => closeBar(i)}>Close</button>
        </div>
      ))}
      <style>{`
        @keyframes glitchBar {
          0% { filter: brightness(1) skew(0deg); }
          50% { filter: brightness(1.3) skew(6deg); }
          100% { filter: brightness(1) skew(0deg); }
        }
        .animate-glitch-bar { animation: glitchBar 0.7s infinite alternate; }
      `}</style>
    </>
  );
}
