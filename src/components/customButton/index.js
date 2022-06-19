import React from 'react';
import {AboutButton} from './styleComponents'; 

const CustomButton = ({text ,icon}) =>{
    return (
     <AboutButton>{text}<span>{icon}</span></AboutButton>
    )
}
export default CustomButton;