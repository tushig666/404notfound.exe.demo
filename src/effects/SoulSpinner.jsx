import { motion } from "framer-motion";
export default function SoulSpinner() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-400 mb-6"></div>
      <div className="glitch text-xl text-cyan-400 font-bold" data-text="Uploading your soul...">Uploading your soul...</div>
      <div className="text-sm text-cyan-400 mt-2">Please wait ∞ years</div>
    </motion.div>
  );
}
