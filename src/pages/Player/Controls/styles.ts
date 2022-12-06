import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0px 5px;
  display: flex;
  width: 50%;
  height: 10%;
  bottom: 10%;
  flex-direction: row;
  z-index: 2147483647;
  justify-content: space-between;
  align-items: center;
  background-color: #effbf9;
  border: 2px solid #7cc3cb;
  border-radius: 10px;

  svg {
    color: #7cc3cb;
  }
`;

export const Separator = styled.div`
  align-items: center;
  display: flex;

  & > * {
    display: block;
    padding: 0 15px;
  }
`;
