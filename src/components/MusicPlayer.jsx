import React, { useRef } from 'react';

function AudioPlayer() {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <button onClick={handlePlay}>Play Song</button>
      <audio ref={audioRef} src="/audio/bg.mp3" />
    </div>
  );
}

export default AudioPlayer;
