import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavItems, NavIcon,NavLabel } from './styleComponent';


const NavItemsList = ({ val, index }) => {
    const [activeItem, setActiveList] = useState('')
    console.log(val, 'path')

    const navigate = useNavigate()
    const handlePath = (path) => {
        navigate(`${path}`)
    }
    const onMouseEnter = (index) => {
        setActiveList(index)
    }

    const onMouseLeave = () => {
        setActiveList('')
    }

    return (
        <NavItems index={index}
            onClick={() => handlePath(val.path)}
            // onMouseEnter={() => { onMouseEnter(val.index) }}
            // onMouseLeave={() => { onMouseLeave(val.index) }}
            // data-aos="fade-left"
            // data-aos-delay="10"
            // data-aos-easing="ease-in-sine"
        >
            {/* {val.index == activeItem && <NavLabel>csdfdfd</NavLabel>} */}
            <NavIcon>
                {val.Icon}
            </NavIcon>

        </NavItems>
    )
}

export default NavItemsList;