import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


const RutasContacto = () => {


   // creamos un estado 
   const  [equipo, setEquipo] = React.useState([]);

   // cuando el componente se monta, se ejecuta este efecto
    React.useEffect( () => {
        obtenerDatos();
    }, [])

    // llamado a la API

    const obtenerDatos = async () => {
       const response= await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
       
       //transformamos la respuesta a json
        const data = await response.json();


         //actualizamos el estado con los datos obtenidos
        setEquipo(data.results || []);
    }


    return (
         <div>
            <h1>contactos</h1>
      
            <ul>
                {
                 equipo.map(item =>(
                    <li key={item.name}>
                        <Link to= { `/contacto/${item.url}`} >
                          {item.name}
                        
                        </Link>

                      
                    </li>
                 ))

                }
            
            </ul>
        </div>
    );
}

export default RutasContacto;
