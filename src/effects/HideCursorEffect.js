// Temporarily hides the mouse cursor for a set duration
export function hideCursor(duration = 6000) {
  if (!window.__hideCursorCount) window.__hideCursorCount = 0;
  window.__hideCursorCount++;
  document.body.style.cursor = "none";
  setTimeout(() => {
    window.__hideCursorCount--;
    if (window.__hideCursorCount <= 0) {
      document.body.style.cursor = "";
      window.__hideCursorCount = 0;
    }
  }, duration);
}
