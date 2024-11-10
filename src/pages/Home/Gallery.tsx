import './Gallery.scss'
import Grid from '@mui/material/Grid';
import Gallery10 from './../../../public/gallery1-0.png' 
import Gallery11 from './../../../public/gallery1-1.png' 
import Gallery20 from './../../../public/gallery2-0.png' 
import Gallery21 from './../../../public/gallery2-1.png' 
import Gallery30 from './../../../public/burning-man.png' 
import Gallery31 from './../../../public/gallery3-1.png' 

const Gallery = () => {
    return (
        <div id="photo" className="gallery">
            <div className="gallery-column">
                <img src={Gallery10} alt="gallery10" className='photo_wide'/>
                <img src={Gallery11} alt="gallery11" className='photo_long'/>
            </div>
            <div className="gallery-column">
                <img src={Gallery20} alt="gallery20" className='photo_long'/>
                <img src={Gallery21} alt="gallery21" className='photo_wide'/>
            </div>
            <div className="gallery-column">
                <img src={Gallery30} alt="gallery30" className='photo_wide'/>
                <img src={Gallery31} alt="gallery31" className='photo_long'/>
            </div>
        </div>
    )
}

export default Gallery