import styled from 'styled-components';

export const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 50px;
`;

export const MoviesItem = styled.div`
  position: relative;

  img {
    object-fit: cover;
    border-radius: 25px;
    width: 250px;
    height: 250px;
    display: block;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 25px;
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: 0.3s ease;
    background-color: rgba(0, 0, 0, 0.15);
  }

  svg {
    color: white;
    font-size: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
`;
