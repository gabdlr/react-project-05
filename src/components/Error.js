import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ mensaje }) => {
    return ( 
    <div className="card-panel white col s12"> 
    <div className="black-text">
        <h2>Error</h2>
        <p className="red darken-4">{mensaje}</p>
    </div>
    </div> );
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
export default Error;