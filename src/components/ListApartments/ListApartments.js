import './ListApartments.css'
import Card from '../Card/Card'

function ListApartments (props) {
    return (
            <ul className="div_cards">
                {props.data.map (({ title, id, cover }) => (
                    <Card title = {title}
                    id = {id}
                    cover = {cover} />
                ))}
            </ul>
    )
}

export default ListApartments