import Logo from '../logo.svg'

const Header = () => (
  <header className='app-header'>
    <img src={Logo} className='app-logo' width="150" /> 
    <h1>Rock Paper Scissors</h1>
  </header>
)

export default Header