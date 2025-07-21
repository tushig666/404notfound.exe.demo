import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const errorMessages = [
  "404 ERROR: Resource Not Found",
  "SYSTEM ERROR: Glitch Detected",
  "NETWORK FAILURE: Connection Lost",
  "VIRUS DETECTED!",
  "MONITOR FAILURE: CRT GLITCH",
  "ACCESS DENIED",
  "MEMORY LEAK: System Unstable",
  "CODE CORRUPTION: Unknown Exception",
  "HACKER ALERT: Intrusion Detected",
  "PROCESS HALTED: Loading..."
];

function getRandomError() {
  return errorMessages[Math.floor(Math.random() * errorMessages.length)];
}

export default function ErrorBarStack() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    // Add a new error bar every 10-20 seconds
    const interval = setInterval(() => {
      setBars((prev) => {
        // Only keep max 10 bars
        const newBars = [...prev, {
          id: Date.now() + Math.random(),
          msg: getRandomError(),
        }];
        return newBars.slice(-10);
      });
    }, 10000 + Math.random() * 10000);
    return () => clearInterval(interval);
  }, []);

  // Remove oldest bar when a new one is added
  useEffect(() => {
    if (bars.length > 10) {
      setTimeout(() => {
        setBars((prev) => prev.slice(1));
      }, 3000);
    }
  }, [bars]);

  return (
    <div className="fixed top-0 left-0 w-full flex flex-col items-center z-[100] pointer-events-none">
      <AnimatePresence>
        {bars.map((bar, idx) => (
          <motion.div
            key={bar.id}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="bg-black bg-opacity-90 border border-cyan-400 text-cyan-300 font-mono px-6 py-2 mb-2 shadow-lg glitch"
            style={{
              width: '80vw',
              maxWidth: 500,
              fontSize: '1.1rem',
              position: 'relative',
              zIndex: 100 + idx,
              filter: 'drop-shadow(0 0 8px #00f0ff)',
              left: `${Math.random() * 20 - 10}px`,
              top: `${Math.random() * 10}px`,
              opacity: 0.95 - idx * 0.07,
            }}
          >
            {bar.msg}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
