import { Container, Content } from './styles';
import { Input } from '../../components/Input';
import LogoImg from '../../assets/image/logo.jpg';


export function Login() {
  return(
    <Container>
      <Content>
        <img src={ LogoImg } width="175" alt="Logo da Aplicação" />
        <Input place="Entre com seu email" />

      </Content>
    </Container>
  )
}