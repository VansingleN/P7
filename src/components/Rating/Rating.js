import "./Rating.css"
import { useParams } from "react-router-dom"
import grey_star from "../../assets/grey_star.png"
import red_star from "../../assets/red_star.png"

function Rating({ arrayToRate }) {

    const params = useParams()
    const id = params.id

    let rating = []
    let redStar = true
    for (let i = 0; i < 5; i++) {
        if (i === parseInt(arrayToRate)) {
            redStar = false
        }
        if (redStar === true) {
            rating.push(<img key={i + id} className="star" src={red_star} alt={`${arrayToRate}/5`} />)
        } else {
            rating.push(<img key={i + id} className="star" src={grey_star} alt={`${arrayToRate}/5`} />)
        }
    }

    return rating

}

export default Rating