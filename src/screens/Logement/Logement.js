import Collapse from "../../components/Collapse/Collapse"
import * as apartments from "../../data/apartments.json"
import { useParams, Navigate } from "react-router-dom"
import "./Logement.css"
import Carousel from "../../components/Carousel/Carousel"
import grey_star from "../../assets/grey_star.png"
import red_star from "../../assets/red_star.png"

function Logement() {
    const params = useParams()
    const id = params.id
    const matchingApartment = apartments.default.find(apartment => apartment.id === id)

    if (matchingApartment === undefined) {
        return <Navigate to="/404" />
    }

    let rating = [];
    let redStar = true;
    for (let i = 0; i < 5; i++) {
        if(i === parseInt(matchingApartment?.rating)) {
            redStar = false;
        }
        if(redStar === true) {
            rating.push(<img key={i+id} className="star" src={red_star} alt={`${matchingApartment?.rating}/5`}/>)
        } else {
            rating.push(<img key={i+id} className="star" src={grey_star} alt={`${matchingApartment?.rating}/5`}/>)
        }
    }

    return <div className="mainWrapperLogement">
        <Carousel />
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
                    <div className="host_infos">
                    <p>{matchingApartment.host.name}</p>
                    <img className="host_infos_picture" src={matchingApartment.host.picture} alt="L'hôte" />
                    </div>
                    <div className="host_rating">          
                                    {rating}                          
                    </div>
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
                        content={matchingApartment.equipments.map((equipment, index) => {
                            return (
                                <li key={index + id}>
                                    {equipment}
                                </li>)
                        })} />
                </div>
            </div>
        </section>
    </div>
}


export default Logement