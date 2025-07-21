export default function BlueScreen() {
  return (
    <div className="fixed inset-0 bg-blue-900 text-cyan-300 flex flex-col items-center justify-center z-50 font-mono" style={{textShadow:'0 0 8pxrgb(47, 0, 255)'}}>
      <div className="text-3xl mb-4">💀 SYSTEM FAILURE 💀</div>
      <div className="text-lg">A fatal error has occurred.<br />
        <span className="text-blue-300">Error Code: BUTTON_CLICKED_TOO_MUCH</span>
      </div>
      <div className="mt-8 animate-pulse">Press any key to continue...<br />Or just refresh.</div>
    </div>
  );
}
