import { motion } from "framer-motion";
export default function StaticNoise() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="absolute inset-0 w-full h-full" style={{background:"url('https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif') center/cover",mixBlendMode:'screen',opacity:0.5}}></div>
      <div className="glitch text-4xl font-bold text-center" data-text="REBOOTING...">
        REBOOTING...
      </div>
    </motion.div>
  );
}
