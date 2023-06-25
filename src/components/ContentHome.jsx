import React from 'react'
import Promo1 from '../img/Promo1.jpg'
import Promo2 from '../img/Promo2.jpeg'
import Promo3 from '../img/Promo3.jpg'
import Promo4 from '../img/Promo4.jpeg'

export const ContentHome = () => {
  return (
<div>
  <div className="row row-cols-1 row-cols-md-2 g-4">
   <div className="col">
    <div className="card">
      <img src={Promo1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Promociones</h5>
        <p className="card-text">Te ofrecemos feneficios y promociones inperdibles.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Promo2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Los Descuentos Que Buscas</h5>
        <p className="card-text">Encontrá todos los descuentos que estás buscando. Hasta 50% de descuento en locales adheridos.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Promo3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Serca Tuyo</h5>
        <p className="card-text">Encontrá tu espacio más cercano para mantenerte activo y saludable.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Promo4} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Te Ofresemos</h5>
        <p className="card-text">entrenamiento y rutinas personalizadas y mucho más.</p>
      </div>
    </div>
  </div>
</div>
      </div>
  )
}
