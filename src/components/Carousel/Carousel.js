import {useParams} from "react-router-dom"
import { useState } from "react";
import * as apartments from "../../data/apartments.json"
import "./Carousel.css"
import flecheDroite from "../../assets/right_vector.png"
import flecheGauche from "../../assets/left_vector.png"

const apartmentsArray = apartments.default

function Carousel() {
  const params = useParams()
  const id = params.id
  const indexLogement = apartmentsArray.find(element => element.id === id)
  const slides = indexLogement.pictures
  const [imageActuelle, changerimage] = useState(0)
  const nombreImage = slides.length

  const imageSuivante = () => {
    changerimage (imageActuelle === nombreImage - 1 ? 0 : imageActuelle + 1)
  }

  const imagePrecedente = () => {
    changerimage (imageActuelle === 0 ? nombreImage -1 : imageActuelle - 1)
  }
  
if (nombreImage <= 1) {
  return <div className="Carrousel">
    {slides.map ((photos, index) => {
      return (
        <div className={index === imageActuelle ? 'slide active' : 'slide'} key={index+id}>
          {index === imageActuelle && (<img className="Carrousel_image" src={photos} alt="Photos du logement" />)}
        </div>
      )
        })}
        </div>
} else {
    return <div className="Carrousel">
      
        <img className="fleche_droite"  onClick={imageSuivante} src={flecheDroite} alt="fleche directionnelle" />
        <img className="fleche_gauche" onClick={imagePrecedente} src={flecheGauche} alt="fleche directionnelle" />
        <p>{imageActuelle +1}/{nombreImage}</p>
        {slides.map ((photos, index) => {
        return (
          <div className={index === imageActuelle ? 'slide active' : 'slide'} key={index+id}>
            {index === imageActuelle && (<img className="Carrousel_image" src={photos} alt="Photos du logement" />)}
          </div>
        )
          })}
      </div>
  }
  }
  export default Carousel
  