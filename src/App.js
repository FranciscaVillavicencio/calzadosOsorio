
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import RutasInicio from './components/RutasInicio';
import RutasContacto from './components/RutasContacto';
import RutasNosotros from './components/RutasNosotros';


// import Contador from './components/Contador';
// import Lista from './components/Lista';
// import Formulario from './components/Formulario';
// import FormularioReactForm from './components/FormularioReactForm';
// import EjemploFormHook from './components/EjemploFormHook1';
// import SaludoProps from './components/SaludoProps';
// import Comentario from './components/Comentario';
// import CrudForm from './components/CrudForm';




function App() {


  //creamos una variable que almacena un objeto con la informacion de una persona
  // const persona2 = {
  //   nombre: "Gary",
  //   urlImagen: "https://placehold.co/64x64",
  //   texto: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus sceler",
  // }


  return (
    // <div className="container mt-5">
    //   {/* <Contador /> */}
    //   {/* <Lista /> */}
    //   {/* <Formulario /> */}
    //   {/* <FormularioReactForm /> */}
    //   {/* <EjemploFormHook /> */}

    //   {/* PROPS */}
    //   {/* //imaginamos que persona es una variable que esta pasando el nombre de una persona */}
    //   {/* <SaludoProps persona="Jhon" />
    //   <SaludoProps persona="Charlie" />
    //   <SaludoProps persona="Chet" /> */}

    //   {/* EJEMPLO CON PROPS */}
    //   {/* <Comentario persona2={persona2} /> */}
    //   {/* EJEMPLO Aplicacion CRUD*/}
    //   {/* <CrudForm /> */}

    //   {/* EJEMPLO de rutas*/}


    // </div>

    <Router>
      <div className='container'>
        <h1>Navbar</h1>
        <hr />
        <Routes>

          <Route path='/' element={<RutasInicio />} />
          <Route path='/contacto' element={<RutasContacto />} />
          <Route path='/nosotros' element={<RutasNosotros />} />


        </Routes>


      </div>
    </Router>





  );
}

export default App;
