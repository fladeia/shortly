import React, { useRef, useState } from 'react'
import './Header.css'
import logo from '../assets/images/logo.svg'
import { ButtonSignUp, ButtonGetStarted } from './parts/Buttons'

export function Header() {

  const searchUrl = useRef('')

  const [ requiredUrl, setRequiredUrl ] = useState('https://www.google.com') 
  const [ requeredUrlList, setrequeredUrlList ] = useState([])
  const [ shortenList, setShortenList ] = useState([])

  const fetchData = () => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${requiredUrl}`)
    .then(res => res.json())
    .then(data => {
      setrequeredUrlList([...requeredUrlList, requiredUrl])
      setShortenList([...shortenList, data.result.short_link2])
      console.log(shortenList)
      console.log(requeredUrlList)
    })
  }

  const clickHandler = (e) => {
    e.preventDefault()
    setRequiredUrl(searchUrl.current.value)
    // console.log(requiredUrl);
    fetchData()
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
            <label htmlFor="name"></label>
            <input type="text" id="name" ref={searchUrl} placeholder="Shorten a link here..." />
            <button className="btn-shorten-it" onClick={clickHandler}>Shorten It!</button>
          </form>
        </div>
        <div className="shorten">{
          shortenList.map(shorten => <h3>{shorten}</h3>)
        }</div>
      </div>
    </div>
    )
  }
