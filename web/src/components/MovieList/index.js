import { useState } from 'react';
import { Movies } from './Movies';

export function MovieList() {

  const [ filmes, setFilmes ] = useState([]);
  const [ filme, setFilme ] = useState({});

  const addMovie = () => {
    setFilmes([
      filme,
      ...filmes
    ])
  }

  return(
    <div className="container">
      <div className="jumbotron">
        <div className="row">
          
          <div className="col-4">
            <label>Movie</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Name" 
              onChange={(e) => {
                setFilme({
                  ...filme,
                  name: e.target.value
                })
              }}  
            />
          </div> 

          <div className="col-4">
            <label>Category</label>
            <select 
              className="form-control"
              onChange={(e) => {
                setFilme({
                  ...filme,
                  category: e.target.value
                })
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div className="col-4">
            <label>Year</label>
            <input 
              type="number" 
              className="form-control" 
              onChange={(e) => {
                setFilme({
                  ...filme,
                  year: e.target.value
                })
              }}
            />
          </div>

        </div>
          <br />
          <button 
            onClick={addMovie}  
            className="btn btn-success btn-lg btn-block"
          >Add Movie</button>
      </div>
    
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Movie</th>
            <th scope="col">Category</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>       
          { filmes.map( movie => (
            <Movies movies={ movie }/>
          ))}
        </tbody>
      </table>
    </div>  
  )
}