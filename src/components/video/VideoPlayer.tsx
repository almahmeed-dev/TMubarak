import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { trackVideoPlay } from '../../utils/analytics';

interface VideoPlayerProps {
  url: string;
  title: string;
  thumbnail?: string;
}

export default function VideoPlayer({ url, title, thumbnail }: VideoPlayerProps) {
  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    const handlePlay = () => {
      trackVideoPlay(url, title);
    };

    return () => {
      if (playerRef.current) {
        // Cleanup if needed
      }
    };
  }, [url, title]);

  return (
    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
      <ReactPlayer
        ref={playerRef}
        url={url}
        width="100%"
        height="100%"
        controls
        light={thumbnail}
        playing={false}
        onPlay={handlePlay}
        config={{
          youtube: {
            playerVars: {
              hl: 'ar',
              cc_lang_pref: 'ar',
              rel: 0
            }
          }
        }}
      />
    </div>
  );
}