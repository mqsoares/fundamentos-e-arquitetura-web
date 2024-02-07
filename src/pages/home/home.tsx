import { Container } from "react-bootstrap";

import { CharactersCard } from "../../components/characters";

export const Home = () => {
    return (
        <>
            <Container>
                <CharactersCard />
            </Container>
        </>
    );
};
