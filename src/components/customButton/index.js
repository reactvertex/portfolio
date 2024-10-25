import React from 'react';
import {AboutButton} from './styleComponents'; 

const CustomButton = ({text ,icon, marginLeft, handleClick, width, dataAos, dataAosdelay}) =>{
    
    return (
     <AboutButton data-aos-delay={dataAosdelay} data-aos={dataAos} width={width} marginLeft={marginLeft} onClick={handleClick}>{text}<div>{icon}</div></AboutButton>
    )
}
export default CustomButton;