import React from "react";
import { NavIconsList } from '../../Constant/Navbar';
import NavItemsList from './NavItemsList';

const Navbars = () => {
   
    return (
        <div className="no-gutters  d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#111', width: '100%x', height : '100vh' }}>
            {NavIconsList.map((val, index) => (
                <NavItemsList val={val} index={index} />
            ))}
        </div>
    )
}
export default Navbars;