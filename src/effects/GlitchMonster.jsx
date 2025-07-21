import { motion } from "framer-motion";
const ascii = `
  .-''''-.
 /        \
|  .--.  .--. |
| (    \/    )|
|  '--'  '--' |
 \        /
  '-....-'
`;
export default function GlitchMonster() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 flex items-center justify-center z-50">
      <pre className="glitch text-cyan-400 text-lg font-mono text-center" data-text={ascii}>{ascii}</pre>
    </motion.div>
  );
}
