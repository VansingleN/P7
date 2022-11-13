import './Apropos.css'
import Banner from "../../components/Banner/Banner"
import banner_img_apropos from "../../assets/banner_img_apropos.png"
import Collapse from '../../components/Collapse/Collapse'
import * as collapseContent from "../../data/collapseContent.json"

// Import du tableau de contenu à placer dans le composant "Collapse"
const collapseContentArray = collapseContent.default

// Contenu de la page "Apropos", incluant les composants "Banner" et "Collapse"
function Apropos() {
    return (
        <div className='mainWrapperApropos'>
            <div className='bannerApropos'>
                <Banner image={banner_img_apropos}
                    text="" />
            </div>
            <div className='collapseApropos'>
                {collapseContentArray.map(({ title, id, content }) => (
                    <Collapse title={title}
                        id={id}
                        content={content}
                        key={title + id} />
                ))}
            </div>
        </div>
    )
}

export default Apropos