import Collapse from "../../components/Collapse/Collapse"
import * as apartments from "../../data/apartments.json"
import { useParams, Navigate } from "react-router-dom"
import "./Logement.css"
import Carousel from "../../components/Carousel/Carousel"
import Rating from "../../components/Rating/Rating"


function Logement() {
    const params = useParams()
    const id = params.id
    const matchingApartment = apartments.default.find(apartment => apartment.id === id)

    if (matchingApartment === undefined) {
        return <Navigate to="/404" />
    }

    const matchingApartmentRating = matchingApartment.rating

    return <div className="mainWrapperLogement">

        <Carousel />

        <section className="bottomCarousel">
            <div className="bottomCarousel_OutCollapseInfos">
                <div className="bottomCarousel_OutCollapseInfos_titlesAndTags">
                    <h1>{matchingApartment?.title}</h1>
                    <h2>{matchingApartment?.location}</h2>

                    <div className="bottomCarousel_OutCollapseInfos_titlesAndTags_tags">
                        {matchingApartment?.tags.map((tag, index) => {
                            return (
                                <div className="bottomCarousel_OutCollapseInfos_titlesAndTags_tags_tag" key={tag + index + id}>
                                    {tag}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="bottomCarousel_OutCollapseInfos_host">
                    <div className="bottomCarousel_OutCollapseInfos_host_infos">
                        <p>{matchingApartment?.host.name}</p>
                        <img className="bottomCarousel_OutCollapseInfos_host_infos_picture" src={matchingApartment?.host.picture} alt="L'hôte" />
                    </div>
                    <div className="bottomCarousel_OutCollapseInfos_host_rating">
                        <Rating arrayToRate={matchingApartmentRating} />
                    </div>
                </div>
            </div>

            <div className="bottomCarousel_collapses">
                <div className="bottomCarousel_collapses_collapse">
                    <Collapse title={"Description"}
                        id={matchingApartment?.id}
                        content={matchingApartment?.description} />
                </div>
                <div className="bottomCarousel_collapses_collapse">
                    <Collapse title={"Équipements"}
                        id={matchingApartment?.id}
                        content={matchingApartment?.equipments.map((equipment, index) => {
                            return (
                                <li key={equipment + index + id}>
                                    {equipment}
                                </li>)
                        })} />
                </div>
            </div>
        </section>
    </div>
}

export default Logement