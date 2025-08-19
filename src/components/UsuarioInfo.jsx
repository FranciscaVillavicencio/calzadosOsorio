import React from 'react'
import { useParams } from 'react-router'

const UsuarioInfo = () => {
  const { id } = useParams();

  // creamos un estado
  const [info, setInfo] = React.useState([]);

  // cuando el componente se monta, se ejecuta este efecto
  React.useEffect(() => {
    obtenerDatos();
  }, []);

  // llamado a la API

  const obtenerDatos = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    //transformamos la respuesta a json
    const users = await data.json();
    //actualizamos el estado con los datos obtenidos
    setInfo(users);
  };

  return (
    <div>
      <p>{info.username}</p>
    </div>
  );
}

export default UsuarioInfo