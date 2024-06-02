import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children, setRoute, activeTab }) => {
  return (
    <>
      <Header setRoute={setRoute} activeTab={activeTab} />
      {children}
      <Footer />
    </>
  )
}
export default Layout
