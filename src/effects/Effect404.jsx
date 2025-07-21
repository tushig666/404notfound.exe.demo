import { motion } from "framer-motion";
export default function Effect404() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="glitch text-5xl font-bold text-center" data-text="404 NOT FOUND">
        404 NOT FOUND
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{mixBlendMode:'screen'}}>
        <div className="crt-scanlines crt-flicker"></div>
      </div>
    </motion.div>
  );
}
