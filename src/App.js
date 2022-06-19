import Routers from "./Routers";
import Navbars from './components/Navbars';
import AOS from 'aos';
function App() {
  return (
    <div className="row no-gutters">
      <div className="col-lg-11 px-0">
        <Routers />
      </div>
      <div className="col-lg-1 px-0">
        <Navbars />
      </div>
    </div>
  );
}

export default App;
