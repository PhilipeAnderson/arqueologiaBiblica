export function Tr({ movies }) {



  return(
    <tr>
      <td>{movies.name}</td>
      <td>{movies.category}</td>
      <td>{movies.year}</td>
      <td className="text-right">
        <button className="btn btn-info">info</button>
        <button className="btn btn-danger">delete</button>
      </td>
    </tr>
  )
}