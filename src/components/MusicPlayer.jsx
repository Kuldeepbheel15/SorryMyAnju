"use client";

import { useRef, useState } from "react";

export default function MusicPlayerPage() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Play failed:", err);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111",
        color: "#fff",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Simple Music Player</h1>

      <button
        onClick={togglePlay}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#e91e63",
          border: "none",
          borderRadius: "8px",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {isPlaying ? "⏸ Pause Music" : "▶ Play Music"}
      </button>

      <audio
        ref={audioRef}
        src="/audio/bg.mp3" // make sure this file exists
        preload="auto"
        loop
      />
    </div>
  );
}
