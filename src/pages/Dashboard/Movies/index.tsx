/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { MdPlayCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

import { MoviesItem, MoviesList } from './styles';

export const Movies: React.FC = () => {
  const [data, setData] = useState({ movies: [] });

  useEffect(() => {
    async function fetch(): Promise<void> {
      const result = await api.get(`/movies`);

      setData({ movies: result.data });
    }

    fetch();
  }, []);

  return (
    <MoviesList>
      {data.movies.map((item: any) => (
        <MoviesItem key={item.id}>
          <img src={item.thumb} alt="" />
          <Link to={`player/${item.id}`}>
            <div className="overlay">
              <MdPlayCircle />
            </div>
          </Link>
        </MoviesItem>
      ))}
    </MoviesList>
  );
};
