import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { EpisodeCard, IEpisodeType } from "../../components";
import { getEpisodes } from "../../services";

export const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const data = await getEpisodes();
                setEpisodes(data);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
        fetchEpisodes();
    }, []);

    return (
        <Container>
            <div className="cards row mt-4">
                {episodes?.map((episode: IEpisodeType) => {
                    return <EpisodeCard item={episode} key={episode.id} />;
                })}
            </div>
        </Container>
    );
};
