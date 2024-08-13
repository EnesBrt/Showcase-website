import React, { useState, useEffect, useRef } from 'react';

const YouTubeHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      new YT.Player('youtube-player', {
        videoId: 'UuwXzmUNJIk',
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          loop: 1,
          playlist: 'UuwXzmUNJIk',
          mute: 1,
          start: 0
        },
        events: {
          onReady: (event) => {
            playerRef.current = event.target;
            event.target.playVideo();
            setIsPlaying(true);
          }
        }
      });
    };
  }, []);

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="youtube-hero">
      <div id="youtube-player" className="youtube-hero__video"></div>
      <div className="youtube-hero__overlay"></div>
      <div className="youtube-hero__content">
        <h1 className="youtube-hero__title">Exploration Sous-Marine</h1>
        <p className="youtube-hero__subtitle">Plongez dans les mystères des profondeurs océaniques</p>
        <button 
          onClick={togglePlay}
          className="youtube-hero__button"
        >
          {isPlaying ? 'Pause' : 'Découvrir'}
        </button>
      </div>
      <button 
        onClick={toggleMute}
        className="youtube-hero__mute-button"
      >
        {isMuted ? 'Activer le son' : 'Couper le son'}
      </button>
    </div>
  );
};

export default YouTubeHero;