import { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {
  //State principal (ex-state del formulario)
  const [ busqueda, guardarBusqueda ] = useState({ciudad:'', pais: ''});
  //Consultar
  const [ consultar, guardarConsultar ] = useState(false);
  //Resultado
  const [ resultado, guardarResultado ] = useState({});
  //Error para resultado no encontrado
  const [ error, guardarError ] = useState(false);

  //Extraer ciudad y pais
  const { ciudad, pais } = busqueda;

  useEffect( () => {
    const consultarAPI = async () => {
      const appId = "74a8613777ef7f10c2c85e59fb9a1819";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarResultado(resultado);

      //Vemos el codigo del resultado de la consulta
      if (resultado.cod === "404" ){
        guardarError(true);
      } else {
        guardarError(false);
      }

    };
    if(consultar) {
      consultarAPI();
      guardarConsultar(false);
    }
  },[consultar, ciudad, pais, resultado, guardarResultado]);

  //Manejamos el posible error en el request a la API
  //Carga condicional de componentes (...)
  let componente;
  if(error) {
    componente = 
    <Error 
      mensaje="No se encontraron resultados"
    />
  } 
  else {
    componente =               
    <Clima
      resultado={resultado}
    />;
  }

  return (
    <Fragment>
      <Header
      titulo="Clima React App"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
              /> 
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
