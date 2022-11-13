import "./Rating.css"
import { useParams } from "react-router-dom"
import grey_star from "../../assets/grey_star.png"
import red_star from "../../assets/red_star.png"

// Composant Rating, modulable selon le tableau d'éléments à noter et la note maximale voulue
function Rating({ arrayToRate, maxRate }) {
    // Récupération de l'ID du logement dans l'URL
    const params = useParams()
    const id = params.id
    // Définition d'un tableau vide dans lequel on va "push" les étoiles en fonction de la note de l'élément
    let rating = []
    // Définition de redStar en tant que booléen de base "true"
    let redStar = true
    // Fabrication d'une boucle "for" de 0 à "maxRate" (La note maximale définie en prop)
    for (let i = 0; i < `${maxRate}`; i++) {
        // Si l'itération en cours est le même nombre que la note de l'élément, redStar deviens "false"...
        if (i === parseInt(arrayToRate)) {
            redStar = false
        }
        // ...Si ce n'est pas le cas (et donc qu'il reste "true"), on ajoute une étoile rouge à la note...
        if (redStar === true) {
            rating.push(<img key={i + id} className="star" src={red_star} alt={`${arrayToRate}/${maxRate}`} />)
        }
        // ...Sinon, il deviens "false" et on ajoute une étoile grise
        else {
            rating.push(<img key={i + id} className="star" src={grey_star} alt={`${arrayToRate}/${maxRate}`} />)
        }
    }
    return rating
}

export default Rating