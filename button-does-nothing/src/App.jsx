import React from 'react';
import EffectComponent from './components/EffectComponent';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl font-bold mb-4">Button Does Nothing</h1>
      <p className="text-lg mb-8">Click the button and enjoy the chaos!</p>
      <button className="px-4 py-2 bg-blue-500 text-cyan-300 rounded hover:bg-blue-600 transition" style={{textShadow:'0 0 8px #00f0ff'}}>
        Click Me!
      </button>
      <EffectComponent />
    </div>
  );
};

export default App;