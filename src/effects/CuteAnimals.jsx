import { motion } from "framer-motion";
const animals = ["🐣", "🐥", "🐶", "🐱", "🐰", "🦊", "🐼", "🐧", "🦄", "🐸"];
export default function CuteAnimals() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -100 }}
          animate={{ x: window.innerWidth + 100 }}
          transition={{ duration: 1.5 + Math.random(), ease: "ease-in-out" }}
          style={{ position: "absolute", top: `${Math.random() * window.innerHeight}px`, fontSize: "2.5rem" }}
        >
          {animals[Math.floor(Math.random() * animals.length)]}
        </motion.div>
      ))}
    </div>
  );
}
