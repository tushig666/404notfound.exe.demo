import React, { useState } from "react";
import FractalExplosionEffect from "./FractalExplosionEffect";
import CursorCloneChaos from "./CursorCloneChaos";
import WebcamActiveNotification from "./WebcamActiveNotification";
import HtmlBreakdownEffect from "./HtmlBreakdownEffect";
import YouveWonTrap from "./YouveWonTrap";
import StaticTVFaceEffect from "./StaticTVFaceEffect";
import Error404Cascade from "./Error404Cascade";

export default function EffectManager() {
  const [activeEffects, setActiveEffects] = useState({
    fractal: false,
    cursor: false,
    webcam: false,
    html: false,
    won: false,
    static: false,
    error404: false
  });

  // Example triggers (replace with your own logic)
  // You can trigger effects via click, hover, scroll, or timed events
  return (
    <>
      <button className="fixed top-4 left-4 z-[200] bg-cyan-900 text-cyan-100 px-4 py-2 rounded shadow" onClick={() => setActiveEffects(e => ({...e, fractal: !e.fractal}))}>Fractal Explosion</button>
      <button className="fixed top-16 left-4 z-[200] bg-cyan-900 text-cyan-100 px-4 py-2 rounded shadow" onClick={() => setActiveEffects(e => ({...e, cursor: !e.cursor}))}>Cursor Chaos</button>
      <button className="fixed top-28 left-4 z-[200] bg-cyan-900 text-cyan-100 px-4 py-2 rounded shadow" onClick={() => setActiveEffects(e => ({...e, webcam: !e.webcam}))}>Webcam Notification</button>
      <button className="fixed top-40 left-4 z-[200] bg-cyan-900 text-cyan-100 px-4 py-2 rounded shadow" onClick={() => setActiveEffects(e => ({...e, html: !e.html}))}>HTML Breakdown</button>
      <button className="fixed top-52 left-4 z-[200] bg-cyan-900 text-cyan-100 px-4 py-2 rounded shadow" onClick={() => setActiveEffects(e => ({...e, won: !e.won}))}>You've Won Trap</button>
      <button className="fixed top-64 left-4 z-[200] bg-cyan-900 text-cyan-100 px-4 py-2 rounded shadow" onClick={() => setActiveEffects(e => ({...e, static: !e.static}))}>Static TV Face</button>
      <button className="fixed top-80 left-4 z-[200] bg-cyan-900 text-cyan-100 px-4 py-2 rounded shadow" onClick={() => setActiveEffects(e => ({...e, error404: !e.error404}))}>Error 404 Cascade</button>

      <FractalExplosionEffect active={activeEffects.fractal} onDone={() => setActiveEffects(e => ({...e, fractal: false}))} />
      <CursorCloneChaos active={activeEffects.cursor} />
      <WebcamActiveNotification active={activeEffects.webcam} />
      <HtmlBreakdownEffect active={activeEffects.html} />
      <YouveWonTrap active={activeEffects.won} />
      <StaticTVFaceEffect active={activeEffects.static} />
      <Error404Cascade active={activeEffects.error404} />
    </>
  );
}
