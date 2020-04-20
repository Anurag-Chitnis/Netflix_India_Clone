import React from 'react';
import './input-group.styles.scss';

const InputGroup = ({type, placeholder}) => (
    <div className="field-group">
        <input className="field-group__input" type={type} placeholder={placeholder}/>
        <button className="field-group__button">TRY IT NOW</button>
    </div>
);

export default InputGroup;