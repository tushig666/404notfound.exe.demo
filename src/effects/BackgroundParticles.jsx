import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Scanline, flicker, and glitch overlays
function CRTOverlay() {
  return (
    <>
      <div className="crt-scanlines crt-flicker pointer-events-none fixed inset-0 z-50"></div>
      <div className="fixed inset-0 pointer-events-none z-50" style={{background:"radial-gradient(circle at 50% 50%, rgba(0,255,255,0.08) 0%, transparent 80%)"}}></div>
      {/* Glitch overlay */}
      <div className="fixed inset-0 pointer-events-none z-50" style={{background:"repeating-linear-gradient(90deg,rgba(0,255,255,0.04) 0px,rgba(0,255,255,0.04) 2px,transparent 4px,transparent 8px)",mixBlendMode:'screen'}}></div>
    </>
  );
}

export default function BackgroundParticles() {
  // Glitchy floating particles
  const particles = useRef(
    Array.from({ length: 24 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 1.2 + Math.random() * 1.8,
      speed: 6 + Math.random() * 6,
      char: Math.random() > 0.7 ? "░" : Math.random() > 0.5 ? "▒" : "•",
      color: ["#00f0ff", "#00bfff", "#00eaff", "#00c8ff"][Math.floor(Math.random()*4)]
    }))
  );

  useEffect(() => {
    // Subtle screen flicker effect
    const flicker = () => {
      document.body.classList.add("crt-flicker");
      setTimeout(() => document.body.classList.remove("crt-flicker"), 120);
    };
    const interval = setInterval(flicker, 800 + Math.random()*400);
    return () => clearInterval(interval);
  }, []);

  // Subtle static audio (optional, can be commented out)
  useEffect(() => {
    const audio = new Audio("https://cdn.pixabay.com/audio/2022/10/16/audio_12b7b7e2e7.mp3");
    audio.loop = true;
    audio.volume = 0.05;
    audio.play();
    return () => { audio.pause(); audio.currentTime = 0; };
  }, []);

  return (
    <>
      <CRTOverlay />
      {/* Randomized eerie GIF overlays */}
      {[...Array(10)].map((_, i) => {
        const gifs = [
          "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmJlNG5sOW1kb29sZzBvdDBmaXZ4bHJyeDA4MWZ6aXVqZmJmZGkzZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26xBHklzttKHVB7bO/giphy.gif",
          "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2E3cHZicDg1NWsyaTJtNGM4aXc1bWt3dGsybWwwZWpiY3hnZWlmbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FGEoQJ3mjVK6phK/giphy.gif",
          "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjFmbGNpNGpyOXl0eXNyMDJnZ3lodTRkdHV6NGxsZ2dqZGJyNWpscSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dSelYqqojyZZTMAQ9N/giphy.gif",
          "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGRidXN3cndjN3VzN2VyeTF6ejdxOGJoMThwcnVqbmx1eDkyOWhobSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FGA0xBoEElheOC4/giphy.gif",
          "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3p3MzI4MzB6aWxocGlvazdjc2p3eGI5Ymx3anJiazR1b2F4eDRidCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FPI4fkuuYO8m4GQ/giphy.gif",
          "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDJnaWJqamJ5czQyOWUwbG51dm85bTNqejBiZGFldW1ybTA5bXo5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1BgQGVL7sWzaob7y/giphy.gif",
          "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3RtYjlkb2Zpcng5azZzY2V2dm9id3o0ZXlxZ2FyYXJydmgyd2NwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7aTmkuoVVXIPWPS/giphy.gif"
        ];
        const idx = Math.floor(Math.random() * gifs.length);
        const opacities = [0.60,0.40,0.30,0.25,0.22,0.18,0.15,0.13,0.11,0.09];
        const blurs = [1,2,2.5,2,2.5,2.5,2.5,3,3.5,4];
        const grays = [0.7,0.8,0.9,0.85,0.9,0.95,0.95,0.96,0.97,0.98];
        const brights = [1.2,1.1,1.05,1.08,1.05,1.02,1.02,1.01,1.01,1.01];
        return (
          <img
            key={i}
            src={gifs[idx]}
            alt={`Glitch Layer ${i}`}
            className="fixed inset-0 w-full h-full object-cover pointer-events-none z-40 mix-blend-screen"
            style={{
              opacity: opacities[i],
              filter: `blur(${blurs[i]}px) grayscale(${grays[i]}) brightness(${brights[i]})`,
              animation: `glitchLayer${i} 0.7s linear ${Math.random()}s infinite alternate`
            }}
          />
        );
      })}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {particles.current.map((p, i) => (
          <motion.div
            key={i}
            initial={{ y: p.y, x: p.x, opacity: 0.18 }}
            animate={{
              y: [p.y, p.y + 40 + Math.random()*60, p.y],
              opacity: [0.18, 0.32, 0.18],
              filter: [
                "blur(0.5px) brightness(1.2)",
                "blur(1.2px) brightness(1.6)",
                "blur(0.5px) brightness(1.2)"
              ]
            }}
            transition={{ duration: p.speed, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", left: p.x, top: p.y, fontSize: `${p.size}rem`, color: p.color, fontFamily: 'Consolas, Courier New, monospace', pointerEvents: 'none', userSelect: 'none' }}
          >
            {p.char}
          </motion.div>
        ))}
      </div>
    </>
  );
}
