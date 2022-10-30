import "./Collapse.css"
import { useState } from "react"
import vector from "../../assets/vector.png"


function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        <div className = "collapse_open">
            <button className = "collapse_button" onClick = {()  => setIsOpen(false)}>
                {title}
                <img src = {vector} alt = "flèche d'ouverture" />
            </button>
            <p>{content}</p>
        </div>
    ) : (
        <div className = "collapse_closed">
            <button className = "collapse_button" onClick = {()  => setIsOpen(true)}>
                {title}
                <img src = {vector} alt = "flèche d'ouverture" />
            </button>
        </div>
    )
}

export default Collapse;