const TableHead = ({ items: tableHead, children }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHead.map((item) => {
              return <th key={item}>{item}</th>
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </>
  )
}
export default TableHead
