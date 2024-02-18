import { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { getCharacter, getEpisodePath } from "../../services";

import { EpisodeCard, IPropsCharacterDetail, ITypeEpisode } from "..";

export const CharacterDetail = ({ character }: IPropsCharacterDetail) => {
    const [episodes, setEpisodes] = useState<ITypeEpisode[]>([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const data = await getCharacter(id as string);
                const pathUrl = data.episode.map((url: string) =>
                    url.slice(32),
                );
                const fetchEpisode = pathUrl.map(async (url: string) => {
                    const dataEpisode = await getEpisodePath(url);
                    return dataEpisode;
                });
                const allEpisodes: ITypeEpisode[] =
                    await Promise.all(fetchEpisode);
                setEpisodes(allEpisodes);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
        fetchCharacter();
    }, []);
    return (
        <section className="my-4 d-flex flex-column">
            <Card className="card-detail p-4 d-flex flex-lg-row justify-content-evenly align-items-center">
                <Card.Img
                    style={{ maxWidth: "25rem", borderRadius: "1rem" }}
                    src={character.image}
                />
                <div className="fs-4 d-flex flex-column justify-content-evenly ">
                    <div className="fs-1 fw-bold">
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
                <p className="fs-3 text-center">
                    Episódio(s) em que &#34;
                    {character.name}&#34; Aparece:
                </p>
                <div className="row">
                    {episodes.map((episode, index) => {
                        return <EpisodeCard key={index} episode={episode} />;
                    })}
                </div>
            </div>
        </section>
    );
};
