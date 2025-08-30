"use client";

import { useRef, useState } from "react";

export default function MusicPlayer({ src }) {
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
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      background: "#e91e63",
      color: "#fff",
      padding: "16px 24px",
      borderRadius: "999px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      zIndex: 9999
    }} onClick={togglePlay}>
      {isPlaying ? "⏸ Pause Music" : "▶ Play Music"}
      <audio ref={audioRef} <MusicPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
 preload="auto" loop />
    </div>
  );
}
