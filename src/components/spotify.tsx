"use client";

import React from "react";

function SpotifyCard() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center px-4 sm:px-0">
      {/* Spotify Player */}
      <div className="relative z-10 w-full max-w-[400px]">
        <iframe
          className="rounded-2xl shadow-2xl w-full"
          src="https://open.spotify.com/embed/playlist/0rAdSPycrFdaBXh9xSW3ap?si=FVsUceiLRvKl3rjDYXM2Yg"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default SpotifyCard;
