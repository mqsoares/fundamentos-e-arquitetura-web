import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IResult } from "../types";

export const CharactersDetail = (character: IResult) => {
    const urlsCharacter: string[] | undefined = character?.episode.map(
        (el) => el,
    );
    const extractIdUrlApi = (url: string): string | null => {
        const match = url.match(/\/(\d+)$/);
        return match ? match[1] : null;
    };
    const ids: (string | null)[] | undefined =
        urlsCharacter?.map(extractIdUrlApi);

    return (
        <section className="my-4 d-flex flex-column">
            <Card className="p-4 d-flex flex-lg-row justify-content-evenly align-items-center">
                <Card.Img
                    style={{ maxWidth: "25rem", borderRadius: "1rem" }}
                    src={character?.image}
                />
                <div className="fs-4 d-flex flex-column justify-content-evenly ">
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
            <div className="pt-4">
                <p className="fs-3 text-center">
                    Lista de Episódios com &#34;
                    {character?.name}&#34;
                </p>
                <div className="row text-center">
                    {ids?.map((el, index) => (
                        <div key={index} className="col-sm-6 col-md-4 col-lg-2">
                            <Link
                                className="nav-link nav-link-ep fs-4"
                                to={`/episode/${el}`}
                            >
                                <p
                                    className=""
                                    style={{ whiteSpace: "nowrap" }}
                                >
                                    Episódio: {el}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// {ids?.map<React.ReactNode>((el) => (
//     <EpisodeCard item={} key={el} />
// ))}
