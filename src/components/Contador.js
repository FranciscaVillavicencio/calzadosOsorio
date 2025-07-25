import React, { useState, Fragment } from "react";


const Contador = () => {
    //antes del return lo que pondremos es la logica del componente
    // lo primero que pasamos en las llaves es el nombre del estado y lo segundo es la funcion que nos permite cambiar el estado
    const [numero, setNumero] = useState(0); //useState es un hook que nos permite crear un estado en el componente

    const aumentar = () => {
        console.log("Aumentar");
        setNumero(numero + 1); //setNumero es la funcion que nos permite cambiar el estado, en este caso aumentamos el numero en 1
    }

    return (
        <Fragment>
            <h3>Primer componente {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>

    );
}



export default Contador;