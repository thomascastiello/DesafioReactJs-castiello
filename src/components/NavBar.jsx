import CartWidget from "./CartWidget";

function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg colornf border-2 border-dark border-bottom">
        <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
                <img src="./images/beer.png" alt="Beer" class="logo navbar-brand"/>
            </a>
            <button className="navbar-toggler btn-danger" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon btn-dark"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <a className=" text-light w-100 cursive" href="index.html">Moe Beer</a>
                    </li>
                </ul>
                <ul className="d-flex navbar-navnavbar-nav-scroll navbar-nav  navbar-nav-scroll ">
                    <li className="nav-item navtransition">
                        <a className="nav-link active text-light" aria-current="page" href="index.html">INICIO</a>
                    </li>
                    <li className="nav-item navtransition">
                        <a className="nav-link active text-light" href="#Catalogo">CERVEZAS</a>
                    </li>
                    <li className="nav-item navtransition">
                        <a className="nav-link active text-light" href="#RegistrateHB">REGISTRATE</a>
                    </li>
                    <li className="nav-item navtransition">
                        <a className="nav-link active text-light" href="#Carrito"><CartWidget></CartWidget></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
);
}

export default NavBar;
