import { Link } from "react-router-dom"
import "./Card.css"

// Composant Card, modulable dans son titre, son id et son image (cover)
function Card({ title, id, cover }) {
    // Les cartes sont liées à leur page logement spécifique avec l'API "Link" de React Router
    return (
        <li className="div_cards_card" key={title + id}>
            <Link to={`/Logement/${id}`}>
                <div className="div_cards_card_color"></div>
                <h2 className="div_cards_card_title">{title}</h2>
                <img className="div_cards_card_img" src={cover} alt={title} />
            </Link>
        </li>
    )
}

export default Card