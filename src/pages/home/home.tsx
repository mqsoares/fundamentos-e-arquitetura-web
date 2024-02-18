import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";

import {
    CharacterCard,
    Loading,
    NotFound,
    Pagination,
    SectionCard,
} from "../../components";
import { NumPageContext } from "../../context/num-page-context";
import { getCharacters } from "../../services";

export const Home = () => {
    const { numPage, setNumPage } = useContext(NumPageContext);

    const [characters, setCharacters] = useState([]);
    const [isLoad, setIsload] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setIsload(true);
                const data = await getCharacters(numPage);
                setCharacters(data);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
                setIsNotFound(true);
            } finally {
                setIsload(false);
            }
        };
        fetchCharacters();
    }, [numPage]);

    return (
        <Container>
            {(isLoad && <Loading />) || (isNotFound && <NotFound />) || (
                <>
                    <Pagination setPage={setNumPage} />
                    <SectionCard>
                        {characters?.map((character, index) => (
                            <CharacterCard key={index} character={character} />
                        ))}
                    </SectionCard>
                </>
            )}
        </Container>
    );
};
