import { Navbar as BoostrapNavbar, Container, Nav } from "react-bootstrap";

export const Navbar = () => {
    return (
        <BoostrapNavbar expand="lg" className="bg-body-tertiary">
            <Container className="align-items-baseline">
                <BoostrapNavbar.Brand href="#home">
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
                        <Nav.Link className="fs-5" href="#personagens">
                            Personagens
                        </Nav.Link>
                        <Nav.Link className="fs-5" href="#episodios">
                            Episódios
                        </Nav.Link>
                        <Nav.Link className="fs-5" href="#localizacao">
                            Localização
                        </Nav.Link>
                    </Nav>
                </BoostrapNavbar.Collapse>
            </Container>
        </BoostrapNavbar>
    );
};
