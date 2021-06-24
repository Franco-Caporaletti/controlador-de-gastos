import React, { useState, useEffect } from 'react'
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlSaldo from './components/ControlSaldo';

function App() {

  const [saldo, guardarSaldo] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [creargasto, guardarCreargasto] = useState(false)

  //useEffect actualiza el restante
  useEffect(() => {
    if(creargasto){
      //agrega el nuevo saldo
      guardarGastos([
        //hacer copia de gastos
        ...gastos,
        //agregamos nuevo gasto
        gasto
      ]);

      //resta del saldo actual
      const saldoRestante = restante - gasto.cantidad
      guardarRestante(saldoRestante);


      //resetear a false
      guardarCreargasto(false)
    }
  }, [gasto, creargasto, gastos, restante])



  return (
    <div className="container">
      <header>
        <h1>Controlador de gastos</h1>
        <div className="contenido-principal contenido">
          { mostrarpregunta ? 
          (
            <Pregunta 
              guardarSaldo={guardarSaldo}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          )  : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  guardarGasto={guardarGasto}
                  guardarCreargasto={guardarCreargasto}
                />
              </div>

              <div className="one-half column">
                <Listado 
                  gastos={gastos}
                />

                <ControlSaldo 
                  saldo={saldo}
                  restante={restante}
                />
              </div>
            </div>
          ) 
          }
          

        </div>
      </header>
    </div>
  );
}

export default App;
