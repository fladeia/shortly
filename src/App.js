import './App.css';
import logo from './assets/images/logo.svg'

function Header() {
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
          <button className="btn-sign-up" >Sign Up</button>
        </div>
      </nav>

      <div className="hero">
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights 
        on how your links are performing.</p>
        <button>Get Started</button>
      </div>

      <div className="shortIt">
        <input type="text" placeholder="Shorten a link here..." />
        <button>Shorten It!</button>
      </div>
    </div>

  </div>
  )
}

export function App() {
  return (
    <>  
      <Header></Header>
    </>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
