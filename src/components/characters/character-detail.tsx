import { Badge, Card } from "react-bootstrap";

import { IResult } from "../types";

export const CharactersDetail = (character: IResult) => {
    return (
        <section className="my-4 d-flex flex-column">
            <Card className=" p-4 d-flex flex-row justify-content-evenly">
                <Card.Img
                    style={{ maxWidth: "25rem", borderRadius: "1rem" }}
                    src={character?.image}
                />
                <div className="detail-characters fs-4 d-flex flex-column  justify-content-evenly">
                    <div className="fs-1 fw-bold">
                        {character?.name} &#160;
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
            </Card>
            <div className="pt-4 text-center">
                <p className="fs-3 ">
                    Lista de Episódios com &#34;
                    {character?.name}&#34;
                </p>
                {/* eslint-disable-next-line no-undef */}
                {character?.episode.map<React.ReactNode>((el, index) => (
                    <li key={index}>{el}</li>
                ))}
            </div>
        </section>
    );
};
