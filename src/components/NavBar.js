function NavBar() {
    return (
<nav class="navbar navbar-expand-lg ">
        <div class="container-fluid fixedmenu colornf  border-2 border-dark border-bottom  navbar-expand-lg">
            <a class="navbar-brand" href="index.html">
                <img src="./images/beer.png" alt="Beer" class="logo navbar-brand"/>
            </a>
            <button class="navbar-toggler btn-danger" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon btn-dark"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li class="nav-item">
                        <a class=" text-light w-100 cursive" href="index.html">Moe Beer</a>
                    </li>
                </ul>
                <ul class="d-flex navbar-navnavbar-nav-scroll navbar-nav  navbar-nav-scroll ">
                    <li class="nav-item navtransition">
                        <a class="nav-link active text-light" aria-current="page" href="index.html">INICIO</a>
                    </li>
                    <li class="nav-item navtransition">
                        <a class="nav-link active text-light" href="#Catalogo">CERVEZAS</a>
                    </li>
                    <li class="nav-item navtransition">
                        <a class="nav-link active text-light" href="#RegistrateHB">REGISTRATE</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
}

export default NavBar;
