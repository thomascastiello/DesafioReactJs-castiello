import 'bootstrap/dist/css/bootstrap.min.css';
import logonav from '../img/herramientas.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="App ">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className=' d-flex container-fluid'>
              <Link to='/'><img className= "logo" style={{width: "100px", height:"100px"}} src={logonav}/></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end d-flex" id="navbarNav">
                <Link to='/cart' className='margin-r btn btn-outline-dark rounded-circle' style={{textDecoration: "none", color: "#FF328E"}}><CartWidget/></Link>
              </div>
            </div>
        </nav>
      </div>
    );
}

export default Navbar;