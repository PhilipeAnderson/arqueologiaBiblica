import styled from 'styled-components';

export const Container = styled.input`
  width: 300px;
  height: 50px;
  border: none;
  outline: none;
  padding: 0 10px;
  border-top-left-radius: 7px ;
  border-top-right-radius: 7px ;
  color: ${({ theme }) => theme.colors.textLight};
  background-color: ${({ theme }) => theme.colors.inputs};
`;