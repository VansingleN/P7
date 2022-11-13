import { useParams } from "react-router-dom"
import { useState } from "react"
import * as apartments from "../../data/apartments.json"
import "./Carousel.css"
import right_vector from "../../assets/right_vector.png"
import left_vector from "../../assets/left_vector.png"

function Carousel() {
  // Récupération de l'ID du logement dans l'URL
  const params = useParams()
  const id = params.id
  // Récupération du tableau d'appartements (default), puis de l'appartement correspondant au bon ID (find), puis de ses photos (pictures)
  const apartmentPictures = apartments.default.find(element => element.id === id).pictures
  // Initialisation du hook "useState"
  const [currentPicture, changePicture] = useState(0)
  const picturesNumber = apartmentPictures.length

  /* Fonction permettant d'incrémenter l'image tout en revenant à la première en cas de fin de cycle,
  on écrit "picturesNumber -1" car contrairement à "currentPicture" ce n'est pas un tableau qui commence de 0 */
  const imageSuivante = () => {
    changePicture(currentPicture === picturesNumber - 1 ? 0 : currentPicture + 1)
  }
  // Fonction permettant de décrémenter l'image tout en revenant à la dernière en cas de fin de cycle
  const imagePrecedente = () => {
    changePicture(currentPicture === 0 ? picturesNumber - 1 : currentPicture - 1)
  }

  // Condition pour gérer le cas ou l'appartement n'a pas d'image...
  if (picturesNumber === 0) {
    return <p className="carousel noPictures">Pas d'image disponible</p>
  }

  // ... Une seule ...
  if (picturesNumber === 1) {
    return <div className="carousel">

      {apartmentPictures.map((photos, index) => {
        return (
          <div className={index === currentPicture ? 'active' : 'inactive'} key={photos + index + id}>
            {index === currentPicture && (<img className="carousel_image" src={photos} alt="Photos du logement" />)}
          </div>
        )
      })}
    </div>
  }
  
  // ... Ou plus d'une
  else {
    return <div className="carousel">

      <img className="right_vector" onClick={imageSuivante} src={right_vector} alt="fleche directionnelle" />
      <img className="left_vector" onClick={imagePrecedente} src={left_vector} alt="fleche directionnelle" />
      <p>{currentPicture + 1}/{picturesNumber}</p>

      {apartmentPictures.map((photos, index) => {

  // Affichage de l'image correspondante à l'itération en cours
        return (
          <div className={index === currentPicture ? 'active' : 'inactive'} key={photos + index + id}>
            {index === currentPicture && (<img className="carousel_image" src={photos} alt="Photos du logement" />)}
          </div>
        )
      })}
    </div>
  }
}

export default Carousel
