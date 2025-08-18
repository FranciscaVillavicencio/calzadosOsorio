import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"


const EditUserForm = (props) => {



    const { register, handleSubmit, setValue, formState: { errors }, } = useForm({
        defaultValues: props.currentUser
    });

    // permite que al pinchar editar, se carguen los valores del usuario a editar
    setValue("nombre", props.currentUser.nombre);
    setValue("usuario", props.currentUser.usuario);


    const onSubmit = (data, e) => {
        data.id = props.currentUser.id; // Asegurarse de que el ID del usuario se mantenga

        props.updateUser(props.currentUser.id, data)

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
                <button className="btn btn-warning" type="submit">Editar Usuario</button>
            </div>

        </form>
    )
}


export default EditUserForm;