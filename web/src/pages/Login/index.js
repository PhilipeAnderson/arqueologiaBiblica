import { Container, Content, Logo} from './styles';
import LogoImg from '../../assets/image/logo.jpg';
export function Login() {
  return(
    <Container>
    <Content>
      <img src={ LogoImg } width="175" alt="Logo da Aplicação" />

    </Content>
    </Container>
  )
}