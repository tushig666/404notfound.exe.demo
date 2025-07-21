import { useEffect } from "react";
export default function DistortedVoice() {
  useEffect(() => {
    const audio = new Audio("https://cdn.pixabay.com/audio/2022/10/16/audio_12b7b7e2e7.mp3");
    audio.play();
    return () => audio.pause();
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="glitch text-2xl font-bold text-center" data-text="You weren’t supposed to click that…">
        You weren’t supposed to click that…
      </div>
    </div>
  );
}
