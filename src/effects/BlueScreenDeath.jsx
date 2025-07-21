import { motion } from "framer-motion";
export default function BlueScreenDeath() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-blue-900 flex items-center justify-center z-50">
      <div className="glitch text-3xl font-bold text-center text-red-500 animate-pulse" data-text="💀 SYSTEM FAILURE 💀">
        💀 SYSTEM FAILURE 💀
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="crt-scanlines crt-flicker"></div>
      </div>
    </motion.div>
  );
}
