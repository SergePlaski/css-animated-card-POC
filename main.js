// This code is for demo only: 
// simulates hover for the first card when app is loaded
document.addEventListener("DOMContentLoaded", () => {
  const card1 = document.querySelector("#card1");

  let hoverTimer;
  let resetTimer;

  function cleanup() {
    clearTimeout(hoverTimer);
    clearTimeout(resetTimer);
  }

  // Simulate hover when the app loads (demo)
  cleanup(); // Clear existing timers, if any

  hoverTimer = setTimeout(() => {
    card1.classList.add("hover");

    resetTimer = setTimeout(() => {
      card1.classList.remove("hover");
    }, 1500);
  }, 1500);

  // Clean up on unload
  window.addEventListener("unload", cleanup, { once: true });
});