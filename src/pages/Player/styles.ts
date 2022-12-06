import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f5;
  flex: 1;
  background-image: url('https://img.freepik.com/vetores-gratis/estrelas-com-fundo-sunburst_53876-93178.jpg?w=2000');
  align-items: center;
  justify-content: center;
`;

export const VideoContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const VideoPlayer = styled.video`
  border-radius: 25px;
  max-height: 75%;
  width: 50%;
  object-fit: cover;

  &::-webkit-media-controls {
    display: none !important;
  }
  &::-webkit-media-controls-enclosure {
    display: none !important;
  }
`;
