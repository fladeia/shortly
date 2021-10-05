import React, { useRef, useState } from 'react'
import './Header.css'

import logo from '../assets/images/logo.svg'
import iconBrandRrecognition from '../assets/images/icon-brand-recognition.svg'
import iconDetailedRecords from '../assets/images/icon-detailed-records.svg'
import iconFullyCustomizable from '../assets/images/icon-fully-customizable.svg'
import iconFacebook from "../assets/images/icon-facebook.svg"
import iconTwitter from "../assets/images/icon-twitter.svg"
import iconPinterest from "../assets/images/icon-pinterest.svg"
import iconInstagram from "../assets/images/icon-instagram.svg"

import { ButtonSignUp, ButtonGetStarted } from './parts/Buttons'
import { Results } from './Results'

export function Header() {

  const searchUrl = useRef('')
  const [ urlList, setUrlList ] = useState([{key: '', reqUrl: '', shortUrl: ''}])
  const [ inputError, setInputError] = useState('')
  const [ errorMsg, setErrorMsg ] = useState('erro-msg')
  const [ name, setName ] = useState('')
  const [ menuToggle, setMenuToggle ] = useState(false)

  const fetchData = async () => {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${searchUrl.current.value}`)
    const data = await res.json()
    sessionStorage.setItem(searchUrl.current.value, data.result.short_link2)
    setUrlList([...urlList, {key: data.result.code, reqUrl: searchUrl.current.value, shortUrl: data.result.short_link2}])
  }

  const handleMenu = () => {
    setMenuToggle(!menuToggle)
  }

  const clickHandler = (e) => {
    e.preventDefault()

    if(searchUrl.current.value === "") {
      setInputError('inputErr')
      setErrorMsg('')
    } else {
      setInputError('')
      setErrorMsg('erro-msg')
      fetchData()
    }
  }

  function cleanInputValue() {
    setName('')
  }

  let test = Object.entries(sessionStorage)

  return (
    <div className="App-container">
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
        <div className="section-1">
          <div className="shorten-section">
              <form>
                <input 
                  type="text" 
                  className={`${inputError} input`} 
                  value={name} onChange={e => setName(e.target.value)} 
                  id="name" 
                  ref={searchUrl} 
                  onClick={cleanInputValue} 
                  placeholder="Shorten a link here..." 
                />
                <button className="btn-shorten-it btn" onClick={clickHandler}>Shorten It!</button>
                <span className={`${errorMsg} span`} >Please add a link</span>
              </form>
          </div>
            {test.map((item, index) => {
              if(item.reqUrl === '') {
                return false
              } else {
                return <div className="shorten" key={index}><Results  item1={item[0]} item2={item[1]} ></Results></div>
              }
            })}
            <div className="section-1-title">
              <span>
                Advanced Statistics
              </span>
              <p>
                Track how your links are performing across the web with our 
                advanced statistics dashboard.
              </p>
            </div>
            <div className="section-1-cards">
              <div className="section-1-card">
                <div className="bg-img">
                  <img src={iconBrandRrecognition} alt="icon-recognition"/>
                </div>
                <span>
                  Brand Recognition
                </span>
                <p>
                  Boost your brand recognition with each click. Generic links don’t 
                  mean a thing. Branded links help instil confidence in your content.
                </p>
              </div>
              <div className="section-1-card">
                <div className="bg-img" >
                  <img src={iconDetailedRecords} alt="icon-records"/>
                </div>
                <span>
                  Detailed Records
                </span>
                <p>
                  Gain insights into who is clicking your links. Knowing when and where 
                  people engage with your content helps inform better decisions.
                </p>
              </div>
              <div className="section-1-card">
                <div className="bg-img" >
                  <img src={iconFullyCustomizable} alt="icon-customizable"/>
                </div>  
                <span>
                  Fully Customizable
                </span>
                <p>
                  Improve brand awareness and content discoverability through customizable 
                  links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        <div className="section-2">
            <span>Boost your links today</span>
            <ButtonGetStarted></ButtonGetStarted>
        </div>
        <footer>
          <div className="footer-container">
            <img src={logo} className="logo" alt="logo"></img>
            <div className="footer-nav">
              <div className="nav-list">
                  <ul>
                      <li className="head">Features</li>
                      <li>Link Shortening</li>
                      <li>Branded Links</li>
                      <li>Analitics</li>
                  </ul>
              </div>
              <div className="nav-list">
                  <ul>
                      <li className="head">Resources</li>
                      <li>Blog</li>
                      <li>Developers</li>
                      <li>Support</li>
                  </ul>
              </div>
              <div className="nav-list">
                  <ul>
                      <li className="head">Company</li>
                      <li>About</li>
                      <li>Our Team</li>
                      <li>Careers</li>
                      <li>Contact</li>
                  </ul>
              </div>
              <div className="social-icons">
                <img src={iconFacebook} alt="facebook" className="social-icon"></img>
                <img src={iconTwitter} alt="twitter" className="social-icon"></img>
                <img src={iconPinterest} alt="pinterest" className="social-icon"></img>
                <img src={iconInstagram} alt="instagram" className="social-icon"></img>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}
