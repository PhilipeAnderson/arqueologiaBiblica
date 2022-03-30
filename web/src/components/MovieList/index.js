import { Movies } from './Movies';

export function MovieList() {

  const listDataBase = [
    {name: 'F1', category: 'action', year: 2020},
    {name: 'F2', category: 'romance', year: 2021},
    {name: 'F3', category: 'child', year: 2022},
    {name: 'F4', category: 'loves', year: 2023},
    {name: 'F5', category: 'politic', year: 2024},
  ]



  return(
    <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Movie</th>
            <th scope="col">Category</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>       
          { listDataBase.map( movie => (
            <Movies movies={ movie }/>
          ))}
        </tbody>
      </table>  
  )
}