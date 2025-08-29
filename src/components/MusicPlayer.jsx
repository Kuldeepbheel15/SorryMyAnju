"use client"

import { useRef, useState } from "react"

export default function MusicPlayer() {
    const audioRef = useRef(null)
    const [musicPlaying, setMusicPlaying] = useState(false)

    const handleStartMusic = () => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5
            audioRef.current.play().then(() => {
                setMusicPlaying(true)
            }).catch((err) => {
                console.error("Autoplay failed:", err)
            })
        }
    }

    const handleStopMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause()
            setMusicPlaying(false)
        }
    }

    return (
        <div>
            <audio ref={audioRef} loop>
                <source src="/audio/bg.mp3" type="audio/mpeg" />
            </audio>

            {!musicPlaying ? (
                <button onClick={handleStartMusic}>
                    ▶️ Start Music
                </button>
            ) : (
                <button onClick={handleStopMusic}>
                    ⏸️ Pause Music
                </button>
            )}
        </div>
    )
}
