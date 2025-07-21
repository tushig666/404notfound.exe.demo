import { motion } from "framer-motion";

export default function GifEffect({ src, style = {}, className = "", onClose }) {
  // Randomize position, size, rotation, zIndex for chaos
  const random = () => Math.random();
  const top = `${random() * 80 + 5}vh`;
  const left = `${random() * 80 + 5}vw`;
  const size = `${random() * 120 + 80}px`;
  const rotate = `${random() * 40 - 20}deg`;
  const z = Math.floor(random() * 10) + 10;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "fixed",
        top,
        left,
        width: size,
        height: size,
        zIndex: z,
        pointerEvents: "auto",
        ...style,
      }}
      className={className}
    >
      <motion.img
        src={src}
        alt="gif effect"
        initial={{ opacity: 0, scale: 1.2, rotate: -8 }}
        animate={{ opacity: 0.85, scale: 1, rotate }}
        transition={{ duration: 1.2 }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "16px",
          boxShadow: "none",
          mixBlendMode: "screen",
          filter: "blur(1px) brightness(1.2)",
        }}
      />
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-2 py-1 bg-blue-900 bg-opacity-80 text-cyan-300 font-bold rounded shadow border border-blue-700 text-xs glitch hover:scale-110 transition-all"
          style={{
            textShadow: "0 0 8px #0ff, 0 0 2px #fff",
            boxShadow: "0 0 12px #0ff",
            filter: "drop-shadow(0 0 4px #0ff)",
          }}
        >
          ✖
        </button>
      )}
    </motion.div>
  );
}
