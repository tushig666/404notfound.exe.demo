import { useState, useEffect } from "react";
const errors = ["SYSTEM ERROR", "FATAL EXCEPTION", "MEMORY LEAK", "STACK OVERFLOW", "ACCESS DENIED"];
export default function SystemErrorStack() {
  const [windows, setWindows] = useState([]);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setWindows((w) => [...w, errors[i % errors.length]]);
      i++;
    }, 300);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {windows.map((msg, idx) => (
        <div key={idx} className="absolute left-1/2 top-1/2" style={{transform:`translate(-50%,-50%) scale(${1+idx*0.05}) rotate(${idx*2}deg)`}}>
          <div className="bg-black border-2 border-red-500 text-red-500 font-mono p-4 shadow-lg glitch" data-text={msg}>{msg}</div>
        </div>
      ))}
    </div>
  );
}
