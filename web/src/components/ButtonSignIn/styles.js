import styled from 'styled-components';

export const Container = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  outline: none;
  padding: 0 10px;
  border-top-left-radius: 7px ;
  border-top-right-radius: 7px ;
  background-color: ${({ theme}) => theme.colors.backgroundArise};
`;