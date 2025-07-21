import React, { useEffect, useState } from "react";

const TAGS = ["<div>", "<body>", "<button>", "<span>", "<section>", "<main>", "<input>", "<form>", "<img>"];

function randomTag() {
  return TAGS[Math.floor(Math.random() * TAGS.length)];
}

function randomStyle(i) {
  return {
    left: `${Math.random() * 100}vw`,
    top: `${-10 + Math.random() * 110}vh`,
    fontSize: `${1.2 + Math.random() * 2.5}rem`,
    color: `#00ff00`,
    opacity: 0.7 - Math.random()*0.5,
    transform: `rotate(${Math.random()*40-20}deg) skew(${Math.random()*10-5}deg)`,
    filter: `blur(${Math.random()*2}px) brightness(${1+Math.random()*0.5})`,
    zIndex: 100 + i
  };
}

export default function HtmlBreakdownEffect({ active }) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    if (!active) return;
    let running = true;
    function spawnTag() {
      if (!running) return;
      setTags(t => [...t, { tag: randomTag(), key: Math.random() }]);
      setTimeout(spawnTag, 120 + Math.random()*180);
    }
    spawnTag();
    return () => { running = false; setTags([]); };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    // Remove tags after 2.5s
    if (tags.length > 0) {
      const t = setTimeout(() => setTags(tags.slice(1)), 400);
      return () => clearTimeout(t);
    }
  }, [tags, active]);

  if (!active) return null;
  return (
    <div className="fixed inset-0 bg-black z-[110] overflow-hidden">
      <div className="absolute inset-0 w-full h-full animate-glitch-binary" style={{background:"linear-gradient(180deg,#001a00 0%,#003300 100%)"}}></div>
      {tags.map((t, i) => (
        <div key={t.key} className="absolute font-mono font-bold animate-tag-fall" style={randomStyle(i)}>{t.tag}</div>
      ))}
      <style>{`
        @keyframes tag-fall {
          0% { opacity: 0; transform: translateY(-40px) scale(1) rotate(0deg); }
          60% { opacity: 1; transform: translateY(40vh) scale(1.1) rotate(10deg); }
          100% { opacity: 0; transform: translateY(100vh) scale(0.8) rotate(-10deg); }
        }
        .animate-tag-fall { animation: tag-fall 2.2s cubic-bezier(.7,-0.5,.7,1.5) forwards; }
        @keyframes glitch-binary {
          0%,100% { filter: hue-rotate(0deg) brightness(1); }
          50% { filter: hue-rotate(40deg) brightness(1.3); }
        }
        .animate-glitch-binary { animation: glitch-binary 3s infinite alternate; }
      `}</style>
    </div>
  );
}
