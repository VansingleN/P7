import './Banner.css'
import banner_background from '../../assets/banner_background.png'

// Composant Bannière, modulable dans son image et son texte
function Banner({ image, text }) {
    return <div className='banner_position'>
        <div className='banner_div'>
            <h1>{text}</h1>
            <img className='banner_div_img' src={image} alt='Bannière de Kasa' />
            <img className='banner_div_background' src={banner_background} alt='' />
        </div>
    </div>
}

export default Banner