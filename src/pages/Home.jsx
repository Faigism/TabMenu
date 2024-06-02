import homeSVG from '../assets/images/home_svg.jpg'
import Layout from '../layout/Layout'

const Home = ({ setRoute, activeTab }) => {
  return (
    <Layout setRoute={setRoute} activeTab={activeTab}>
      <div className="about">
        <div className="about_info">
          <h1>The Lord of the Rings: The Return of the King</h1>
          <span>Lord of the Rings Series</span>
          <p>
            Gandalf and Aragorn lead the World of Men against Sauron's army to
            draw his gaze from Frodo and Sam as they approach Mount Doom with
            the One Ring.
          </p>
        </div>
        <div className="about_img">
          <img src={homeSVG} alt="homeSvg" />
        </div>
      </div>
    </Layout>
  )
}
export default Home
