import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const messages = [
  "HACKING DEVICE...",
  "INJECTING CODE...",
  "ACCESSING MAINFRAME...",
  "UPLOADING YOUR SOUL...",
  "OVERRIDING SECURITY...",
  "DISABLING FIREWALL...",
  "ERASING SYSTEM FILES...",
  "COMPROMISING NETWORK...",
  "EXECUTING MALWARE...",
  "COMPLETE CONTROL GRANTED!"
];

export default function FakeTerminal({ onClose }) {
  const [typed, setTyped] = useState("");
  const [danger, setDanger] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped((t) => t + (messages[i] ? messages[i] + "\n" : ""));
      if (messages[i] && (messages[i].includes("SOUL") || messages[i].includes("ERASING") || messages[i].includes("COMPLETE"))) {
        setDanger(true);
      }
      i++;
      if (i >= messages.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 180); // much faster typing
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 flex items-center justify-center z-[999]">
      <div className={`relative bg-black border-2 border-blue-700 p-6 font-mono text-lg shadow-2xl glitch ${danger ? 'text-blue-400 animate-pulse' : 'text-cyan-400'}`} style={{width:'90vw',maxWidth:480,boxShadow:'0 0 32px #0ff, 0 0 8px #00f0ff',zIndex:1}}>
        {/* GIF as content, not overlay */}
        <motion.img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGxwaTVvend1dXdjeTFuYnR4MXp4czNoM2FkcWRrYWF4ZXViOTh5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26xBHklzttKHVB7bO/giphy.gif"
          alt="hacker gif"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            width: '100%',
            maxHeight: '180px',
            objectFit: 'contain',
            borderRadius: '12px',
            marginBottom: '1rem',
            boxShadow: '0 0 24px #0ff, 0 0 8px #00f0ff',
          }}
        />
        <pre style={{letterSpacing:'2px',fontWeight:'bold',fontSize:'1.25rem',textShadow:'0 0 8px #0ff, 0 0 2px #00f0ff'}}>{typed}</pre>
        {done && (
          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-cyan-300 font-extrabold rounded-full shadow-2xl border-2 border-blue-700 text-lg tracking-widest glitch hover:scale-105 hover:bg-blue-800 transition-all"
            style={{
              textShadow: '0 0 12px #0ff',
              boxShadow: '0 0 24px #0ff',
              letterSpacing: '0.2em',
              filter: 'drop-shadow(0 0 8px #0ff)',
            }}
          >
            716 CLOSE
          </button>
        )}
      </div>
    </motion.div>
  );
}
