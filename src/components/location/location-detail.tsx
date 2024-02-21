import { CharacterCard, IPropsLocationDetail } from "..";

export const LocationDetail = ({
    location,
    residents,
}: IPropsLocationDetail) => {
    return (
        <section className="my-4 d-flex flex-column">
            <div className="p-4 d-flex flex-lg-row justify-content-evenly align-items-center">
                <div className="fs-4 d-flex flex-column justify-content-evenly ">
                    <h4 className="title-section mt-2">Localização: </h4>
                    <div className="fs-1 fw-bold">{location?.name}</div>
                    <p>
                        <span className="text-secondary">Type:</span>{" "}
                        {location?.type}
                    </p>
                    <p>
                        <span className="text-secondary">Dimension:</span>{" "}
                        {location?.dimension}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="pt-4">
                <p className="fs-4 text-center">
                    Residentes de {location?.type} / {location?.name}:
                </p>
            </div>
            <div className="cards row mt-4">
                {/* // Para cada item da lista de personagem deve ter nome, foto e link para o detalhamento do personagem. */}
                {Object.values(residents)?.map((resident, index) => {
                    return <CharacterCard key={index} character={resident} />;
                })}
            </div>
        </section>
    );
};
