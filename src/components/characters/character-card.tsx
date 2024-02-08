import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ICharacterCard } from "../types";

export const CharacterCard = ({
    id,
    name,
    image,
    status,
    species,
    location,
}: ICharacterCard) => {
    return (
        <div className="wrap-card col col-md-4 col-xl-3 mb-4">
            <Link
                className="card text-decoration-none pointer"
                to={`/character/${id}`}
            >
                <Card className="card-card" style={{ minWidth: "15rem" }}>
                    <Card.Img variant="top" src={image} />
                    <Badge
                        bg={
                            status != "Alive"
                                ? status != "Dead"
                                    ? "secondary"
                                    : "danger"
                                : "success"
                        }
                        style={{
                            maxWidth: "7rem",
                            margin: "-2rem 0 0 1rem",
                        }}
                        className="text-small"
                    >
                        {status}
                    </Badge>
                    <Card.Body>
                        <Card.Title className="mb-0">{name}</Card.Title>
                        <Card.Text>{species}</Card.Text>
                        <Card.Text>
                            <span className="text-secondary">
                                Last known location:
                            </span>
                            <br />
                            {location.name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
