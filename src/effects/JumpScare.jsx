import { useEffect } from "react";
export default function JumpScare() {
  useEffect(() => {
    const audio = new Audio("https://www.myinstants.com/media/sounds/vine-boom.mp3");
    audio.play();
    return () => audio.pause();
  }, []);
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <img src="https://i.imgur.com/1Q9Z1Z1.png" alt="scary" className="w-full h-full object-cover" />
    </div>
  );
}
