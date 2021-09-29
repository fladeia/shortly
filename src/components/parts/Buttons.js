import { useState } from 'react'
import './Buttons.css'

function ButtonSignUp() {
    return <button className="btn-sign-up" >Sign Up</button>
}

function ButtonGetStarted() {
    return <button className="btn-get-starter">Get Started</button>
}

function ButtonCopy({ clipboard }) {
    const [ buttonTitle, setButtonTitle ] = useState('Copy')
    const [ buttoncopied, setButtonCopied ] = useState('')
    
    const btnHandle = () => {
        navigator.clipboard.writeText(clipboard)
        setButtonTitle('Copied!')
        setButtonCopied('copied')
    }

    return <button className={`btn-copy ${buttoncopied}`} onClick={btnHandle}>{buttonTitle}</button>
}

export {ButtonSignUp, ButtonGetStarted, ButtonCopy}
