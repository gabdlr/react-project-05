import React from 'react';
import PropTypes from 'prop-types';

const Clima = ( { resultado } ) => {
    //extraer los valores
    const { name, main } = resultado;

    if(!name) return null;

    //convertimos la temperatura en grados kelvin a grados celcius
    const kelvinToCelsius = kelvin => {
        return (kelvin - 275.15).toFixed(2);
    }
    return (
        <div className="card-panel white col s12"> 
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">{kelvinToCelsius(main.temp)} °C</p>
            </div>
            <div className="black-text">
                <p>Temperatura máx.: </p>
                <p className="">{kelvinToCelsius(main.temp_max)} °C</p>
            </div>
            <div className="black-text">
                <p>Temperatura mín.: </p>
                <p className="">{kelvinToCelsius(main.temp_min)} °C</p>
            </div>
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;