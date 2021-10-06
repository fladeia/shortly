import React, { useState } from 'react'
import { Results } from './Results'
import { ButtonGetStarted } from './parts/Buttons'
import iconBrandRrecognition from '../assets/images/icon-brand-recognition.svg'
import iconDetailedRecords from '../assets/images/icon-detailed-records.svg'
import iconFullyCustomizable from '../assets/images/icon-fully-customizable.svg'
import './main.css'

export const Main = () => {
    const [ inputError, setInputError] = useState('')
    const [ errorMsg, setErrorMsg ] = useState('erro-msg')
    const [ searchInput, setSearchInput ] = useState('')
    let listUrl = Object.entries(sessionStorage)
  
    const fetchData = async () => {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${searchInput}`)
      const data = await res.json()
      sessionStorage.setItem(searchInput, data.result.short_link2)
        await setSearchInput('')
    }
  
    const clickHandler = (e) => {
      e.preventDefault()
  
      if(searchInput === "") {
        setInputError('inputErr')
        setErrorMsg('')
      } else {
        setInputError('')
        setErrorMsg('erro-msg')
        fetchData()
    }
}

function cleanInputValue() {
    setSearchInput('')
    setInputError('')
    setErrorMsg('erro-msg')
    }

    return (
        <>
            <div className="section-1">
                <div className="shorten-section">
                    <form>
                        <input 
                            type="text" 
                            className={`${inputError} input`} 
                            value={searchInput} 
                            onChange={e => setSearchInput(e.target.value)} 
                            onClick={cleanInputValue} 
                            placeholder="Shorten a link here..." 
                        />
                        <button className="btn-shorten-it btn" onClick={clickHandler}>Shorten It!</button>
                        <span className={`${errorMsg} span`} >Please add a link</span>
                    </form>
                </div>
                {listUrl.map((item, index) => {
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
      </>
    )
}
