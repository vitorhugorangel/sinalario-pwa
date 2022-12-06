import React from 'react';
import { MdFeaturedVideo } from 'react-icons/md';

interface ControlProps {
  toggle(): void;
}

export const PictureInPicture: React.FC<ControlProps> = ({ toggle }) => {
  return (
    <button title="Modo de Picture-in-picture" onClick={toggle}>
      <MdFeaturedVideo size={50} />
    </button>
  );
};
