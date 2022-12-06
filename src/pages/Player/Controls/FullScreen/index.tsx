import React from 'react';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

interface ControlProps {
  active: boolean;
  toggle(): void;
}

export const FullScreen: React.FC<ControlProps> = ({ active, toggle }) => {
  return (
    <button title="Fullscreen" onClick={toggle}>
      {active ? <MdFullscreenExit size={60} /> : <MdFullscreen size={60} />}
    </button>
  );
};
