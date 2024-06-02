import aboutSVG from '../assets/images/about_svg.jpeg'
import Layout from '../layout/Layout'
const About = ({ setRoute, activeTab }) => {
  return (
    <Layout setRoute={setRoute} activeTab={activeTab}>
      <div className="about">
        <div className="about_info">
          <h1>About</h1>
          <span>Subheading for description or instructions</span>
          <p>
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look: <br />
            <br />
            Excepteur efficient emerging, minim veniam anim aute carefully
            curated Ginza conversation exquisite perfect nostrud nisi intricate
            Content. Qui international first-class nulla ut. Punctual
            adipisicing, essential lovely queen tempor eiusmod irure. Exclusive
            izakaya charming Scandinavian impeccable aute quality of life soft
            power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip,
            et Porter destination Toto remarkable officia Helsinki excepteur
            Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>
        <div className="about_img">
          <img src={aboutSVG} alt="about" />
        </div>
      </div>
    </Layout>
  )
}
export default About
