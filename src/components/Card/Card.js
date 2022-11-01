import { Link } from "react-router-dom"
import "./Card.css"

function Card({title, id, cover}) {
    return (
        <li className="div_cards_card" key={id}>
            <Link to={`/Logement/${id}`}>
                <div className="div_cards_card_color"></div>
                <h2 className="div_cards_card_title">{title}</h2>
                <img className="div_cards_card_img" src={cover} alt={title} />
            </Link>
        </li>
    )
}

export default Card