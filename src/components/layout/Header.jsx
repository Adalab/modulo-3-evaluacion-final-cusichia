import logo from '../../images/hogwarts-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';

function Header({ handleLightMode, handleDarkMode, isDark }) {



  return (

    <>
      <div className='mode'>
        <div className="tooltip" onClick={handleLightMode}>
          <FontAwesomeIcon icon={faLightbulb} />
          <span className="tooltiptext">Lumos</span>
        </div>
        <div className="tooltip" onClick={handleDarkMode}>
          <FontAwesomeIcon icon={faMoon} />
          <span className="tooltiptext">Nox</span>
        </div>
      </div>
      <div className='headerDiv'>
        <img className='logo' src={logo} alt="Hogwarts logo" />
        <h1>Discover and Sort the Magical Characters of Harry Potter</h1>
        <p>Still waiting for your Hogwarts letter to arrive by owl? Don’t worry — so are we! While you wait, dive into the wizarding world and explore your favorite magical misfits, heroes, and villains.</p>
        <p>Just a heads-up: not everyone’s made it big enough to have their own photo — even in the wizarding world, fame is fickle!</p>
      </div>
    </>
    
  )
}

export default Header
