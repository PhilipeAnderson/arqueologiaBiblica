import { Container } from './styles';

export function Input({ place }) {
  return(
    <Container type="text" placeholder={ place } />
  )
}