import React from "react";

export default function WelcomeBackgroundGif({ src, size = 180 }) {
  return (
    <div className="flex flex-col items-center justify-center w-full" style={{zIndex:10, marginTop: '32px'}}>
      <img
        src={src}
        alt="welcome gif"
        className="rounded-xl shadow-lg"
        style={{ maxWidth: "70vw", width: `${size+40}px`, height: "auto", background: "#000" }}
      />
    </div>
  );
}
