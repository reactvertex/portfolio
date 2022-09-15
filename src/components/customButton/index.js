import React from 'react';
import {AboutButton} from './styleComponents'; 

const CustomButton = ({text ,icon,marginLeft,handleClick}) =>{
    
    return (
     <AboutButton marginLeft={marginLeft} onClick={handleClick}>{text}<div>{icon}</div></AboutButton>
    )
}
export default CustomButton;