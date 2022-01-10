import React from "react";
import PropTypes from 'prop-types';
//import React, { Fragment } from 'react';

// SFC functional components es como se usa react ahora antes se utilizaba con clases

const PrimeraApp = ( { saludo, subtitulo } ) => {

    
    return  (
        <>
            <React.StrictMode>
                <h1>{ saludo }</h1>
                {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
                <p>{ subtitulo }</p>
            </React.StrictMode>
           
        </>
        );

    }
    PrimeraApp.propTypes = {
        saludo: PropTypes.string.isRequired
    }

    PrimeraApp.defaultProps = {
        subtitulo: 'Soy un subtitulo'
    }

export default PrimeraApp;