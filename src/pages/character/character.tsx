import { useEffect, useState } from "react";
import { Badge, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { IResult } from "../../components";
import { getCharacter } from "../../services";

export const Character = () => {
    const [character, setCharacter] = useState<IResult>();
    const [isLoad, setIsload] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                setIsload(true);
                const data = await getCharacter(id as string);
                setCharacter(data);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            } finally {
                setIsload(false);
            }
        };
        fetchCharacter();
    }, []);

    return (
        <Container>
            {isLoad && <h1>Carregando...</h1>}
            {character ? (
                <div className="p-4 d-flex justify-content-evenly;">
                    <Card.Img
                        style={{ maxWidth: "25rem", borderRadius: "1rem" }}
                        src={character?.image}
                    />
                    <div className="detail-characters fs-4 d-flex flex-column">
                        <div className="fs-1 fw-bold">
                            {character?.name} - &#160;
                            <Badge
                                bg={
                                    character?.status != "Alive"
                                        ? character?.status != "Dead"
                                            ? "secondary"
                                            : "danger"
                                        : "success"
                                }
                                style={{
                                    maxWidth: "12rem",
                                }}
                                className=""
                            >
                                {character?.status}
                            </Badge>
                        </div>
                        <p>
                            <span className="text-secondary">Espécie:</span>{" "}
                            {character?.species}
                        </p>
                        <p>
                            <span className="text-secondary">Origem:</span>{" "}
                            {character?.origin.name}
                        </p>
                        <div>
                            <span className="text-secondary">
                                Last known location:
                            </span>
                            <br />
                            {character?.location.name}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Personagem não encontrado(a)</h2>
                </div>
            )}
        </Container>
    );
};
