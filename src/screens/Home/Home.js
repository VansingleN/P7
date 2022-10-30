import "./Home.css"
import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import banner_img from "../../assets/banner_img_home.png"

function Home() {
    
    return (
        <div>
        <Banner image = {banner_img}
        text = "Chez vous, partout et ailleurs"/>   
        <Card/>
        </div>
    )
}

export default Home