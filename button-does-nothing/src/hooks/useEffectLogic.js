import { useState, useEffect } from 'react';
import { gifList } from '../effects/gifList';
import { gifList2 } from '../effects/gifList2';

const useEffectLogic = () => {
  const [activeGifs, setActiveGifs] = useState([]);
  const [isSpawning, setIsSpawning] = useState(false);

  const spawnGif = () => {
    const randomGif = Math.random() < 0.5 ? gifList[Math.floor(Math.random() * gifList.length)] : gifList2[Math.floor(Math.random() * gifList2.length)];
    setActiveGifs((prevGifs) => [...prevGifs, randomGif]);
  };

  useEffect(() => {
    if (isSpawning) {
      const interval = setInterval(spawnGif, 1000);
      return () => clearInterval(interval);
    }
  }, [isSpawning]);

  const startSpawning = () => setIsSpawning(true);
  const stopSpawning = () => setIsSpawning(false);

  return { activeGifs, startSpawning, stopSpawning };
};

export default useEffectLogic;