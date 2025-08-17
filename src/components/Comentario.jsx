import React, { Fragment, useState } from "react";

// Importamos el componente Avatar
import Avatar from './Avatar';



const Comentario = ({ persona2 }) => {


    return (

        <Fragment>
            <h1>Comentario</h1>
            <hr />
            <div className="media">
                {/* <img src={persona2.urlImagen} alt="" className="mr-3" /> */}
                {/* Usamos el componente Avatar y le pasamos la url de la imagen */}
                <Avatar urlImagen={persona2.urlImagen} />
                <div className="media-body">
                    <h5 className="mt-0">{persona2.nombre}</h5>
                    {persona2.texto}
                </div>
            </div>
        </Fragment>

    );


}

export default Comentario;