import React, { Fragment, useState } from "react";
import UserTable from "./UserTable";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";


const CrudForm = () => {

    const usersData = [
        { id: uuidv4(), nombre: 'Darwin', usuario: 'Derbi' },
        { id: uuidv4(), nombre: 'Han', usuario: 'Juan' },
        { id: uuidv4(), nombre: 'Charlie', usuario: 'Carlos' }
    ]

    const [users, setUsers] = useState(usersData);


    // Funcion parar Agregar usuarios nuevos
    // Esta funcion recibe al user y lo agrega al estado users
    const addUser = (user) => {
        user.id = uuidv4(); // Generar un nuevo ID único
        setUsers([...users, user])
    };


    // Funcion parar eliminar usuarios
    const deleteUser = (id) => {
        const arrayFiltrado = users.filter((user) => user.id !== id);
        setUsers(arrayFiltrado)
    };

    // Editar usuarios
    //creo un estado para pintar un formulario u otro
    const [editing, setEditing] = useState(false);

    //creo un estado para el usuario editado, con el useState vacio
    const [currentUser, setCurrentUser] = useState({
        id: null,
        nombre: '',
        usuario: ''
    });

    // Funcion para pintar la informacion original del usuario a editar

    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({
            id: user.id,
            nombre: user.nombre,
            usuario: user.usuario
        })
    }

    // Funcion para actualizar los datos del usuario editado
    // recibe el id del usuario y el usuario actualizado
    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    }


    return (
        <Fragment>
            <h1>Crud Form</h1>
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div>
                    {
                        editing ? (

                            <div>
                                <h2>Editar usuarios</h2>
                                <hr />
                                <EditUserForm
                                    currentUser={currentUser}
                                    updateUser={updateUser}
                                />
                            </div>
                        ) : (
                            <div div >
                                <h2>Agregar usuarios</h2>
                                <hr />
                                <AddUserForm addUser={addUser} />
                            </div>
                        )
                    }





                </div>

                <div>
                    {/* pasamos la lista de usuarios al componente UserTable */}
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
                </div>


            </div>




        </Fragment >
    );

}



export default CrudForm;