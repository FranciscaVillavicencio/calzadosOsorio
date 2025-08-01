import React, { useState, Fragment } from "react";



const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    });

    //funcion que escucha los cambios en los inputs del formulario

    const handleInputChange = (event) => {
        console.log("console1:", event.target.value);
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    }


    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido)//previene el comportamiento por defecto del formulario
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>

                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control mb-2" name="nombre" onChange={handleInputChange} />
                </div>

                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control mb-2" name="apellido" onChange={handleInputChange} />
                </div>

                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>

            </form>
            <h2>Datos del Formulario</h2>
            <p>Nombre: {datos.nombre}</p>
            <p>Apellido: {datos.apellido}</p>
        </Fragment>)


}



export default Formulario;