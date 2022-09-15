import React from "react";
import {TextAreaBoxWrapper} from './StyleComponent';

const TextAreaBox  = ({ type, handleChange, placeholder, name }) =>{
    return(
        <TextAreaBoxWrapper type={type} name={name} onChange={(e) => handleChange(e)} placeholder={placeholder} rows="8" cols="50" />
    )
}

export default TextAreaBox ;