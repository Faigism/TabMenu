import TableHead from '../components/Table'
import TableRow from '../components/Table/TableRow'
import Layout from '../layout/Layout'

const TableAdmin = ({ setRoute, activeTab }) => {
  const adminData = [
    {
      name: 'Faiq',
      email: 'faiqismayilov46@gmail.com',
      phone: '+994705400098',
    },
    { name: 'Raul', email: 'raulisayev46@gmail.com', phone: '+994504443221' },
    { name: 'Fariz', email: 'farizeliyev46@gmail.com', phone: '+994554567732' },
  ]
  const columns = ['counter', 'name', 'email', 'phone']
  return (
    <Layout setRoute={setRoute} activeTab={activeTab}>
      <div className="table">
        <TableHead items={['#', 'Admins', 'Emails', 'PhoneNumbers']}>
          {adminData.map((admin, index) => {
            return (
              <TableRow
                key={index}
                data={{ counter: index + 1, ...admin }}
                columns={columns}
              />
            )
          })}
        </TableHead>
      </div>
    </Layout>
  )
}
export default TableAdmin
