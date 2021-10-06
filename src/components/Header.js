import { useState } from 'react'
import { ButtonSignUp, ButtonGetStarted } from './parts/Buttons'
import logo from '../assets/images/logo.svg'
import './header.css'

export function Header() {
  const [ menuToggle, setMenuToggle ] = useState(false)

  const handleMenu = () => {
    setMenuToggle(!menuToggle)
  }

  return (
    <div className="header-container">
        <header>
          <nav className="nav-desktop">
            <div className="nav-items">
              <img src={logo} alt="logo" className="logo" />
              <ol>
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
          <nav className="nav-mobile">
            <div className="nav-items">
              <img src={logo} alt="logo" className="logo" />
              <div className="hamburger-menu" onClick={handleMenu}>
                <div className="hamburger-1"></div>
                <div className="hamburger-2"></div>
                <div className="hamburger-3"></div>
              </div>
            </div>
            <div className={`${menuToggle ? 'menuOn' : null} menu`}>
              <ol>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ol>
              <div className="menuDiv"></div>
              <div className="login-singUp">
                <span className="login">Login</span>
                <ButtonSignUp></ButtonSignUp>
              </div>
            </div>
          </nav>
          <div className="hero">
            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights 
            on how your links are performing.</p>
              <ButtonGetStarted></ButtonGetStarted>
          </div>
        </header>
    </div>
  )
}
