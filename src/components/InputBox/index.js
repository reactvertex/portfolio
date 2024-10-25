import React from 'react';
import { InputBoxWrapper } from './StyleComponent';

const InputBox = ({ type, handleChange, placeholder, name, dataAos, dataAosDelay }) => {
    return (
            <InputBoxWrapper  data-aos={dataAos} data-aos-delay={dataAosDelay} type={type} name={name} onChange={(e) => handleChange(e)} placeholder={placeholder} />
    )
}
export default InputBox;