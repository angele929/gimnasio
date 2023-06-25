import React from 'react'
import Clases6 from '../img/Clases6.png'
import Clases10 from '../img/Clases10.png'
import Clases3 from '../img/Clases3.jpeg'
import Clases4 from '../img/Clases4.jpeg'
import Clases8 from '../img/Clases8.png'
import Clases9 from '../img/Clases9.png'
import '../styles/Banner.css'

export const Clases = () => {
  return (
   <center>
   <div className='conteinter' style={{ background:"#D8BFD8", padding:20}}>
    <form  > 
        <div >
            <img style={ { width: 260, height: 260 }} src={Clases9} className="d-block" alt="no encontrada" />
            <p id="texto">La mejor música para bailar, transpirás un montón, te reís y te liberás. ¿Te perdés en la coreo? Vos seguí, nadie te juzga. Aca venís a divertirte.</p>
        </div>
    </form>
   </div>
   <div className='conteinter' style={{ background:"#EE82EE", padding:20}}>
    <form  > 
        <div >
        <img style={ { width: 260, height: 260 }} src={Clases10} className="d-block" alt="no encontrada" />
            <p id="texto">Una clase breve e intensa enfocada en la zona media de tu cuerpo (abdominales y espinales). Mejorás tu postura, aliviás dolores de espalda y tenés material para unas buenas selfies en el espejo.</p>
        </div>
    </form>
   </div>
   <div className='conteinter' style={{ background:"#BA55D3", padding:20}}>
    <form id='miFormulario' > 
        <div >
        <img style={ { width: 260, height: 260 }} src={Clases3} className="d-block" alt="no encontrada" />
            <p id="texto">Te propone 45 minutos de clase con intensidad al máximo y una variada combinación de golpes de manos y patadas para traspirar y llevar tu energía al 100%.</p>
        </div>
    </form>
   </div>
   <div className='conteinter' style={{ background:"#9370DB", padding:20}}>
    <form id='miFormulario' > 
        <div >
        <img style={ { width: 260, height: 260 }} src={Clases4} className="d-block" alt="no encontrada" />
            <p id="texto">Conectate con tu respiración, regalate un momento solo para vos. Una serie de posturas (llamadas “asanas”) te permiten alcanzar una serenidad en tu mente y en tu cuerpo. Vas a tu ritmo, sin presiones.</p>
        </div>
    </form>
   </div>
   <div className='conteinter' style={{ background:"#8A2BE2", padding:20}}>
    <form id='miFormulario' > 
        <div >
        <img style={ { width: 260, height: 260 }} src={Clases8} className="d-block" alt="no encontrada" />
            <p id="texto">Una clase que te tonifica y aumenta tu resistencia muscular. Ponele que quieres endurecer los brazos y no te copa mucho la sala musculación, esta es la clase para vos.</p>
        </div>
    </form>
   </div><div className='conteinter' style={{ background:"#9400D3", padding:20}}>
    <form  > 
        <div >
           <img style={ { width: 260, height: 260 }} src={Clases6} className="d-block" alt="no encontrada" />
            <p id="texto">Esta clase de 30 minutos te ayudará a fortalecer y mejorar la flexibilidad de tu cuerpo en forma integral a través de movimientos suaves y controlados. Además mejorarás tu postura de manera progresiva, ¡te ayudará a prevenir lesiones!</p>
        </div>
    </form>
   </div>
  </center>
 

  )
}
