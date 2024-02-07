import { Navbar as BoostrapNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <BoostrapNavbar expand="lg" className="bg-body-tertiary">
            <Container className="align-items-baseline">
                <BoostrapNavbar.Brand href="/">
                    <div className="d-flex flex-row align-items-baseline gap-2">
                        <img
                            src="/rickmortylogo.svg"
                            alt="logo rick and morty"
                            width="40px"
                        ></img>
                        <span className="fs-3">Rick and Morty</span>
                    </div>
                </BoostrapNavbar.Brand>
                <BoostrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BoostrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="fs-5 nav-link" to="/">
                            {" "}
                            Personagens
                        </Link>

                        <Link className="fs-5 nav-link" to="episodes">
                            {" "}
                            Episódios
                        </Link>

                        <Link className="fs-5 nav-link" to="location">
                            {" "}
                            Localização
                        </Link>
                    </Nav>
                </BoostrapNavbar.Collapse>
            </Container>
        </BoostrapNavbar>
    );
};
