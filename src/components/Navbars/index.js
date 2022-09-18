import React,{useState} from "react";
import { NavIconsList } from '../../Constant/Navbar';
import NavItemsList from './NavItemsList';
import { useNavigate } from "react-router-dom";


const Navbars = () => {
    const [clickActiveIndex, setClickActiveIndex] = useState(0)

    const navigate = useNavigate()
    const handlePath = (path, index) => {
        navigate(`${path}`)
        setClickActiveIndex(index)
    }
    return (
        <div className="no-gutters  d-flex flex-column justify-content-center align-items-center" style={{ position : 'fixed',  width: '100%x', height : '100vh' }}>
            {NavIconsList.map((val, index) => (
                <NavItemsList handlePath={handlePath} val={val} index={index} clickActiveIndex={clickActiveIndex}/>
            ))}
        </div>
    )
}
export default Navbars;