import logo from "../../imgs/investment.png";

function HomeNav(){
  return (
    <nav className="navbar">
        <div className='homepage-navbar-logo'>
          <img alt="" src={logo} />
          <h1>E-Tech</h1>
        </div>
        <div className='home-navbar-links'>
          <ul>
            <li>Why E-tech</li>
            <li>Testimonial</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
  )
}
export default HomeNav;