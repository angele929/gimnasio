import React from 'react'
import Instr1 from '../img/Instr1.jpeg'
import Instr3 from '../img/Instr3.jpeg'
import Instr4 from '../img/Instr4.jpeg'
import Instr2 from '../img/Instr2.jpeg'
import Instructor3 from '../img/Instructor3.jpeg'
import Instructor2 from '../img/Instructor2.jpeg'
import '../styles/Instructor.css'


export const Instructor = () => {
  return (
    <center>
       <div className='conteiner' style={{padding:20}}>   
            <div className="row">
            <div className="col-lg-4">
                <img  className='imgRedonda' width='140' height='140' src={Instr1} alt="No encontrado"/>
                <h2 className="fw-normal">Sara Encinas</h2>
                <p> Especialidad en Pilates</p>
                
            </div>
            <div className="col-lg-4">
                <img  className='imgRedonda' width='140' height='140'  src={Instr4} alt="No encotrdo"/>
                <h2 className="fw-normal">Macarena Dias</h2>
                <p>Especialidad en Arobic</p>
                
            </div>
            <div className="col-lg-4">
                <img  className='imgRedonda' width='140' height='140'  src={Instr3} alt="No encontrado"/>
                <h2 className="fw-normal">Pablo Pereyra</h2>
                <p>Especialidad Cross Force</p>
                
            </div>
            <div className="col-lg-4">
                <img  className='imgRedonda' width='140' height='140'  src={Instr2} alt="No encontrado"/>
                <h2 className="fw-normal">Carlos Rios</h2>
                <p>Especialidad Musculo y Resistencia</p>
                
            </div>
            <div className="col-lg-4">
                <img  className='imgRedonda' width='140' height='140'  src={Instructor3} alt="No encontrado"/>
                <h2 className="fw-normal">Adrian Juarez</h2>
                <p>Especialidad Pesas y Musculacion</p>
                
            </div>
            <div className="col-lg-4">
                <img  className='imgRedonda' width='140' height='140'  src={Instructor2} alt="No encontrado"/>
                <h2 className="fw-normal">Tomas Meller</h2>
                <p>Especialdades Artes Marciales</p>
                
            </div>
            </div>
       </div>
    </center>
    
  )
}