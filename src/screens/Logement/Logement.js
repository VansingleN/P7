import Collapse from "../../components/Collapse/Collapse"
import * as apartments from "../../data/apartments.json"
import { useParams, Navigate } from "react-router-dom"
import "./Logement.css"
import Carousel from "../../components/Carousel/Carousel"

const apartmentsArray = apartments.default


function Logement() {
    const params = useParams()
    const id = params.id
    const matchingApartment = apartmentsArray.find(apartment => apartment.id === id)

    if (matchingApartment === undefined) {
        return <Navigate to="/404" />
    }

    return <div className="mainWrapperLogement">
        <Carousel/>
        <section className="bottomCarousel">
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
            <div className="bottomCarousel_collapses_collapse">
            <Collapse title={"Description"}
                id={matchingApartment.id}
                content={matchingApartment.description} />
                </div>
                <div className="bottomCarousel_collapses_collapse">
            <Collapse title={"Équipements"}
                id={matchingApartment.id}
                content={matchingApartment.equipments} />
                </div>
        </div>
    </section>
    </div>
}


export default Logement