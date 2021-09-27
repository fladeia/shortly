import React, { useRef, useState } from 'react'
import './Header.css'
import logo from '../assets/images/logo.svg'
import { ButtonSignUp, ButtonGetStarted } from './parts/Buttons'

export function Header() {

  const searchUrl = useRef('')
  const [ shortenItUrl, setShortenItUrl ] = useState('') 

  const clickHandler = (e) => {
    e.preventDefault()
    setShortenItUrl(searchUrl.current.value)

    fetch(`https://api.shrtco.de/v2/shorten?url=${shortenItUrl}`)
    .then(res => res.json())
    .then(data => console.log(data.result.code["short_link"]))
  }

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
            <ButtonGetStarted></ButtonGetStarted>
        </div>
        <div className="shortIt">
          <form>
            <label htmlFor="name">Url shorten it</label>
            <input type="text" id="name" ref={searchUrl} placeholder="Shorten a link here..." />
            <button className="btn-shorten-it" onClick={clickHandler}>Shorten It!</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
