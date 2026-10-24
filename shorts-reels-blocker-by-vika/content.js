// Shorts & Reels Blocker: content script.
// Handles in-app (single page app) navigation, which declarativeNetRequest
// cannot see. If the current page is a Shorts/Reels page, cover it with a message.

(function () {
  const host = location.hostname;

  // Returns true when the current URL is a Shorts or Reels page.
  function isBlockedPage() {
    const path = location.pathname;
    if (host.endsWith("youtube.com")) {
      return /^\/shorts(\/|$)/.test(path);
    }
    if (host.endsWith("instagram.com") || host.endsWith("facebook.com")) {
      // Matches /reels, /reels/, /reel/123, /username/reel/123
      return /(^|\/)reels?(\/|$)/.test(path);
    }
    return false;
  }

  // Full-page message shown in place of the blocked content.
  function showBlockedOverlay() {
    if (document.getElementById("srb-overlay")) return;
    const overlay = document.createElement("div");
    overlay.id = "srb-overlay";
    overlay.style.cssText =
      "position:fixed;inset:0;z-index:2147483647;background:#111;color:#fff;" +
      "display:flex;flex-direction:column;align-items:center;justify-content:center;" +
      "font-family:system-ui,sans-serif;text-align:center;padding:24px;";
    overlay.innerHTML =
      '<h1 style="font-size:28px;margin:0 0 12px;">Blocked</h1>' +
      '<p style="font-size:16px;opacity:.85;margin:0 0 20px;">Shorts and Reels are blocked by your extension.</p>' +
      '<a href="/" style="color:#fff;background:#e00;padding:10px 18px;border-radius:8px;text-decoration:none;">Go to home</a>';
    document.documentElement.appendChild(overlay);
  }

  function removeOverlay() {
    const el = document.getElementById("srb-overlay");
    if (el) el.remove();
  }

  function check() {
    if (isBlockedPage()) {
      showBlockedOverlay();
    } else {
      removeOverlay();
    }
  }

  // Run on load, on SPA navigation events, and on a light interval as a fallback.
  check();
  window.addEventListener("popstate", check);
  window.addEventListener("yt-navigate-finish", check);
  document.addEventListener("yt-navigate-finish", check);
  setInterval(check, 1000);
})();
