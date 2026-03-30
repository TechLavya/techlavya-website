"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const MUSIC_VOLUME = 0.3;

  useEffect(() => {
    setIsMounted(true);

    if (audioRef.current) {
      audioRef.current.volume = MUSIC_VOLUME;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = MUSIC_VOLUME;

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!isMounted) return null;

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/background-music.mp3"
      />
      <button
        onClick={toggleMusic}
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-amber-200/25 bg-gradient-to-br from-amber-800 via-amber-700 to-orange-900 text-amber-50 shadow-[0_10px_28px_rgba(120,53,15,0.55)] transition-all duration-300 hover:scale-110 hover:from-amber-700 hover:via-amber-600 hover:to-orange-800 hover:shadow-[0_14px_34px_rgba(146,64,14,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 backdrop-blur-sm"
        aria-label={isPlaying ? "Mute music" : "Play music"}
        title={isPlaying ? "Mute music" : "Play music"}
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(251,191,36,0.45)_0%,_rgba(180,83,9,0.18)_45%,_transparent_75%)] blur-md" />
        <span className="pointer-events-none absolute -inset-1 rounded-full border border-amber-300/35 opacity-70 blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative">
          {isPlaying ? (
            <>
              <Volume2 className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </>
          ) : (
            <VolumeX className="w-6 h-6" />
          )}
        </div>
      </button>
    </>
  );
}
