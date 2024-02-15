import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

export const EpisodeDetail = () => {
    return (
        <section className="my-4 d-flex flex-column">
            <Card className="p-4 d-flex flex-lg-row justify-content-evenly align-items-center">
                <div className="fs-4 d-flex flex-column justify-content-evenly ">
                    <div className="fs-1 fw-bold">nome</div>
                    <p>
                        <span className="text-secondary">Espécie:</span> species
                    </p>
                    <p>
                        <span className="text-secondary">Origem:</span>{" "}
                        origin.name
                    </p>
                    <div>
                        <span className="text-secondary">
                            Last known location:
                        </span>
                        <br />
                        location.name
                    </div>
                </div>
            </Card>
            <div className="pt-4">
                <p className="fs-3 text-center">
                    Lista de Personagem nesse Épisodio
                </p>
            </div>
        </section>
    );
};
