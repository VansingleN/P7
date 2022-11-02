import Collapse from "../../components/Collapse/Collapse"
import * as apartments from "../../data/apartments.json"
import { useParams, Navigate } from "react-router-dom"
import "./Logement.css"

const apartmentsArray = apartments.default


function Logement() {
    const params = useParams()
    const id = params.id
    const matchingApartment = apartmentsArray.find(apartment => apartment.id === id)

    if (matchingApartment === undefined) {
        return <Navigate to="/404" />
    }

    return <section className="bottomCarousel">
        <div className="bottomCarousel_OutCollapseInfos">
            <div className="bottomCarousel_OutCollapseInfos_titlesAndTags">
                <h1>{matchingApartment.title}</h1>
                <h2>{matchingApartment.location}</h2>

                <div className="bottomCarousel_OutCollapseInfos_titlesAndTags_tags">
                    {matchingApartment.tags.map((tag, index) => {
                        return (
                            <div className="bottomCarousel_OutCollapseInfos_titlesAndTags_tags_tag" key={index + id}>
                                {tag}
                            </div>

                        )
                    })}
                </div>
            </div>

            <div className="host">
                <p>{matchingApartment.host.name}</p>
                <img src={matchingApartment.host.picture} alt="L'hôte" />
            </div>
        </div>




        <div className="bottomCarousel_collapses">
            <Collapse title={"Description"}
                id={matchingApartment.id}
                content={matchingApartment.description} />

            <Collapse title={"Équipements"}
                id={matchingApartment.id}
                content={matchingApartment.equipments} />
        </div>
    </section>
}


export default Logement