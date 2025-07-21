import { hideCursor } from "./effects/HideCursorEffect";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Effect404 from "./effects/Effect404";
import SystemErrorStack from "./effects/SystemErrorStack";
import CreepyEye from "./effects/CreepyEye";
import DistortedVoice from "./effects/DistortedVoice";
import StaticNoise from "./effects/StaticNoise";
import BlueScreenDeath from "./effects/BlueScreenDeath";
import GlitchMonster from "./effects/GlitchMonster";
import FakeTerminal from "./effects/FakeTerminal";
import LockFreeze from "./effects/LockFreeze";
import SoulSpinner from "./effects/SoulSpinner";
import ErrorBarStack from "./effects/ErrorBarStack";
import GifEffect from "./effects/GifEffect";
import { gifList } from "./effects/gifList";

import BlackoutScreen from "./effects/BlackoutScreen";
import WelcomeBackgroundGif from "./effects/WelcomeBackgroundGif";
import WelcomeScreen from "./WelcomeScreen";
import './App.css'

const effects = [
  Effect404,
  SystemErrorStack,
  CreepyEye,
  DistortedVoice,
  StaticNoise,
  BlueScreenDeath,
  GlitchMonster,
  FakeTerminal,
  LockFreeze,
  SoulSpinner,
];

function getRandomEffect(clicks) {
  // Every 10 clicks, trigger a secret deeper glitch
  if (clicks > 0 && clicks % 10 === 0) return BlueScreenDeath;
  return effects[Math.floor(Math.random() * effects.length)];
}

