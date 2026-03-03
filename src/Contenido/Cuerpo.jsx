import img1 from '../assets/trajeh1.png'
import img2 from '../assets/trajem.png'

export function Cuerpo(){
    return(
        <div className="cuerpo">
            <div className="tarjeta1">
            <img src={img1} alt='trajeh1' />
            </div>
             <div className="tarjeta2">
                <img src={img2} alt='trajeh1' />

            </div>
             <div className="tarjeta3">
                <img src={img1} alt='trajeh1' />
            </div>
             <div className="tarjeta4">

            </div>
        </div>
    )
}