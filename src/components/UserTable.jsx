import React, { Fragment, useState } from "react";



const UserTable = (props) => {


    return (
        <Fragment>

            <div>
                <h2>Lista Usuarios</h2>
            </div>

            <table style={{ width: "100%", border: "1px solid black", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black" }}>Nombre</th>
                        <th style={{ border: "1px solid black" }}>Usuario</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        props.users.length > 0 ?
                            props.users.map((user) => (
                                <tr key={user.id}>
                                    <td style={{ border: "1px solid black" }}>{user.nombre}</td>
                                    <td style={{ border: "1px solid black" }}>{user.usario}</td>
                                    <td>
                                        <button onClick={() => props.editRow(user)}>
                                            Editar
                                        </button>


                                        <button
                                            onClick={() => props.deleteUser(user.id)}
                                        >
                                            Borrar
                                        </button>
                                    </td>
                                </tr>
                            )) : (

                                <tr>
                                    <td colSpan="3">No hay usuarios</td>
                                </tr>
                            )




                    }
                </tbody>
            </table>



        </Fragment>
    );

}



export default UserTable;