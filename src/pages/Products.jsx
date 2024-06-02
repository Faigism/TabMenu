import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../components/ProductItem/product.module.css'
import ProductItem from '../components/ProductItem'
import Layout from '../layout/Layout'

const Products = ({ setRoute, activeTab }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`)
      setProducts(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (!loading) {
    return (
      <Layout setRoute={setRoute} activeTab={activeTab}>
        <div className={styles.product_title}>Amazon Products</div>
        <div className={styles.container}>
          {products.map((product) => (
            <ProductItem
              item={product}
              key={product.title}
              setRoute={setRoute}
            />
          ))}
        </div>
      </Layout>
    )
  } else {
    return (
      <Layout setRoute={setRoute}>
        <div className="loading_container">
          <div className="loading"></div>
        </div>
      </Layout>
    )
  }
}
export default Products
