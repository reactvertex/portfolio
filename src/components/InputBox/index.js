import React from 'react';
import { InputBoxWrapper } from './StyleComponent';

const InputBox = ({ type, handleChange, placeholder, name }) => {
    return (
            <InputBoxWrapper type={type} name={name} onChange={(e) => handleChange(e)} placeholder={placeholder} />
    )
}
export default InputBox;