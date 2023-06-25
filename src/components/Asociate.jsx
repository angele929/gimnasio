import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';


export const Asociate = () => {

  const obtenerRegistro = () =>{
    var datos = localStorage.getItem("Registro");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
 }

  const [registro, setRegistro] = useState(["Registro"]);

  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [email, setEmail] = useState("");

  const botonGuardar = (e) =>{
    e.preventDefault();
    var miObjeto = {nombre, email, mensaje}
    setRegistro ([...registro, miObjeto]);
    limpiarFormulario()
  } 

  const limpiarFormulario = (e) =>{
    setNombre("");
    setEmail("");
    setMensaje("");
    document.getElementById("miFormulario").reset();
  }

 

  useEffect(() => {
    localStorage.setItem("Registro",JSON.stringify(registro));
  },[registro]);

  return (
    <center>
   <div className='conteinter' style={{ background:"#E6E6FA", padding:20}}>
    <form id='miFormulario' onSubmit={botonGuardar}> 
        <h1>Formulario de inscripcion</h1>
        <input  style={{marginBottom:20}} type="text" className="form-control" id="nombre" placeholder="Digite su nombre" onChange={(e) => setNombre(e.target.value)} />
        <input  style={{marginBottom:20}} type="email" className="form-control" id="email" placeholder="Digite su Email" onChange={(e) => setEmail(e.target.value)}/>
        <textarea style={{marginBottom:20}} type="mensaje" className="form-control" id="mensaje" placeholder="Digite su mensaje" onChange={(e) => setMensaje(e.target.value)}/>
        <button style={{marginBottom:20}}  className="btn btn-primary btn-lg">
            Asosiarme
        </button>
    </form>
   </div>
  </center>
  )
}