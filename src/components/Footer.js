import './Footer.css'
import logo from "../assets/images/logo.svg"
import iconFacebook from "../assets/images/icon-facebook.svg"
import iconTwitter from "../assets/images/icon-twitter.svg"
import iconPinterest from "../assets/images/icon-pinterest.svg"
import iconInstagram from "../assets/images/icon-instagram.svg"

export function Footer() {
    return (
        <footer>
            <div className="footer">
                <img src={logo} className="logo"></img>
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
                    <img src={iconFacebook}></img>
                    <img src={iconTwitter}></img>
                    <img src={iconPinterest}></img>
                    <img src={iconInstagram}></img>
                </div>
                </div>
            </div>
        </footer>
    )
}
