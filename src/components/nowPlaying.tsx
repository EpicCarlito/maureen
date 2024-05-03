"use client";

import { useState, useEffect } from "react";

export default function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/spotify")
      .then((res) => res.json())
      .then((data: any) => {
        setNowPlaying(data.nowPlaying);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : nowPlaying ? (
        <div>
          {nowPlaying.is_playing !== undefined ? (
            <div>Now playing: {nowPlaying.item.name}</div>
          ) : (
            <div>Not playing anything.</div>
          )}
        </div>
      ) : (
        <div>Not playing anything.</div>
      )}
    </div>
  );
}
