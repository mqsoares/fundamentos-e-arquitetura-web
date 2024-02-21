// import { Card } from "react-bootstrap";
import { CharacterCard, IPropsEpisodeDetail } from "..";
// import { Link } from "react-router-dom";

export const EpisodeDetail = ({ episode, characters }: IPropsEpisodeDetail) => {
    return (
        <section className="my-4 d-flex flex-column">
            <div className="p-4 d-flex flex-lg-row justify-content-evenly align-items-center">
                <div className="fs-4 d-flex flex-column justify-content-evenly ">
                    <h4 className="title-section mt-2">Episódio: </h4>
                    <div className="fs-1 fw-bold">
                        {episode?.name} - {episode?.episode}
                    </div>
                    <p>
                        <span className="text-secondary">Air date:</span>{" "}
                        {episode?.air_date}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="pt-4">
                <p className="fs-4 text-center">
                    Personagens do Épisodio &#34;{episode?.name}&#34;
                </p>
            </div>
            <div className="cards row mt-4">
                {Object.values(characters)?.map((character, index) => {
                    return <CharacterCard key={index} character={character} />;
                })}
            </div>
        </section>
    );
};
