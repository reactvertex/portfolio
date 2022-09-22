import React,{useState} from "react";
import { NavIconsList } from '../../Constant/Navbar';
import NavItemsList from './NavItemsList';
import { useNavigate } from "react-router-dom";
import {NavbarContainer} from './styleComponent';
import { useEffect } from "react";

const Navbars = () => {
    const [clickActiveIndex, setClickActiveIndex] = useState(0)
    const routePath = window.location.pathname ;
    
    useEffect(() =>{
        if (routePath) {
            NavIconsList.map(val => {
                if(routePath == val.path){
                    setClickActiveIndex(val.index -1)
                }
           } )    
        }
    },[routePath])
    const navigate = useNavigate()
    const handlePath = (path, index) => {
        navigate(`${path}`)
        setClickActiveIndex(index)
    }
    return (
        <NavbarContainer display={routePath === '/' ? 'none' : 'flex'} className="no-gutters justify-content-center align-items-center" >
            {NavIconsList.map((val, index) => (
                <NavItemsList handlePath={handlePath} val={val} index={index} clickActiveIndex={clickActiveIndex}/>
            ))}
        </NavbarContainer>
    )
}
export default Navbars;