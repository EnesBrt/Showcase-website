import React, { useState, useEffect, useRef } from 'react';

const styles = {
  youtubeHero: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    opacity: 1,
    transition: 'opacity 0.5s ease-in-out',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 2rem',
    opacity: 1,
    transition: 'opacity 0.5s ease-in-out',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: 'white',
    marginBottom: '2rem',
    maxWidth: '40rem',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    transition: 'background-color 0.3s',
    border: 'none',
    cursor: 'pointer',
  },
  muteButton: {
    position: 'absolute',
    bottom: '2rem',
    left: '2rem',
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  hidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
  visible: {
    opacity: 1,
    pointerEvents: 'auto',
  }
};

const YouTubeHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      new YT.Player('youtube-player', {
        videoId: 'UuwXzmUNJIk',
        playerVars: {
          autoplay: 0, // Changé à 0 pour empêcher l'autoplay
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
          },
          onStateChange: (event) => {
            setIsPlaying(event.data === YT.PlayerState.PLAYING);
          }
        }
      });
    };
  }, []);

  const startVideo = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
      setIsPlaying(true);
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
    <div style={styles.youtubeHero}>
      <div id="youtube-player" style={styles.video}></div>
      <div style={{...styles.overlay, ...(isPlaying ? styles.hidden : styles.visible)}}></div>
      <div style={{...styles.content, ...(isPlaying ? styles.hidden : styles.visible)}}>
        <h1 style={styles.title}>Exploration Sous-Marine</h1>
        <p style={styles.subtitle}>Plongez dans les mystères des profondeurs océaniques</p>
        {!isPlaying && (
          <button 
            onClick={startVideo}
            style={styles.button}
          >
            Découvrir
          </button>
        )}
      </div>
      {isPlaying && (
        <button 
          onClick={toggleMute}
          style={styles.muteButton}
        >
          {isMuted ? 'Activer le son' : 'Couper le son'}
        </button>
      )}
    </div>
  );
};

export default YouTubeHero;