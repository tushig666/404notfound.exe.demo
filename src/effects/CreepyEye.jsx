import { motion } from "framer-motion";
export default function CreepyEye() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: 2, duration: 0.6 }} className="w-32 h-32 rounded-full bg-black border-4 border-cyan-400 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-black"></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }} className="absolute inset-0 flex items-center justify-center">
          <span className="text-cyan-400 text-2xl font-bold">👁</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
