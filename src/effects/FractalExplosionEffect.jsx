import React, { useState, useEffect } from "react";
import fractalGif from "/assets/fractal.gif";

// Helper to get all visible divs/buttons
function getAllUIElements() {
  return Array.from(document.querySelectorAll("div,button"));
}

export default function FractalExplosionEffect({ active, onDone }) {
  const [fragments, setFragments] = useState([]);
  useEffect(() => {
    if (!active) return;
    const elements = getAllUIElements();
    const rects = elements.map(el => el.getBoundingClientRect());
    setFragments(rects.map((rect, i) => ({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      key: i,
      color: `rgba(0,255,255,${0.2 + Math.random() * 0.7})`
    })));
    // Remove after 2s
    const t = setTimeout(() => {
      setFragments([]);
      if (onDone) onDone();
    }, 2000);
    return () => clearTimeout(t);
  }, [active, onDone]);

  if (!active) return null;
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <img src={fractalGif} alt="Fractal" className="absolute inset-0 w-full h-full object-cover opacity-80 animate-pulse" style={{zIndex:1}} />
      {fragments.map(f => (
        <div
          key={f.key}
          className="absolute"
          style={{
            left: f.left,
            top: f.top,
            width: f.width,
            height: f.height,
            background: f.color,
            borderRadius: "8px",
            zIndex: 2,
            animation: `fragmentExplode 1.2s cubic-bezier(.7,-0.5,.7,1.5) forwards`,
            filter: `blur(${2 + Math.random() * 6}px)`
          }}
        />
      ))}
      <style>{`
        @keyframes fragmentExplode {
          0% { transform: scale(1) rotate(0deg); opacity: 1; }
          60% { transform: scale(1.3) rotate(30deg); opacity: 0.7; }
          100% { transform: scale(2.5) rotate(${Math.random()*360}deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
