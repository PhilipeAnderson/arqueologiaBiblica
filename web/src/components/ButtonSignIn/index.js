import { Container } from './styles';


export function ButtonSignIn({ type, title }) {
  return(
    <Container type={ type }>
      { title }
    </Container>
  )
}