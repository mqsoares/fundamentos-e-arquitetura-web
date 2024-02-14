import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";

import { CharacterCard, ICharacterCard, Pagination } from "../../components";
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
            <div className="cards row mt-4">
                {characters?.map((character: ICharacterCard) => {
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
                })}
            </div>
        </Container>
    );
};
