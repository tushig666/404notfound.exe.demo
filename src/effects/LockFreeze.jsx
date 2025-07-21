import { useEffect, useState } from "react";
export default function LockFreeze() {
  const [locked, setLocked] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLocked(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  return locked ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
      <div className="flex flex-col items-center">
        <div className="text-6xl text-cyan-400 animate-pulse">⛓</div>
        <div className="glitch text-xl mt-4" data-text="Screen Locked">Screen Locked</div>
      </div>
    </div>
  ) : null;
}
