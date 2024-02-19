import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import {
    BtnBack,
    EpisodeDetail,
    ITypeCharacterCard,
    ITypeEpisode,
    Loading,
    NotFound,
} from "../../components";
import { getCharacterPath, getEpisode } from "../../services";

export const EpisodeDetails = () => {
    const [episode, setEpisode] = useState<ITypeEpisode>();
    const [characters, setCharacters] = useState<ITypeCharacterCard[]>([]);

    const [isLoad, setIsload] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const fecthEpisode = async () => {
            try {
                setIsload(true);
                const data = await getEpisode(id as string);
                setEpisode(data);

                const urlPath = data.characters.map((url: string) =>
                    url.slice(32),
                );
                const fetchCharacter = urlPath.map(async (url: string) => {
                    const dataCharacter = await getCharacterPath(url);
                    return dataCharacter;
                });
                const allCharacter = await Promise.all(fetchCharacter);
                setCharacters(allCharacter);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
                setIsNotFound(true);
            } finally {
                setIsload(false);
            }
        };
        fecthEpisode();
    }, []);

    return (
        <Container>
            {(isLoad && <Loading />) || (isNotFound && <NotFound />) || (
                <>
                    <BtnBack />
                    {episode && (
                        <EpisodeDetail
                            episode={episode}
                            characters={characters}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
