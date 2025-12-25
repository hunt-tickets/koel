'use client';

import { useEffect, useRef, useState } from 'react';
import { VolumeX, Volume2 } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  showMuteButton?: boolean;
  playbackRate?: number;
}

export default function VideoPlayer({
  src,
  poster,
  className = '',
  autoPlay = true,
  loop = true,
  muted: initialMuted = true,
  controls = false,
  showMuteButton = true,
  playbackRate = 1,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(initialMuted);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate
    video.playbackRate = playbackRate;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Handle visibility change to pause/play video
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else if (autoPlay) {
        video.play().catch(() => {
          // Auto-play was prevented
          console.log('Auto-play prevented');
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [autoPlay, playbackRate]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={isMuted}
        controls={controls}
        playsInline
        className="w-full h-full object-cover"
      />

      {showMuteButton && (
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 p-3 rounded-full glass-dark text-white hover:bg-white/30 transition-all duration-300"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6" />
          ) : (
            <Volume2 className="w-6 h-6" />
          )}
        </button>
      )}
    </div>
  );
}
