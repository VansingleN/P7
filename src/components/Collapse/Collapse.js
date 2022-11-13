import "./Collapse.css"
import { useState } from "react"
import vector from "../../assets/vector.png"

// Composant Collapse, modulable dans son titre et son contenu
function Collapse({ title, content }) {
    // Initialisation du hook "useState"
    const [isOpen, setIsOpen] = useState(false)
    /* Condition pour vérifier l'êtat ouvert ou fermé du composant, en utilisant le OnClick pour fermer s'il est ouvert et ouvrir s'il est fermé,
    et afficher différents éléments selon l'êtat avec les classes CSS */
    return isOpen ? (
        <div className="collapse_open">
            <button className="collapse_button" onClick={() => setIsOpen(false)}>
                {title}
                <img src={vector} alt="flèche d'ouverture" />
            </button>
            <p>{content}</p>
        </div>
    ) : (
        <div className="collapse_closed">
            <button className="collapse_button" onClick={() => setIsOpen(true)}>
                {title}
                <img src={vector} alt="flèche d'ouverture" />
            </button>
        </div>
    )
}

export default Collapse