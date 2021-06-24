import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { revisarPresupuesto } from '../helpers'

const ControlSaldo = ({saldo, restante}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Saldo: ${saldo}
            </div>

            <div className={revisarPresupuesto(saldo, restante)}>
                Restante: ${restante}
            </div>
        </Fragment>
    )
}

ControlSaldo.propTypes={
    saldo: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
}

export default ControlSaldo
