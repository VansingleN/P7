import './Banner.css'
import banner_background from '../../assets/banner_background.png'

function Banner() {
    return <div className = 'banner_position'>
        <div className = 'banner_div'><h1>Chez vous, partout et ailleurs</h1>
        <div className = 'banner_div_img'></div>
        <img src = {banner_background} alt = 'Bannière de Kasa' className='banner_background' />
        </div>
    </div>
}

export default Banner