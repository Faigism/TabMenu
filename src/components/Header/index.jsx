import { useState } from 'react'
import logo from '../../assets/images/react.svg'
const Header = ({ setRoute, activeTab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <header>
      <div className="head">
        <div className="head_logo">
          <img src={logo} alt="logo" onClick={() => setRoute('home')} />
        </div>
        <div className={`head_nav ${isSidebarOpen ? 'open' : ''}`}>
          <div className="close">
            <button className="close-btn" onClick={closeSidebar}>
              &times;
            </button>
          </div>
          <li
            className={activeTab === 'about' ? 'tab_active' : 'tab'}
            onClick={() => setRoute('about')}
          >
            About
          </li>
          <li
            className={activeTab === 'products' ? 'tab_active' : 'tab'}
            onClick={() => setRoute('products')}
          >
            Products
          </li>
          <li
            className={activeTab === 'tableAdmin' ? 'tab_active' : 'tab'}
            onClick={() => setRoute('tableAdmin')}
          >
            Table Admins
          </li>
          <li
            className={activeTab === 'tableUser' ? 'tab_active' : 'tab'}
            onClick={() => setRoute('tableUser')}
          >
            Table Users
          </li>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </div>
        {isSidebarOpen && (
          <div className="overlay" onClick={closeSidebar}></div>
        )}
      </div>
    </header>
  )
}
export default Header
