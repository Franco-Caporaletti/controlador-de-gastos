import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error';

const Pregunta = ({guardarSaldo, guardarRestante, actualizarPregunta}) => {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    const definirSaldo = e =>{
        guardarCantidad( parseInt(e.target.value, 10) )
    }

    const agregarSaldo = e =>{
        e.preventDefault()

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return
        }

        //si se pasa la validacion
        guardarError(false)
        guardarSaldo(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu saldo disponible</h2>
            { error ? <Error mensaje="El saldo es incorrecto" /> : null }
            <form
                onSubmit={agregarSaldo}
            >
                <input 
                type="number" 
                className="u-full-width" 
                placeholder="Ingresa tu saldo" 
                onChange={definirSaldo}
                />

                <input 
                type="submit" 
                className="button-primary u-full-width" 
                value="Definir saldo" 
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes={
    guardarSaldo: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta