import { Tr } from './Tr';

export function MovieList() {
  return(
    <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Categoria</th>
            <th scope="col">Ano</th>
          </tr>
        </thead>
        <tbody>       
          <Tr />
        </tbody>
      </table>  
  )
}