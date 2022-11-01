import './Apropos.css'
import Banner from "../../components/Banner/Banner"
import banner_img_apropos from "../../assets/banner_img_apropos.png"
import Collapse from '../../components/Collapse/Collapse'
import * as collapseContent from "../../data/collapseContent.json"

const collapseContentArray = collapseContent.default

function Apropos() {
    return (
        <div>
            <Banner image={banner_img_apropos}
                text="" />
            {collapseContentArray.map(({ title, id, content }) => (
                <Collapse title={title}
                    id={id}
                    content={content} />
            ))}
        </div>
    )
}

export default Apropos