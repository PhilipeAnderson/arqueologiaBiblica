import { Container } from './styles';

export function Input({ type, place }) {
  return(
    <Container type={ type } placeholder={ place } />
  )
}