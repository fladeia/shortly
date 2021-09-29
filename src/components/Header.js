import React, { useRef, useState } from 'react'
import './Header.css'
import logo from '../assets/images/logo.svg'
import { ButtonSignUp, ButtonGetStarted } from './parts/Buttons'
import { Results } from './Results'

export function Header() {

  const searchUrl = useRef('')
  const [ urlList, setUrlList ] = useState([{key: '', reqUrl: '', shortUrl: ''}])
  const [ inputError, setInputError] = useState('')

  const fetchData = () => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${searchUrl.current.value}`)
    .then(res => res.json())
    .then(data => {
      setUrlList([...urlList, {key: data.result.code, reqUrl: searchUrl.current.value, shortUrl: data.result.short_link2}])
    })
  }

  const clickHandler = (e) => {
    e.preventDefault()
    if(searchUrl.current.value === "") {
      setInputError('inputErr')
    } else {
      fetchData()
    }
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
            <input type="text" className={inputError} id="name" ref={searchUrl} placeholder="Shorten a link here..." />
            <button className="btn-shorten-it" onClick={clickHandler}>Shorten It!</button>
          </form>
        </div>
        
          {urlList.map((item) => {
            if(item.reqUrl === '') {
              return false
            } else {
              return <div className="shorten" key={item.key}><Results  item1={item.reqUrl} item2={item.shortUrl} ></Results></div>
            }
          })}
        
      </div>
    </div>
  )
}
