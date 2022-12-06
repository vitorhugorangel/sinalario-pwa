import React from 'react';
import { MdPlayCircle, MdPauseCircle } from 'react-icons/md';

interface ControlProps {
  active: boolean;
  toggle(): void;
}

export const Play: React.FC<ControlProps> = ({ active, toggle }) => {
  return (
    <button title="Play/Pause" onClick={toggle}>
      {active ? <MdPauseCircle size={60} /> : <MdPlayCircle size={60} />}
    </button>
  );
};
