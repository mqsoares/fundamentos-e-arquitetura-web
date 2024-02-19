import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { EpisodeCard, ITypeEpisode, Pagination } from "../../components";
import { getEpisodes } from "../../services";

export const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);

    //pagination
    const [numPage, setNumPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState(1);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const data = await getEpisodes(numPage);
                setEpisodes(data.results);
                setNumOfPages(data.info.pages);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
        fetchEpisodes();
    }, [numPage]);

    return (
        <Container>
            <Pagination
                setPage={setNumPage}
                numPage={numPage}
                numOfPages={numOfPages}
            />
            <div className="cards row mt-4">
                {episodes?.map((episode: ITypeEpisode) => {
                    return <EpisodeCard episode={episode} key={episode.id} />;
                })}
            </div>
        </Container>
    );
};
