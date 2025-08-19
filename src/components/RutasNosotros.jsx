import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const RutasNosotros = () => {
    


   // creamos un estado 
   const  [equipo, setEquipo] = React.useState([]);

   // cuando el componente se monta, se ejecuta este efecto
    React.useEffect( () => {
        obtenerDatos();
    }, [])

    // llamado a la API

    const obtenerDatos = async () => {
       const data = await fetch('https://jsonplaceholder.typicode.com/users');
       
       //transformamos la respuesta a json
        const users = await data.json();
         //actualizamos el estado con los datos obtenidos
        setEquipo(users);
    }

  


    // Renderizamos el componente
    return (
        <div>
            <h1>Nosotros</h1>
            {/* Recorremos el array de equipo y mostramos los nombres */}
            <ul>
                {
                    // Si equipo tiene datos, los mapeamos
                     equipo.map(item => (
                        
                        <li key={item.id}>
                            {/* Creamos una URL a la ruta1 /nosotros/:id */}
                        <Link to = {`/nosotros/${item.id}`} >
                        {item.name} 
                        </Link>
                            
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default RutasNosotros;
