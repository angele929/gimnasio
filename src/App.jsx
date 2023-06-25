import { useState } from 'react';
import './App.css';
import  {Header}  from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { ErrorNotFound } from './components/ErrorNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Instructor } from './components/Instructor';
import { Asociate } from './components/Asociate';
import { Clases } from './components/Clases';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Header></Header>
         
         <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/Asociate' element={<Asociate/>} />
          <Route exact path='/Clases' element={<Clases/>} />
          <Route exact path='/Instructor' element={<Instructor/>} />
          <Route exact path="*" element={<ErrorNotFound/>}/>

         </Routes>
        <Footer></Footer>
       </BrowserRouter>

      
    </div>
  );
}

export default App;
