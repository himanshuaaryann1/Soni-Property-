import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

/* ==================== ARENA PROTECTION SCRIPT ==================== */
// Comprehensive protection against Arena overlays, watermarks, and injections

// Function to remove Arena elements
function removeArenaElements() {
  // Remove Arena iframes
  document.querySelectorAll('iframe[src*="arena" i]').forEach(el => el.remove());
  
  // Remove Arena scripts
  document.querySelectorAll('script[src*="arena" i]').forEach(el => el.remove());
  
  // Remove elements with Arena class names
  document.querySelectorAll('[class*="arena" i]').forEach(el => el.remove());
  
  // Remove elements with Arena IDs
  document.querySelectorAll('[id*="arena" i]').forEach(el => el.remove());
  
  // Remove elements with Arena data attributes
  document.querySelectorAll('[data-provider*="arena" i]').forEach(el => el.remove());
  document.querySelectorAll('[data-arena]').forEach(el => el.remove());
  
  // Remove common Arena widget patterns
  document.querySelectorAll('.arena-overlay, .arena-popup, .arena-widget, .arena-banner, .arena-watermark').forEach(el => el.remove());
  
  // Remove floating overlays with high z-index (potential Arena elements)
  document.querySelectorAll('[style*="z-index"][class*="arena" i]').forEach(el => el.remove());
}

// Run removal on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removeArenaElements);
} else {
  removeArenaElements();
}

// Monitor for dynamically injected Arena elements
const observer = new MutationObserver(() => {
  removeArenaElements();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['class', 'id', 'src', 'data-provider'],
});

// Block Arena scripts from executing
const originalScript = window.eval;
window.eval = function(...args) {
  const code = String(args[0]);
  if (code.toLowerCase().includes('arena')) {
    console.warn('[Arena Protection] Blocked script execution');
    return;
  }
  return originalScript.apply(this, args);
};

// Prevent Arena from modifying window object
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'arena', {
    configurable: false,
    value: undefined,
  });
  Object.defineProperty(window, 'ArenaSDK', {
    configurable: false,
    value: undefined,
  });
  Object.defineProperty(window, '_arena', {
    configurable: false,
    value: undefined,
  });
}

/* ==================== END ARENA PROTECTION ==================== */

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
