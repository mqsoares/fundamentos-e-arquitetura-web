import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";

import { CharacterCard, Pagination, SectionCard } from "../../components";
import { NumPageContext } from "../../context/num-page-context";
import { getCharacters } from "../../services";

export const Home = () => {
    const { numPage, setNumPage } = useContext(NumPageContext);

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getCharacters(numPage);
                setCharacters(data);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
        fetchCharacters();
    }, [numPage]);

    return (
        <Container>
            {characters.length === 0 && <h1>Carregando...</h1>}
            <Pagination setPage={setNumPage} />
            <SectionCard>
                {characters?.map((character, index) => (
                    <CharacterCard key={index} character={character} />
                ))}
            </SectionCard>
        </Container>
    );
};
