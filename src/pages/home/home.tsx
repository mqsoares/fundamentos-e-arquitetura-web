import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { CharacterCard } from "../../components";
import { ICharacterCard } from "../../components/types";
import { getCharacters } from "../../services";

export const Home = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getCharacters();
                setCharacters(data);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
        fetchCharacters();
    }, []);

    return (
        <Container>
            {characters.length === 0 && <h1>Carregando...</h1>}
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
