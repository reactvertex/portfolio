import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavItems, NavIcon,NavLabel } from './styleComponent';


const NavItemsList = ({ val, index }) => {
    const [activeItem, setActiveList] = useState('')

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
        >
            <NavIcon>
                {val.Icon}
            </NavIcon>

        </NavItems>
    )
}

export default NavItemsList;