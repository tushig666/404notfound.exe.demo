import React from 'react';
import { motion } from 'framer-motion';
import { gifList } from '../effects/gifList';
import { gifList2 } from '../effects/gifList2';

const EffectComponent = () => {
  const combinedGifList = [...gifList, ...gifList2];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {combinedGifList.map((gif, index) => (
        <motion.img
          key={index}
          src={gif}
          alt={`Effect ${index}`}
          className="w-full h-auto rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
};

export default EffectComponent;