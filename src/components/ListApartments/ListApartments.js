import './ListApartments.css'
import Card from '../Card/Card'

// Composant ListApartments lié à Card, modulable dans son titre, id et image (cover)
function ListApartments(props) {
    // Fabrication d'une liste permettant d'afficher les différentes cartes afin de permettre une séparation entre la carte et la liste de cartes
    return (
        <ul className="div_cards">
            {props.data.map(({ title, id, cover }) => (
                <Card title={title}
                    id={id}
                    cover={cover}
                    key={title + id} />
            ))}
        </ul>
    )
}

export default ListApartments