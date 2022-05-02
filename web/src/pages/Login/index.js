import { Container, Content, InfoLogin } from './styles';
import { Input } from '../../components/Input';
import LogoImg from '../../assets/image/logo.jpg';


export function Login() {
  return(
    <Container>
      <Content>
        <img src={ LogoImg } width="175" alt="Logo da Aplicação" />
        <InfoLogin>
          <Input type="text" place="Entre com seu email" />
          <Input type="password" place="Digite sua senha" />
          
        </InfoLogin>
      </Content>
    </Container>
  )
}