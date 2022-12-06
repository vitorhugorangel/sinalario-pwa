import React from 'react';
import { MdArrowBack } from 'react-icons/md';

import { Button } from './styles';

interface ControlProps {
  action(): void;
}

export const Back: React.FC<ControlProps> = ({ action }) => {
  return (
    <Button title="Voltar" onClick={action}>
      <MdArrowBack size={60} color="#0184A7" />
    </Button>
  );
};
