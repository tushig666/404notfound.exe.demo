import React, { useEffect, useRef, useState } from "react";

const NUM_CLONES = 18;

function CursorSVG() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="drop-shadow-glow">
      <polygon points="0,0 32,16 16,32 12,24 0,0" fill="#00f0ff" stroke="#0ff" strokeWidth="2" />
    </svg>
  );
}

export default function CursorCloneChaos({ active }) {
  const [positions, setPositions] = useState(Array(NUM_CLONES).fill({ x: -100, y: -100 }));
  const mouse = useRef({ x: -100, y: -100 });
  const trails = useRef(Array(NUM_CLONES).fill({ x: -100, y: -100 }));

  useEffect(() => {
    if (!active) return;
    document.body.classList.add("cursor-none");
    const move = e => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", move);
    let frame;
    function animate() {
      trails.current = trails.current.map((pos, i) => {
        const prev = i === 0 ? mouse.current : trails.current[i - 1];
        return {
          x: pos.x + (prev.x - pos.x) * (0.2 + Math.random()*0.1),
          y: pos.y + (prev.y - pos.y) * (0.2 + Math.random()*0.1)
        };
      });
      setPositions([...trails.current]);
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("cursor-none");
      cancelAnimationFrame(frame);
    };
  }, [active]);

  if (!active) return null;
  return (
    <>
      {positions.map((pos, i) => (
        <div
          key={i}
          className="fixed pointer-events-none z-[99]"
          style={{
            left: pos.x - 8 + Math.sin(i*2)*6,
            top: pos.y - 8 + Math.cos(i*2)*6,
            opacity: 0.7 - i*0.025,
            transform: `scale(${1.1 - i*0.03}) rotate(${i*12}deg)`,
            filter: `blur(${i*0.5}px) brightness(${1.2-i*0.02})`
          }}
        >
          <CursorSVG />
        </div>
      ))}
    </>
  );
}
