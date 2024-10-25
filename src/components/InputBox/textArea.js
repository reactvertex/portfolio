import React from "react";
import {TextAreaBoxWrapper} from './StyleComponent';

const TextAreaBox  = ({ type, handleChange, placeholder, name, dataAos, dataAosDelay }) =>{
    return(
        <TextAreaBoxWrapper  data-aos={dataAos} data-aos-delay={dataAosDelay} type={type} name={name} onChange={(e) => handleChange(e)} placeholder={placeholder} rows="8" cols="50" />
    )
}

export default TextAreaBox ;