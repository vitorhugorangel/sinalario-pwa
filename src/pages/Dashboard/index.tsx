import React from 'react';

import { Movies } from './Movies';

import { Container, Content } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <Movies />
      </Content>
    </Container>
  );
};
