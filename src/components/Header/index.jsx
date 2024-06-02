import logo from '../../assets/images/react.svg'
const Header = ({ setRoute, activeTab }) => {
  return (
    <header>
      <div className="head">
        <div className="head_logo">
          <img src={logo} alt="logo" onClick={() => setRoute('home')} />
        </div>
        <div className="head_nav">
          <li
            className={activeTab == 'about' ? 'tab_active' : 'tab'}
            onClick={() => setRoute('about')}
          >
            About
          </li>
          <li
            className={activeTab == 'products' ? 'tab_active' : 'tab'}
            onClick={() => setRoute('products')}
          >
            Products
          </li>
          <li
            className={activeTab == 'tableAdmin' ? 'tab_active' : 'tab'}
            onClick={() => setRoute('tableAdmin')}
          >
            Table Admins
          </li>
          <li
            className={activeTab == 'tableUser' ? 'tab_active' : 'tab'}
            onClick={() => setRoute('tableUser')}
          >
            Table Users
          </li>
        </div>
      </div>
    </header>
  )
}
export default Header
