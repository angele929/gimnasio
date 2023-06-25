import React from 'react'
import Carrucel1 from '../img/Carrucel1.png'
import Imagenes_Carrucel2 from '../img/Imagenes_Carrucel2.png' 
import Img2 from '../img/Img2.jpeg'
import '../styles/Banner.css'

export const Banner = () => {
  
  return (

    <div
      className="slider"
        >
            <ul className="ul-slider" style={{marginTop:30}}>
                <li className="li-slider"><img className="img-slider" src={Imagenes_Carrucel2}></img></li>
                <li className="li-slider"><img className="img-slider" src={Img2}></img></li>
                <li className="li-slider"><img className="img-slider" src={Carrucel1}></img></li>

            </ul>
        </div>
  )
}