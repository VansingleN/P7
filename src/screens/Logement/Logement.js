import Collapse from "../../components/Collapse/Collapse"
import * as apartments from "../../data/apartments.json"
import { useParams, Navigate } from "react-router-dom"

const apartmentsArray = apartments.default


function Logement() {
    const params = useParams()
    const id = params.id
    const matchingApartment = apartmentsArray.find(apartment => apartment.id === id)

    if (matchingApartment === undefined) {
        return <Navigate to="/404" />
    }

    return <div>

    <h1>{matchingApartment.title}</h1>
    <h2>{matchingApartment.location}</h2>
        <div>
            <Collapse title={"Description"}
                id={matchingApartment.id}
                content={matchingApartment.description} />

            <Collapse title={"Équipements"}
                id={matchingApartment.id}
                content={matchingApartment.equipments} />
        </div>
    </div>
}


export default Logement