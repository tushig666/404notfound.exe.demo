import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BlackoutScreen({ duration = 7000, onRestore }) {
  const [restoring, setRestoring] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRestoring(true);
      setTimeout(() => {
        if (onRestore) onRestore();
      }, 1200);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onRestore]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      style={{ transition: "opacity 0.8s" }}
    >
      {/* Fade in/fade out effect */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: restoring ? 0 : 1 }}
        transition={{ duration: 1.2 }}
        className="w-full h-full bg-black"
        style={{ backgroundColor: '#000' }}
      />
    </motion.div>
  );
}
