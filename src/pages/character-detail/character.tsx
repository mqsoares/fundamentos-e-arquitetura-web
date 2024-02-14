import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { BtnBack, CharactersDetail, IResult } from "../../components";
import { getCharacter } from "../../services";

export const Character = () => {
    const [character, setCharacter] = useState<IResult>();
    const [isLoad, setIsload] = useState(false);

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
            } finally {
                setIsload(false);
            }
        };
        fetchCharacter();
    }, []);

    return (
        <Container className="wrap-container">
            {isLoad && <h1>Carregando...</h1>}
            <BtnBack />
            {character ? (
                <CharactersDetail
                    id={character.id}
                    image={character.image}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    origin={character.origin}
                    location={character.location}
                    episode={character.episode}
                    type={character.type}
                    gender={character.gender}
                    url={character.url}
                    created={character.created}
                />
            ) : (
                <div>
                    <h2>Personagem não encontrado(a)</h2>
                </div>
            )}
        </Container>
    );
};
