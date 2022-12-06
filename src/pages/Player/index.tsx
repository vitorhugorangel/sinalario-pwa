/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';
import { Controls } from './Controls';
import { Back } from './Controls/Back';

import { Container, VideoPlayer, VideoContainer } from './styles';

export const Player: React.FC = () => {
  const [movie, setMovie] = useState({} as { source: string; id: string });

  const history = useHistory();

  const { id } = useParams<{ id: string }>();

  const playerRef = useRef<HTMLVideoElement>({} as HTMLVideoElement);
  const playerContainerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(500);
    }

    async function fetch(): Promise<void> {
      const result: { source: string; id: string } = await api
        .get(`/movies/${id}`)
        .then((response) => response.data);

      if (!result) {
        history.push('/');
      }

      setMovie(result);
    }

    fetch();
  }, [id, history]);

  return (
    <Container>
      <Back action={() => history.push('/')} />
      <VideoContainer ref={playerContainerRef}>
        <VideoPlayer src={movie.source} ref={playerRef} autoPlay muted />
        <Controls playerRef={playerRef} movie={movie} />
      </VideoContainer>
    </Container>
  );
};
