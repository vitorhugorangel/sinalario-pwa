/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback } from 'react';

import { Download } from './Download';
import { FullScreen } from './FullScreen';
import { PictureInPicture } from './PictureInPicture';
import { Play } from './Play';

import { Container, Separator } from './styles';

interface ControlsProps {
  playerRef: React.MutableRefObject<HTMLVideoElement | null>;
  movie: {
    id: string;
    source: string;
  };
}

export const Controls: React.FC<ControlsProps> = ({ playerRef, movie }) => {
  const [player, setPlayer] = useState({
    running: true,
    fullscreen: false,
    pictureInPicture: false,
  });

  const togglePlay = useCallback(() => {
    if (player.running === false) {
      playerRef.current?.play();

      setPlayer({
        ...player,
        running: true,
      });
    } else {
      playerRef.current?.pause();

      setPlayer({
        ...player,
        running: false,
      });
    }
  }, [player, playerRef]);

  async function togglePictureInPicture(): Promise<void> {
    playerRef.current?.requestPictureInPicture();

    setPlayer({
      ...player,
      pictureInPicture: true,
    });
  }

  async function toggleFullScreen(): Promise<void> {
    const isInFullScreen =
      document.fullscreenElement && document.fullscreenElement !== null;

    if (!isInFullScreen) {
      playerRef.current?.requestFullscreen();

      setPlayer({
        ...player,
        fullscreen: true,
      });
    } else {
      setPlayer({
        ...player,
        fullscreen: false,
      });

      document.exitFullscreen();
    }
  }

  async function downloadMovie(id: string, source: string): Promise<void> {
    navigator.serviceWorker.ready.then(async (register: any) => {
      await register.backgroundFetch.fetch(id, [source]);
    });
  }

  return (
    <Container>
      <Separator>
        <Play active={player.running} toggle={togglePlay} />
      </Separator>
      <Separator>
        <Download action={() => downloadMovie(movie.id, movie.source)} />
        <PictureInPicture toggle={togglePictureInPicture} />
        <FullScreen active={player.fullscreen} toggle={toggleFullScreen} />
      </Separator>
    </Container>
  );
};
