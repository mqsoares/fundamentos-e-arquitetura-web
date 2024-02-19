import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import {
    BtnBack,
    ITypeCharacterCard,
    ITypeLocation,
    Loading,
    LocationDetail,
    NotFound,
} from "../../components";
import { getLocation, getCharacterPath } from "../../services";

export const LocationDetails = () => {
    const [location, setLocation] = useState<ITypeLocation>();
    const [residents, setResidents] = useState<ITypeCharacterCard[]>([]);

    const [isLoad, setIsload] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                setIsload(true);
                const data = await getLocation(id as string);
                setLocation(data);

                const urlPath = data.residents.map((url: string) =>
                    url.slice(32),
                );
                const fetchCharacter = urlPath.map(async (url: string) => {
                    const dataCharacter = await getCharacterPath(url);
                    return dataCharacter;
                });
                const allCharacter = await Promise.all(fetchCharacter);
                setResidents(allCharacter);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
                setIsNotFound(true);
            } finally {
                setIsload(false);
            }
        };
        fetchLocation();
    }, []);

    return (
        <Container>
            {(isLoad && <Loading />) || (isNotFound && <NotFound />) || (
                <>
                    <BtnBack />
                    {location && (
                        <LocationDetail
                            location={location}
                            residents={residents}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
