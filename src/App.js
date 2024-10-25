import AOS from 'aos';
import Routers from "./Routers";
import Navbars from './components/Navbars';
import './App.css';
function App() {
  AOS.init()
  return (
    <div className="row no-gutters mx-0" style={{backgroundColor : '#111' }} >
      <div className="col-sm-12 col-md-12 col-lg-11 px-0">
        <Routers />
      </div>
      <div className="col-sm-12 col-md-12 col-lg-1 px-0" >
        <Navbars />
      </div>
    </div>
  );
}

export default App;
