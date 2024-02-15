import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const EpisodeCard = ({ item }) => {
    return (
        <div className="wrap-card col col-md-4 col-xl-3 mb-4">
            <Link
                className="card text-decoration-none pointer"
                to="{`/character/${id}`}"
            >
                <Card
                    className="card-card card-card-episode"
                    style={{ minWidth: "15rem" }}
                >
                    <Card.Body>
                        <Card.Title className="mb-0">{item.name}</Card.Title>
                        <Card.Text>Episode: {item.episode}</Card.Text>
                        <Card.Text>Air date: {item.air_date}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
