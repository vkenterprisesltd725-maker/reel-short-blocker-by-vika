# Shorts and Reels Blocker

A lightweight Chrome extension that blocks YouTube Shorts, Instagram Reels, and Facebook Reels so you can browse without falling into the endless scroll.

## What it blocks

- YouTube Shorts pages (youtube.com/shorts) - you get a "Blocked" page instead
- Instagram Reels (instagram.com/reels)
- Facebook Reels (facebook.com/reels)
- The Shorts shelf on the YouTube homepage, Shorts cards in search, and the Shorts sidebar link
- The Reels tab on Instagram and Facebook

Shorts or Reels opened through in-app navigation (not a fresh page load) are caught by a content script too.

## Install (Chrome, 3 steps)

1. Unzip this folder.
2. Open chrome://extensions in Chrome.
3. Turn on Developer mode (top right), click "Load unpacked", and select the unzipped shorts-reels-blocker folder.

That's it. The extension works immediately.

## Files

- manifest.json - extension config (Manifest V3)
- rules.json - redirect rules that block Shorts/Reels page loads
- blocked.html / blocked.js - the "Blocked" page with a go-back button
- content.js - catches Shorts/Reels reached through in-app navigation
- hide.css - hides the Shorts shelf and Reels tabs
- icons/ - extension icons (16, 48, 128 px)

## Notes

- Built for Chrome (Manifest V3); should also work in Edge and other Chromium browsers.
- Site layouts change over time, so the hiding rules may occasionally need a small update. The URL-level blocking is the most reliable layer.
- No data collection, no permissions beyond what is needed to block these pages.
