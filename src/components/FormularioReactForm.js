import React, { useState, Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form"  // importando useForm y SubmitHandler de react-hook-form


const FormularioReactForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        console.log(data)

    }



    return (

        <Fragment>
            <h1>Formulario con React Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-3">
                    <input
                        {...register("titulo", {
                            required: "Título requerido",
                            maxLength: { value: 20, message: "Máximo 20 caracteres" },
                        })}
                        className="form-control my-2"
                        placeholder="Título"
                        type="text"
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.titulo?.message}
                    </span>

                    <button className="btn btn-primary">Enviar</button>
                </div>
            </form>

        </Fragment>
    )

}


export default FormularioReactForm;