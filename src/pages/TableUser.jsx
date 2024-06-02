import TableHead from '../components/Table'
import TableRow from '../components/Table/TableRow'
import Layout from '../layout/Layout'

const TableUser = ({ setRoute, activeTab }) => {
  const userData = [
    {
      name: 'Faiq',
      email: 'faiqismayilov46@gmail.com',
      phone: '+994705400098',
      age: 26,
      hobby: 'football',
    },
    {
      name: 'Raul',
      email: 'raulisayev46@gmail.com',
      phone: '+994504443221',
      age: 22,
      hobby: 'hockey',
    },
    {
      name: 'Fariz',
      email: 'farizeliyev46@gmail.com',
      phone: '+994554567732',
      age: 30,
      hobby: 'tennis',
    },
  ]
  const columns = ['counter', 'name', 'email', 'phone', 'age', 'hobby']
  return (
    <Layout setRoute={setRoute} activeTab={activeTab}>
      <div className="table">
        <TableHead
          items={['#', 'Users', 'Emails', 'PhoneNumber', 'Ages', 'Hobby']}
        >
          {userData.map((user, index) => {
            return (
              <TableRow
                key={index}
                data={{ counter: index + 1, ...user }}
                columns={columns}
              />
            )
          })}
        </TableHead>
      </div>
    </Layout>
  )
}
export default TableUser
