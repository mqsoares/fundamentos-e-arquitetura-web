import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { IEpisodeType } from "../../components";
import { getEpisode } from "../../services";

export const EpisodesDetail = () => {
    const [episode, setEpisode] = useState<IEpisodeType>();

    const { id } = useParams();

    const urlsCharacter: string[] | undefined = episode?.characters.map(
        (el) => el,
    );
    const extractIdFromUrl = (url: string): string | null => {
        const match = url.match(/\/(\d+)$/);
        return match ? match[1] : null;
    };
    const ids: (string | null)[] | undefined =
        urlsCharacter?.map(extractIdFromUrl);

    console.log(ids);

    useEffect(() => {
        const fecthEpisode = async () => {
            try {
                const data = await getEpisode(id as string);
                setEpisode(data);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
        fecthEpisode();
    }, []);

    return (
        <section className="my-4 d-flex flex-column">
            <div className="p-4 d-flex flex-lg-row justify-content-evenly align-items-center">
                <div className="fs-4 d-flex flex-column justify-content-evenly ">
                    <div className="fs-1 fw-bold">
                        {episode?.name} - {episode?.episode}
                    </div>
                    <p>
                        <span className="text-secondary">Air date:</span>{" "}
                        {episode?.air_date}
                    </p>
                </div>
            </div>
            <div className="pt-4">
                <p className="fs-3 text-center text-secondary">
                    Personagens do Épisodio
                </p>
            </div>
            <div className="pt-4">{}</div>
        </section>
    );
};

{
    /* <div key={index} className="col-sm-6 col-md-4 col-lg-2">
                <Link className="nav-link nav-link-ep fs-4" to="#">
                    <p className="" style={{ whiteSpace: "nowrap" }}>
                        Personagen: {el}
                    </p>
                </Link>
            </div> */
}
