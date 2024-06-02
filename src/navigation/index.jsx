import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import TableAdmin from '../pages/TableAdmin'
import TableUser from '../pages/TableUser'
const Navigation = ({ initialRoute, setRoute }) => {
  const pages = {
    home: <Home setRoute={setRoute} />,
    about: <About setRoute={setRoute} activeTab={initialRoute} />,
    products: <Products setRoute={setRoute} activeTab={initialRoute} />,
    productDetail: <ProductDetail setRoute={setRoute} />,
    tableAdmin: <TableAdmin setRoute={setRoute} activeTab={initialRoute} />,
    tableUser: <TableUser setRoute={setRoute} activeTab={initialRoute} />,
  }

  return <>{pages[initialRoute]}</>
}
export default Navigation
