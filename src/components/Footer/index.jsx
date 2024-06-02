import logo from '../../assets/images/react.svg'
import facebook from '../../assets/images/facebook.svg'
import linkedin from '../../assets/images/linkedin.svg'
import youtube from '../../assets/images/youtube.svg'
import instagram from '../../assets/images/instagram.svg'
const Footer = () => {
  return (
    <footer>
      <div className="foot_border"></div>
      <div className="foot">
        <div className="foot_logo">
          <img src={logo} alt="logo" />
          <div className="foot_link">
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={youtube} alt="youtube" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
        <div className="foot_list">
          <div>
            <li className="foot_head">Topic</li>
            <li className="foot_head">Topic</li>
            <li className="foot_head">Topic</li>
          </div>
          <div>
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </div>
          <div>
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </div>
          <div>
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
