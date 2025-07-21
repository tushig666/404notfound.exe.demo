export default function InfiniteSpinner() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50" style={{textShadow:'0 0 8px #00f0ff'}}>
      <div className="flex flex-row gap-12 mb-16">
        <div className="rounded-full h-[22vw] w-[22vw] border-t-[2vw] border-b-[2vw] border-purple-500" style={{animation: 'spin 0.25s linear infinite'}}></div>
        <div className="rounded-full h-[16vw] w-[16vw] border-t-[1.5vw] border-b-[1.5vw] border-cyan-400" style={{animation: 'spin 0.18s linear infinite'}}></div>
        <div className="rounded-full h-[12vw] w-[12vw] border-t-[1vw] border-b-[1vw] border-blue-400" style={{animation: 'spin 0.13s linear infinite'}}></div>
        <div className="rounded-full h-[8vw] w-[8vw] border-t-[0.7vw] border-b-[0.7vw] border-pink-400" style={{animation: 'spin 0.09s linear infinite'}}></div>
        <div className="rounded-full h-[6vw] w-[6vw] border-t-[0.5vw] border-b-[0.5vw] border-yellow-400" style={{animation: 'spin 0.07s linear infinite'}}></div>
      </div>
      <div className="text-[7vw] text-cyan-300 font-bold mb-6">Rebooting the universe…</div>
      <div className="text-[3vw] text-cyan-400 mt-6">Please wait ∞ years</div>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg);} 100% {transform: rotate(360deg);} }`}</style>
    </div>
  );
}
