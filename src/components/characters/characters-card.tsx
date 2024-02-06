import { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";

import { IResult, getCharacters } from "../../services";

export const CharacteresCard = () => {
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
            <div className="row ">
                {characters?.map(
                    ({
                        id,
                        name,
                        image,
                        status,
                        species,
                        location,
                    }: IResult) => (
                        <div className="col mb-4" key={id}>
                            <a
                                className="text-decoration-none pointer"
                                href="#"
                                // onClick={() => handleClickId(id)}
                            >
                                <Card style={{ minWidth: "18rem" }}>
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
                                            maxWidth: "6rem",
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
        </>
    );
};
