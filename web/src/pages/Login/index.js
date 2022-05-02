import { Container, Content, InfoLogin, FooterLogin } from './styles';

import { Input } from '../../components/Input';
import { ButtonSignIn } from '../../components/ButtonSignIn';

import LogoImg from '../../assets/image/logo.jpg';

export function Login() {
  return(
    <Container>
      <Content>
        <img src={ LogoImg } width="175" alt="Logo da Aplicação" />
        <InfoLogin>
          <Input type="text" place="Entre com seu email" />
          <Input type="password" place="Digite sua senha" />
          <ButtonSignIn type="button" title="Logar"/>
        </InfoLogin>
        <FooterLogin>
          <p>RECUPERAR SENHA</p>
          <small align="center">
            O acesso está protegido pelo Google reCAPTCHA para <br />
            garantir que você não é um robo. Saiba mais.
          </small>
        </FooterLogin>
      </Content>
    </Container>
  )
}