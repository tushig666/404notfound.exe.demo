import { motion } from "framer-motion";
const emojis = ["💥", "😹", "🔥", "🤯", "🎉", "😂", "😜", "🥳", "😈", "👾"];
export default function EmojiExplosion() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: Math.random() * window.innerWidth, opacity: 1 }}
          animate={{ y: window.innerHeight + 50, opacity: 0 }}
          transition={{ duration: 1.2 + Math.random(), ease: "ease-in" }}
          style={{ position: "absolute", fontSize: "2rem" }}
        >
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </motion.div>
      ))}
    </div>
  );
}
