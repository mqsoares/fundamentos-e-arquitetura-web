import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IPropsEpisodeCard } from "..";

export const EpisodeCard = ({ episode }: IPropsEpisodeCard) => {
    return (
        <div className="wrap-card col col-md-4 col-xl-3 mb-4">
            <Link
                className="card text-decoration-none pointer"
                to={`/episode/${episode.id}`}
            >
                <Card
                    className="card-card card-card-episode"
                    style={{ minWidth: "15rem" }}
                >
                    <Card.Body>
                        <Card.Title className="mb-0">{episode.name}</Card.Title>
                        <Card.Text>Episode: {episode.episode}</Card.Text>
                        <Card.Text>Air date: {episode.air_date}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
