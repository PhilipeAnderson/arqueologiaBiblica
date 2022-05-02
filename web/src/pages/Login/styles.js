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
`;

export const InfoLogin = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const FooterLogin = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: white;
  }

  small {
    color: ${({ theme }) => theme.colors.textGray}
  }
`;