import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="bg-body-tertiary py-4 ">
            <Container>
                <div className="footer d-flex flex-column align-items-center">
                    <p className="mb-0">
                        Rick and Morty by <strong>Miquéias Soares</strong>
                    </p>
                    <div className="d-flex gap-4">
                        <a
                            className="nav-link"
                            target="_blank"
                            href="https://www.linkedin.com/in/mq-soares/"
                            rel="noreferrer"
                        >
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a
                            className="nav-link"
                            target="_blank"
                            href="https://github.com/mqsoares"
                            rel="noreferrer"
                        >
                            <FaGithub /> GitHub
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};
