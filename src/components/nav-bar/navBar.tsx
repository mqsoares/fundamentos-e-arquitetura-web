import { Navbar as BoostrapNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <BoostrapNavbar expand="lg" className="bg-body-tertiary">
            <Container className="align-items-center">
                <BoostrapNavbar.Brand href="/">
                    <div className="d-flex flex-row align-items-baseline gap-2">
                        <img
                            src="/r&mlogonav.png"
                            alt="logo rick and morty"
                            width="180px"
                        ></img>
                    </div>
                </BoostrapNavbar.Brand>
                <BoostrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BoostrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link
                            className="fs-4 nav-link"
                            to="/"
                            onClick={() =>
                                localStorage.setItem("RMnumPage", "1")
                            }
                        >
                            {" "}
                            Personagens
                        </Link>

                        <Link
                            className="fs-4 nav-link"
                            to="episodes"
                            onClick={() =>
                                localStorage.setItem("RMnumPage", "1")
                            }
                        >
                            {" "}
                            Episódios
                        </Link>

                        <Link
                            className="fs-4 nav-link"
                            to="location"
                            onClick={() =>
                                localStorage.setItem("RMnumPage", "1")
                            }
                        >
                            {" "}
                            Localizações
                        </Link>
                    </Nav>
                </BoostrapNavbar.Collapse>
            </Container>
        </BoostrapNavbar>
    );
};
