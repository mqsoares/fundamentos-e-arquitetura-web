import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import {
    BtnBack,
    CharacterDetail,
    ITypeCharacterDetail,
    Loading,
    NotFound,
} from "../../components";
import { getCharacter } from "../../services";

export const CharacterDetails = () => {
    const [character, setCharacter] = useState<ITypeCharacterDetail>();

    const [isLoad, setIsload] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

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
                    {character && <CharacterDetail character={character} />}
                </>
            )}
        </Container>
    );
};
