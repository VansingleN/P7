import "./Footer.css"
import Logo from "../../assets/logo_footer.png"

// Composant Footer, affiché sur chaque bas de page
function Footer() {
    return (
        <footer className="footer_div">
            <img src={Logo} alt="Kasa" />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </footer>
    )
}

export default Footer