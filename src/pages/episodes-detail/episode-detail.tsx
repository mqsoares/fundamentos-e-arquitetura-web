import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { CharacterCard, ICharacterCard, IEpisodeType } from "../../components";
import { getCharacterPath, getEpisode } from "../../services";

export const EpisodesDetail = () => {
    const [episode, setEpisode] = useState<IEpisodeType>();
    const [character, setCharacter] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fecthEpisode = async () => {
            try {
                const dataEp = await getEpisode(id as string);
                setEpisode(dataEp);

                const urlPath = dataEp.characters.map((url: string) =>
                    url.slice(32),
                );
                const fetchCharacter = urlPath.map(async (url: string) => {
                    const dataCharacter = await getCharacterPath(url);
                    return dataCharacter;
                });
                const fetchedCharacter = await Promise.all(fetchCharacter);
                setCharacter(fetchedCharacter);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
        fecthEpisode();
    }, []);

    return (
        <Container>
            <section className="my-4 d-flex flex-column">
                <div className="p-4 d-flex flex-lg-row justify-content-evenly align-items-center">
                    <div className="fs-4 d-flex flex-column justify-content-evenly ">
                        <div className="fs-1 fw-bold">
                            {episode?.name} - {episode?.episode}
                        </div>
                        <p>
                            <span className="text-secondary">Air date:</span>{" "}
                            {episode?.air_date}
                        </p>
                    </div>
                </div>
                <div className="pt-4">
                    <p className="fs-3 text-center text-secondary">
                        Personagens do Épisodio
                    </p>
                </div>
                <div className="cards row mt-4">
                    {Object.values(character)?.map(
                        (character: ICharacterCard) => {
                            return (
                                <CharacterCard
                                    key={character.id}
                                    name={character.name}
                                    image={character.image}
                                    status={character.status}
                                    species={character.species}
                                    location={character.location}
                                    id={character.id}
                                />
                            );
                        },
                    )}
                </div>
            </section>
        </Container>
    );
};