export default function App() {
  const [effectIdx, setEffectIdx] = useState(null);
  const [clicks, setClicks] = useState(() => {
    const stored = localStorage.getItem("bdn_clicks");
    return stored ? parseInt(stored) : 0;
  });
  const [delay, setDelay] = useState(false);
  const [activeEffects, setActiveEffects] = useState([]);
  const [activeGifs, setActiveGifs] = useState([]);
  const [effectPositions, setEffectPositions] = useState([]);
  const [requireRefresh, setRequireRefresh] = useState(false);
  const [blackout, setBlackout] = useState(false);
  const [started, setStarted] = useState(false);
  const [buttonPos, setButtonPos] = useState({top: '50%', left: '50%'});
  // Replace with your welcome GIF URL
  const welcomeGif = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTByYmlyMzJycDI5aWN5YjM3OGFvbzkxOGt3bmszcDk0ZGd2aXZkMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GnoI7TdOv0IiiHanXg/giphy.gif";

  useEffect(() => {
    localStorage.setItem("bdn_clicks", clicks);
  }, [clicks]);

  // Replace effect logic with multiple random effects
  const handleClick = () => {
    if (requireRefresh) return;
    setDelay(true);
    setActiveEffects([]);
    setActiveGifs([]);
    // Randomize button position (avoid edges)
    const randTop = 20 + Math.random() * 60; // 20% to 80% of screen height
    const randLeft = 15 + Math.random() * 70; // 15% to 85% of screen width
    setButtonPos({top: `${randTop}%`, left: `${randLeft}%`});
    // Randomly pick one of: GIF chaos, text warnings, blackout, mouse hide, or classic effects
    const r = Math.random();
    if (r < 0.22) {
      // GIF chaos: pick 5-6 random GIFs, spawn 10-20 of each, layering
      const pickCount = 5 + Math.floor(Math.random() * 2); // 5-6
      const pickedGifs = [];
      for (let i = 0; i < pickCount; i++) {
        pickedGifs.push(gifList[Math.floor(Math.random() * gifList.length)]);
      }
      let gifLayerCount = 10 + Math.floor(Math.random() * 11); // 10-20 per picked gif
      let gifDelay = 0;
      for (let i = 0; i < pickedGifs.length; i++) {
        for (let j = 0; j < gifLayerCount; j++) {
          setTimeout(() => {
            setActiveGifs(prev => [
              ...prev,
              {
                src: pickedGifs[i],
                key: Math.random(),
              }
            ]);
          }, gifDelay);
          gifDelay += 60 + Math.floor(Math.random() * 40);
        }
      }
      setTimeout(() => setDelay(false), gifDelay + 500);
      return;
    } else if (r < 0.44) {
      // Text warnings (spawn only FakeTerminal or similar text effects)
      setEffectPositions(
        Array.from({ length: 8 + Math.floor(Math.random() * 6) }).map(() => ({
          top: `${Math.random() * 80}vh`,
          left: `${Math.random() * 80}vw`,
          scale: 0.7 + Math.random() * 0.5,
          rotate: Math.random() * 40 - 20,
          opacity: 0.8 + Math.random() * 0.2,
          anim: Math.random() > 0.5 ? 'animate-bounce' : 'animate-pulse',
          idx: 7 // index of FakeTerminal
        }))
      );
      setTimeout(() => {
        setActiveEffects(effectPositions.map(pos => ({ ...pos, key: Math.random() })));
        setDelay(false);
      }, 400);
      return;
    } else if (r < 0.62) {
      // Blackout
      setBlackout(true);
      setTimeout(() => {
        setBlackout(false);
        setDelay(false);
      }, 5000 + Math.random() * 5000);
      return;
    } else if (r < 0.78) {
      // Mouse hide
      hideCursor(4000 + Math.random() * 3000);
      setTimeout(() => setDelay(false), 4200);
      return;
    } else {
      // Classic chaotic effects (all types)
      setEffectPositions(
        Array.from({ length: 30 + Math.floor(Math.random() * 20) }).map(() => ({
          top: `${Math.random() * 95}vh`,
          left: `${Math.random() * 95}vw`,
          scale: 0.3 + Math.random() * 0.7,
          rotate: Math.random() * 80 - 40,
          opacity: 0.6 + Math.random() * 0.4,
          anim: Math.random() > 0.5 ? 'animate-bounce' : 'animate-pulse',
          idx: Math.floor(Math.random() * effects.length)
        }))
      );
      setTimeout(() => {
        setActiveEffects(effectPositions.map(pos => ({ ...pos, key: Math.random() })));
        setDelay(false);
      }, 400);
      return;
    }
  };

  // Remove effect when closed (for FakeTerminal)
  const handleCloseEffect = (key) => {
    setActiveEffects((prev) => prev.filter((e) => e.key !== key));
    // When closing FakeTerminal, spawn 3-6 more random effects
    const newEffects = Array.from({ length: 3 + Math.floor(Math.random() * 4) }).map(() => {
      const idx = Math.floor(Math.random() * effects.length);
      return { idx, key: Math.random() };
    });
    setActiveEffects((prev) => [...prev, ...newEffects]);
  };

  return (
    <div className="fixed inset-0 w-full h-full min-h-screen flex flex-col items-center justify-center bg-black font-mono text-cyan-300">
      {!started ? (
        <div className="fixed inset-0 w-full h-full min-h-screen flex flex-col items-center justify-center bg-black">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div style={{marginTop: '8vh'}}>
              <WelcomeBackgroundGif src={welcomeGif} size={240} />
            </div>
            <button
              className="px-4 py-2 text-lg font-bold rounded shadow-lg bg-black border-2 border-cyan-400 neon-btn glitch mt-6"
              onClick={() => { setStarted(true); setClicks(0); localStorage.setItem('bdn_clicks', 0); }}
              style={{ filter: "drop-shadow(0 0 8px #00f0ff)", marginTop: '24px' }}
            >
              START
            </button>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 w-full h-full min-h-screen flex flex-col items-center justify-center bg-black">
          {!blackout && <ErrorBarStack />}
          {!blackout && <div className="crt-scanlines crt-flicker"></div>}
          {!blackout && (
            <div className="z-[9999] flex flex-col items-center justify-center w-full h-full" style={{position:'fixed', inset:0, pointerEvents:'none'}}>
              <button
                className={`px-8 py-4 text-2xl font-bold rounded shadow-lg bg-black border-2 border-cyan-400 neon-btn glitch ${requireRefresh ? 'opacity-50 cursor-not-allowed' : ''}`}
                data-text={delay ? "..." : activeEffects.length === 0 ? "DO NOT PRESS" : requireRefresh ? "REFRESH REQUIRED" : "PRESS AGAIN"}
                onClick={(e) => { e.stopPropagation(); handleClick(); setClicks(c => c + 1); }}
                disabled={delay || requireRefresh}
                style={{ position:'absolute', zIndex:9999, top:buttonPos.top, left:buttonPos.left, transform:'translate(-50%, -50%)', pointerEvents:'auto' }}
              >
                {delay ? "..." : activeEffects.length === 0 ? "DO NOT PRESS" : requireRefresh ? "REFRESH REQUIRED" : "PRESS AGAIN"}
              </button>
              {requireRefresh && (
                <div className="mt-2 text-blue-400 font-bold animate-pulse" style={{position:'absolute', top:`calc(${buttonPos.top} + 60px)`, left:buttonPos.left, transform:'translate(-50%, 0)', zIndex:9999, pointerEvents:'auto'}}>Please refresh the page to continue</div>
              )}
              <div className="mt-4 text-cyan-400 text-sm glitch" data-text={`Clicks: ${clicks}`} style={{position:'absolute', top:`calc(${buttonPos.top} + 100px)`, left:buttonPos.left, transform:'translate(-50%, 0)', zIndex:9999, pointerEvents:'auto'}}>{`Clicks: ${clicks}`}</div>
            </div>
          )}
          {/* GIF effects spawn in layers */}
          {!blackout && (
            <AnimatePresence>
              {activeGifs.map((gif, i) => (
                <GifEffect key={gif.key} src={gif.src} />
              ))}
            </AnimatePresence>
          )}
          {!blackout && (
            <AnimatePresence>
              {activeEffects.map((effect, i) => {
                const EffectComponent = effects[effect.idx];
                // Prevent effects from overlapping the button area (except HideCursor, Blackout)
                const buttonArea = { left: window.innerWidth * parseFloat(buttonPos.left)/100 - 170, top: window.innerHeight * parseFloat(buttonPos.top)/100 - 45, right: window.innerWidth * parseFloat(buttonPos.left)/100 + 170, bottom: window.innerHeight * parseFloat(buttonPos.top)/100 + 45 };
                const effectLeft = parseFloat(effect.left);
                const effectTop = parseFloat(effect.top);
                // Only move effects if they overlap the button area
                if (
                  EffectComponent !== BlackoutScreen &&
                  EffectComponent !== hideCursor &&
                  effectLeft > buttonArea.left && effectLeft < buttonArea.right &&
                  effectTop > buttonArea.top && effectTop < buttonArea.bottom
                ) {
                  // Move effect up above the button
                  return (
                    <div key={effect.key} style={{position:'fixed', top:`${buttonArea.top-120}px`, left:effect.left, zIndex:100, transform:`scale(${effect.scale}) rotate(${effect.rotate}deg)`, opacity:effect.opacity}} className={effect.anim}>
                      <EffectComponent />
                    </div>
                  );
                }
                if (EffectComponent === FakeTerminal) {
                  return (
                    <div key={effect.key} style={{position:'fixed', top:effect.top, left:effect.left, zIndex:100, transform:`scale(${effect.scale}) rotate(${effect.rotate}deg)`, opacity:effect.opacity}} className={effect.anim}>
                      <FakeTerminal onClose={() => handleCloseEffect(effect.key)} />
                    </div>
                  );
                }
                return (
                  <div key={effect.key} style={{position:'fixed', top:effect.top, left:effect.left, zIndex:100, transform:`scale(${effect.scale}) rotate(${effect.rotate}deg)`, opacity:effect.opacity}} className={effect.anim}>
                    <EffectComponent />
                  </div>
                );
              })}
            </AnimatePresence>
          )}
          {blackout && <BlackoutScreen duration={7000} onRestore={() => { setBlackout(false); setDelay(false); }} />}
        </div>
      )}
    </div>
  );
}
