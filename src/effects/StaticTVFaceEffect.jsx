import React, { useEffect, useState } from "react";

export default function StaticTVFaceEffect({ active }) {
  const [showFace, setShowFace] = useState(false);
  useEffect(() => {
    if (!active) return;
    setShowFace(false);
    const t1 = setTimeout(() => setShowFace(true), 2500 + Math.random()*1000);
    const t2 = setTimeout(() => setShowFace(false), 3200 + Math.random()*400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [active]);

  if (!active) return null;
  return (
    <div className="fixed inset-0 z-[140] bg-black flex items-center justify-center overflow-hidden">
      <img src="/assets/static.gif" alt="Static" className="absolute inset-0 w-full h-full object-cover opacity-80 animate-pulse" style={{zIndex:1}} />
      <audio autoPlay loop src="/assets/static.mp3" />
      {showFace && (
        <img src="/assets/face.png" alt="Face" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] object-contain z-[150] animate-flash" />
      )}
      <style>{`
        @keyframes flash { 0% { opacity: 0; } 20% { opacity: 1; filter: brightness(2); } 80% { opacity: 1; } 100% { opacity: 0; } }
        .animate-flash { animation: flash 0.7s linear; }
      `}</style>
    </div>
  );
}
