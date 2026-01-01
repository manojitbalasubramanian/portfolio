import React, { useRef, useState } from "react";
import audioFile from "../Assets/audio.mp3";

const MusicButton: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop volume={0.2} src={audioFile} />

      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          zIndex: 9999,
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          padding: "6px 10px",
          borderRadius: "50px",
          boxShadow: "0 6px 18px rgba(0, 0, 0, 0.18)",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "#fff", flexShrink: 0 }}
        >
          <path
            d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
            fill="currentColor"
          />
        </svg>

        <button
          className="music-button-clean"
          onClick={handleToggle}
          aria-label={playing ? "Pause music" : "Play music"}
          title={playing ? "Pause music" : "Play music"}
        >
          {playing ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="6" y="5" width="4" height="14" fill="currentColor" />
              <rect x="14" y="5" width="4" height="14" fill="currentColor" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default MusicButton;
