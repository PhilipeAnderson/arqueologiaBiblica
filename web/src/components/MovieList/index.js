import { Container, ButtonTable } from './styles'

export function MovieList() {
  return(
    <Container >
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Categoria</th>
            <th scope="col">Ano</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice No País das Maravilhas</td>
            <td>Magia</td>
            <td>2020</td>
            <ButtonTable>
              <button className="btn btn-info">Informações</button>{' '}
              <button className="btn btn-danger">Excluir</button>
            </ButtonTable>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}