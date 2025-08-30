"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

export default function MusicPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onError = () => {
      console.error("Audio failed to load:", audio.src);
    };
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("error", onError);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Audio play error:", error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="fixed bottom-5 right-5 bg-pink-600 bg-opacity-80 rounded-full p-3 shadow-lg flex items-center cursor-pointer select-none z-50"
      onClick={togglePlay}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") togglePlay();
      }}
    >
      <audio ref={audioRef} <MusicPlayer src="/audio/bg.mp3" /> loop preload="auto" />

      {isPlaying ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          <rect x="6" y="5" width="4" height="14" rx="1" />
          <rect x="14" y="5" width="4" height="14" rx="1" />
        </motion.svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </div>
  );
      }
        
