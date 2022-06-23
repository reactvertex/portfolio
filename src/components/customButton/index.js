import React from 'react';
import {AboutButton} from './styleComponents'; 

const CustomButton = ({text ,icon,marginLeft}) =>{
    return (
     <AboutButton marginLeft={marginLeft}>{text}<div>{icon}</div></AboutButton>
    )
}
export default CustomButton;