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
  
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundArise};
`;

export const InfoLogin = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;