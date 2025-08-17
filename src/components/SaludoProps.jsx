import React, { Fragment, useState } from "react";


// para pasar la variable persona a SaludoProps utilizamos props
const SaludoProps = (props) => {


    console.log(SaludoProps)


    return (

        <Fragment>
            <div>
                <h2>Hola {props.persona}</h2>
            </div>
        </Fragment>

    )
}

export default SaludoProps;