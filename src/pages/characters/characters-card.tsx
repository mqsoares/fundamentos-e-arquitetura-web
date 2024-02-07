import { useEffect, useState } from "react";
import { Badge, Card, Container } from "react-bootstrap";

import { IResult, getCharacters } from "../../services";

export const CharactersCard = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        getCharacters()
            .then((data) => setCharacters(data))
            .catch();
    }, []);

    // const handleClickId = (id: number) => {
    //     console.log(id);
    // };

    return (
        <>
            <Container>
                <div className="row mt-4">
                    {characters?.map(
                        ({
                            id,
                            name,
                            image,
                            status,
                            species,
                            location,
                        }: IResult) => (
                            <div
                                className="col col-md-4 col-xl-3 mb-4"
                                key={id}
                            >
                                <a
                                    className="text-decoration-none pointer"
                                    href="#"
                                >
                                    {/* onClick={() => handleClickId(id)} */}

                                    <Card style={{ minWidth: "15rem" }}>
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
                                            <Card.Title className="mb-0">
                                                {name}
                                            </Card.Title>
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
                                </a>
                            </div>
                        ),
                    )}
                </div>
            </Container>
        </>
    );
};
