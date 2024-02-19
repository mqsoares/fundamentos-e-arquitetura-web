import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IPropsCharacterCard } from "..";

export const CharacterCard = ({ character }: IPropsCharacterCard) => {
    return (
        <div className="wrap-card col col-md-4 col-xl-3 mb-4">
            <Link
                className="card text-decoration-none pointer"
                to={`/character/${character.id}`}
            >
                <Card className="card-card" style={{ minWidth: "15rem" }}>
                    <Card.Img variant="top" src={character.image} />
                    <Badge
                        bg={
                            character.status != "Alive"
                                ? character.status != "Dead"
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
                        {character.status}
                    </Badge>
                    <Card.Body>
                        <Card.Title className="mb-0">
                            {character.name}
                        </Card.Title>
                        <Card.Text>{character.species}</Card.Text>
                        <Card.Text>
                            <span className="text-secondary">
                                Last known location:
                            </span>
                            <br />
                            {character.location.name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
