const TableRow = ({ data, columns }) => {
  return (
    <tr>
      {columns.map((col, index) => (
        <td key={index}>{data[col]}</td>
      ))}
    </tr>
  )
}
export default TableRow
