import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Content = styled.div`
  width: 350px;
  height: 500px;
  position: absolute;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundArise};
`;