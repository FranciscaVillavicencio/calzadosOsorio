import React, { useState, Fragment } from "react";



const Lista = () => {


    const [arrayNumero, setArrayNumero] = useState([1, 2, 3, 4, 5]); //useState es un hook que nos permite crear un estado en el componente

    const [numero, setNumero] = useState(6); //useState es un hook que nos permite crear un estado en el componente

    const agregarElemento = () => {

        setNumero(numero + 1); //incrementa el numero en 1
        setArrayNumero([
            ...arrayNumero, numero

        ])
    }


    return (
        //jsx es una extension de sintaxis que nos permite escribir  JavaScript dentro de HTML
        <Fragment>
            <h1>Lista</h1>
            <button onClick={agregarElemento}>Agregar</button>

            {
                arrayNumero.map((item, index) =>
                    <p key={index}>{item}- {index}</p>
                )

            }
        </Fragment>

    );

}




export default Lista;