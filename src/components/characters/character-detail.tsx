import { Badge, Card } from "react-bootstrap";

import { EpisodeCard, IPropsCharacterDetail } from "..";

export const CharacterDetail = ({
    character,
    episodes,
}: IPropsCharacterDetail) => {
    return (
        <section className="my-4 d-flex flex-column">
            <Card className="card-detail p-4 d-flex flex-lg-row justify-content-evenly align-items-center">
                <Card.Img
                    style={{ maxWidth: "20rem", borderRadius: "1rem" }}
                    src={character.image}
                />
                <div className="fs-4 d-flex flex-column justify-content-evenly ">
                    <div className="fs-1 fw-bold">
                        <h4 className="title-section mt-2">Personagem: </h4>
                        {character.name} &#160;
                        <Badge
                            bg={
                                character.status != "Alive"
                                    ? character.status != "Dead"
                                        ? "secondary"
                                        : "danger"
                                    : "success"
                            }
                            style={{
                                maxWidth: "12rem",
                            }}
                            className=""
                        >
                            {character.status}
                        </Badge>
                    </div>
                    <p>
                        <span className="text-secondary">Espécie:</span>{" "}
                        {character.species}
                    </p>
                    <p>
                        <span className="text-secondary">Origem:</span>{" "}
                        {character.origin.name}
                    </p>
                    <div>
                        <span className="text-secondary">
                            Last known location:
                        </span>
                        <br />
                        {character.location.name}
                    </div>
                </div>
            </Card>
            <hr></hr>
            <div className="pt-4">
                <p className="fs-4 text-center">
                    Episódio(s) em que &#34;
                    {character.name}&#34; Aparece:
                </p>
            </div>
            <div className="row mt-4">
                {Object.values(episodes)?.map((episode, index) => {
                    return <EpisodeCard key={index} episode={episode} />;
                })}
            </div>
        </section>
    );
};
