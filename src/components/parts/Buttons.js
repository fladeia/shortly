import './Buttons.css'

function ButtonSignUp() {
    return (
        <>
            <button className="btn-sign-up" >Sign Up</button>
        </>
    )
}

function ButtonGetStarted() {
    return (
        <>
            <button className="btn-get-starter">Get Started</button>
        </>
    )
}

function ButtonCopy({ clipboard }) {

    const btnHandle = () => {
        navigator.clipboard.writeText(clipboard)
    }

    return (
        <>
            <button className="btn-copy" onClick={btnHandle}>Copy</button>
        </>
    )
}

export {ButtonSignUp, ButtonGetStarted, ButtonCopy}
