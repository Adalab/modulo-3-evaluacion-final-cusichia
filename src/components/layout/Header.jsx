import logo from '../../images/hogwarts-logo.png';

function Header() {
  return (

    <>
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
