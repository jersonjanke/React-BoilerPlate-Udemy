import React, { PropTypes } from 'react';

const Button = (propos) => {    
    return(
        <button onClick={propos.clicked}>{propos.name}</button>
    );    
};

Button.propTypes = {
    name: PropTypes.string,
    clicked: PropTypes.func, 
};

export default Button;