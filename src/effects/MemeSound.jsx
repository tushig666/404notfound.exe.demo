import { useEffect } from "react";
const sounds = [
  "https://www.myinstants.com/media/sounds/bruh.mp3",
  "https://www.myinstants.com/media/sounds/why-would-you-click-that.mp3",
  "https://www.myinstants.com/media/sounds/windows-xp-error.mp3"
];
export default function MemeSound() {
  useEffect(() => {
    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.play();
    return () => audio.pause();
  }, []);
  return null;
}
