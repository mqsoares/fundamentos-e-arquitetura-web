export const Navbar = () => {
    return (
        <header className="container-xl d-flex flex-row flex-nowrap align-items-baseline">
            <div className="d-flex flex-row">
                <img
                    src="/rickmortylogo.svg"
                    alt="logo rick and morty"
                    width="40px"
                ></img>
                <h1 className="m-0 pt-2">Rick and Morty</h1>
            </div>

            <nav>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                        >
                            Personagens
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Episódios
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">
                            Localização
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

// className="container d-flex flex-row justify-content-between align-items-baseline"
