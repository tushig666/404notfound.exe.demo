import React, { useEffect, useState } from "react";

export default function WebcamActiveNotification({ active }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    if (!show) return;
    // Optional TTS
    const msg = new window.SpeechSynthesisUtterance("Camera activated. Monitoring...");
    window.speechSynthesis.speak(msg);
  }, [show]);

  if (!show) return null;
  return (
    <div className="fixed top-6 right-6 z-[120] flex items-center bg-black bg-opacity-80 px-5 py-2 rounded-lg shadow-lg border border-red-600 animate-fade-in">
      <span className="mr-3 text-red-500 font-bold">●</span>
      <span className="text-cyan-200 font-mono text-lg">Your Webcam is On</span>
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 1.2s ease; }
      `}</style>
    </div>
  );
}
