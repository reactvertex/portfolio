import React from 'react';
import {AboutButton} from './styleComponents'; 

const CustomButton = ({text ,icon,marginLeft,handleClick,width}) =>{
    
    return (
     <AboutButton width={width} marginLeft={marginLeft} onClick={handleClick}>{text}<div>{icon}</div></AboutButton>
    )
}
export default CustomButton;