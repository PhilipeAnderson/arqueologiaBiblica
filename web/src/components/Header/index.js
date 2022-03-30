import { MovieList } from '../MovieList';
import { Container } from './styles';

export function Header() {
  return(
    <Container>
      <h1>Header</h1>
      <MovieList />
    </Container>
  )
}