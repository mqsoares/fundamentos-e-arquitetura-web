import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import {
    BtnBack,
    CharacterDetail,
    ITypeCharacterDetail,
    ITypeEpisode,
    Loading,
    NotFound,
} from "../../components";
import { getCharacter, getEpisodePath } from "../../services";

export const CharacterDetails = () => {
    const [character, setCharacter] = useState<ITypeCharacterDetail>();
    const [episodes, setEpisodes] = useState<ITypeEpisode[]>([]);

    const [isLoad, setIsload] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                setIsload(true);
                const data = await getCharacter(id as string);
                setCharacter(data);
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
                setIsNotFound(true);
            } finally {
                setIsload(false);
            }
        };
        fetchCharacter();
    }, []);

    return (
        <Container>
            {(isLoad && <Loading />) || (isNotFound && <NotFound />) || (
                <>
                    <BtnBack />
                    {character && (
                        <CharacterDetail
                            character={character}
                            episodes={episodes}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
