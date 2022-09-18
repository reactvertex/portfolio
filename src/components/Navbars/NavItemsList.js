import React, { useState } from "react";
import { NavItems, NavIcon,NavLabel } from './styleComponent';


const NavItemsList = ({ val, index ,handlePath,clickActiveIndex }) => {
    const [activeItem, setActiveList] = useState('')
   

    return (
        <NavItems index={index}
           onClick={() => handlePath(val.path, index)}    
           bgcolor={index === clickActiveIndex ? '#ffb400' : '#2b2a2a' }      
        >
            <NavIcon>
                {val.Icon}
            </NavIcon>

        </NavItems>
    )
}

export default NavItemsList;