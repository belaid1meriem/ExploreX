import './Header.css'
import logo from '../../assets/logo.png'
function Header() {
 
  const handleClick = () => {
    window.location.href = 'https://forms.gle/fjWtxNwRkrRShEJT6'; 
};
  return (
    <div className="header-container">
      <img className='logo' src={logo} alt="logo" />
      <ul className='header-list none'>
        <li className="list-item"><a href="#">Fields</a></li>
        <li className="list-item"><a href="#">Speakers</a></li>
        <li className="list-item"><a href="#">Calendar</a></li>
      </ul>
      
      <div className="btn-container mg  ">
        <div className="rectangle top"></div>
        <div className="rectangle bottom"></div>
        <button className="joinus herobtn" onClick={handleClick}>Join us now!</button>
      </div>
    </div>
  )
}

export default Header