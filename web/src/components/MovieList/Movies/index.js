export function Movies({ movies }) {

  const showName = () => {
    alert(movies.name)
  }

  return(
    <tr>
      <td>{movies.name}</td>
      <td>{movies.category}</td>
      <td>{movies.year}</td>
      <td className="text-right">
        <button className="btn btn-info" onClick={showName}>info</button>
        <button className="btn btn-danger">delete</button>
      </td>
    </tr>
  )
}