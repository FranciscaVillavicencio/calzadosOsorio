import React, { useState, Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form"


const EjemploFormHook = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const [Entradas, setEntradas] = useState([])

    const onSubmit = (data, e) => {
        console.log(data)
        //data seria lo que ingresa el usuario en el formulario
        setEntradas([...Entradas,
            data
        ])
        //para limpiar el formulario
        e.target.reset()
    }


    return (
        <Fragment>
            <h1>Ejemplo de Formulario con React Hook Form</h1>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-3">
                    <input
                        {...register("titulo", {
                            required: "Título requerido",
                            maxLength: { value: 20, message: "Máximo 20 caracteres" },
                            minLength: { value: 2, message: "Mínimo 2 caracteres" },
                        })}
                        className="form-control my-2"
                        placeholder="Título"
                        type="text"
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.titulo?.message}
                    </span>

                    <input
                        {...register("descripcion", {
                            required: "Descripción requerida",
                            maxLength: { value: 20, message: "Máximo 20 caracteres" },
                        })}
                        className="form-control my-2"
                        placeholder="Descripción"
                        type="text"
                    />

                    <span className="text-danger text-small d-block mb-2">
                        {errors?.descripcion?.message}
                    </span>


                    <button className="btn btn-primary">Enviar</button>
                </div>
            </form>


            {/* para imprimir las entradas */}
            <ul>
                {
                    Entradas.map(item =>
                        <li>{item.titulo} - {item.descripcion}</li>
                    )
                }
            </ul>

        </Fragment>

    )
}


export default EjemploFormHook;