import React from 'react';
import { MdDownload } from 'react-icons/md';

interface ControlProps {
  action(): void;
}

export const Download: React.FC<ControlProps> = ({ action }) => {
  return (
    <button title="Download" onClick={action}>
      <MdDownload size={50} />
    </button>
  );
};
