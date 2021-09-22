import './Header.css'
import logo from '../assets/images/logo.svg'
import { ButtonSignUp, ButtonGetStartes } from './parts/Buttons'

export function Header() {
    return (
    <div className="App-header">
      <div className="header-container">
        <nav className="App-nav-desktop">
          <div className="logo-items">
            <img src={logo} alt="logo" className="logo" />
            <ol className="nav-items">
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ol>
          </div>
          <div className="login-singUp">
            <span className="login">Login</span>
            <ButtonSignUp></ButtonSignUp>
          </div>
        </nav>
        <div className="hero">
          <h1>More than just shorter links</h1>
          <p>Build your brand’s recognition and get detailed <br /> insights 
          on how your links are performing.</p>
            <ButtonGetStartes></ButtonGetStartes>
        </div>
        <div className="shortIt">
          <input type="text" placeholder="Shorten a link here..." />
          <button className="btn-shorten-it">Shorten It!</button>
        </div>
      </div>
    </div>
    )
  }
