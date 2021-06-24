import React, {useState} from 'react';
import PropTypes from 'prop-types'
import Error from './Error';
import shortid from 'shortid';


const Formulario = ({guardarGasto, guardarCreargasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    const agregarGasto = e =>{
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true)
            return;
        }
        guardarError(false);

        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCreargasto(true)

        //resetear formulario
        guardarNombre('');
        guardarCantidad(0);
    }

    return(
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o saldo incorrecto" /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                type="text" 
                className="u-full-width" 
                placeholder="Ej. impuestos" 
                value={nombre}
                onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                type="number" 
                className="u-full-width" 
                placeholder="Ej. 300 (sin utilizar signos)" 
                value={cantidad}
                onChange={e =>guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto" />
        </form>
    );
}

Formulario.propTypes={
    guardarGasto: PropTypes.func.isRequired,
    guardarCreargasto: PropTypes.func.isRequired,
}

export default Formulario