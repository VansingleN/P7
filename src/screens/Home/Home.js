import "./Home.css"
import Banner from "../../components/Banner/Banner"
import ListApartments from "../../components/ListApartments/ListApartments"
import banner_img from "../../assets/banner_img_home.png"
import * as apartments from "../../data/apartments.json"

const apartmentsArray = apartments.default

function Home() {
    return (
        <div>
            <Banner image={banner_img}
                text="Chez vous, partout et ailleurs" />
            <ListApartments data={apartmentsArray} />
        </div>
    )
}

export default Home