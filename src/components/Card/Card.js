import "./Card.css"
import { Link } from 'react-router-dom'
import * as apartments from "../../data/apartments.json"

const apartmentsArray = apartments.default

function Card () {
    return (
            <ul className="div_cards">
                {apartmentsArray.map (({title, id, cover}) => (
                    <li className="div_cards_card" key={id}>
                        <Link to ={`/Logement/${id}`}>
                        <div className="div_cards_card_color"></div>
                        <h2 className="div_cards_card_title">{title}</h2>
                        <img className="div_cards_card_img" src={cover} alt={title} />
                        </Link>
                        
                    </li>
                ))}
            </ul>
    )
}

export default Card