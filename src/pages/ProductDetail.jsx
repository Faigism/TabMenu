import { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios'

const ProductDetail = ({ setRoute }) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const getProduct = async () => {
    try {
      const productId = window.location.hash.replace('#', '')
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      )
      setProduct(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProduct()
  }, [])
  const handleNavigation = (route) => {
    window.location.hash = ''
    setRoute(route)
  }
  if (!loading) {
    return (
      <Layout setRoute={handleNavigation}>
        {product ? (
          <div className="prd_detail">
            <img className="prd_img" src={product.image} alt={product.title} />
            <div>
              <h1 className="prd_title">{product.title}</h1>
              <p className="prd_description">{product.description}</p>
              <span className="prd_price">${product.price}</span>
            </div>
          </div>
        ) : (
          <div>Product not found</div>
        )}
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
export default ProductDetail
