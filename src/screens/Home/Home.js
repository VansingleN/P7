import "./Home.css"
import Banner from "../../components/Banner/Banner"
import ListApartments from "../../components/ListApartments/ListApartments"
import banner_img from "../../assets/banner_img_home.png"
import * as apartments from "../../data/apartments.json"

// Import du tableau de contenu à placer dans le composant "ListApartments"
const apartmentsArray = apartments.default

// Contenu de la page "Home", incluant les composants "Banner" et "ListApartments"
function Home() {
    return (
        <div>
            <div className='bannerHome'>
                <Banner image={banner_img}
                    text="Chez vous, partout et ailleurs" />
            </div>
            <ListApartments data={apartmentsArray} />
        </div>
    )
}

export default Home