import { Link } from 'react-router-dom'
import "./Header.css"
import Logo from "../../assets/logo.png"

function Header() {
    return (
        <header className='header'>
        <div className='header_div'>
            <img className="header_div_logo" src={Logo} alt="Kasa" />
            <nav className='header_div_nav'>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/Apropos">A Propos</Link></li>
            </nav>
        </div>
        </header>
    )
}

export default Header