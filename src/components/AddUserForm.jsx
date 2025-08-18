import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"


const AddUserForm = (props) => {

    const { register, handleSubmit, formState: { errors }, } = useForm();


    const onSubmit = (data, e) => {

        props.addUser(data);

        e.target.reset();
    }



    return (
        <form className="row" onSubmit={handleSubmit(onSubmit)}>

            <div className="col-md-3">

                <input type="text" placeholder="Nombre" className="form-control mb-2" name="nombre"  {...register("nombre", {
                    required: "Nombre requerido",
                    maxLength: { value: 20, message: "Máximo 20 caracteres" },
                })} />

                <span className="text-danger text-small d-block mb-2">
                    {errors?.nombre?.message}
                </span>
            </div>

            <div className="col-md-3">

                <input type="text" placeholder="Usuario" className="form-control mb-2" name="usuario"  {...register("usuario", {
                    required: "Usuario requerido",
                    maxLength: { value: 20, message: "Máximo 20 caracteres" },
                })} />

                <span className="text-danger text-small d-block mb-2">
                    {errors?.usaurio?.message}
                </span>
            </div>

            <div className="col-md-3">
                <button className="btn btn-primary" type="submit">Enviar</button>
            </div>

        </form>
    )
}


export default AddUserForm;