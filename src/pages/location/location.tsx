import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { Loading, NotFound, Pagination, SectionCard } from "../../components";
import { LocationCard } from "../../components/location";
import { getLocations } from "../../services/location";

export const Location = () => {
    const [locations, setLocations] = useState([]);

    //pagination
    const [numPage, setNumPage] = useState(
        parseInt(localStorage.getItem("RMnumPage") || "1"),
    );
    const [numOfPages, setNumOfPages] = useState(1);

    //  loading
    const [isLoad, setIsload] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                setIsload(true);
                const data = await getLocations(numPage);
                setLocations(data.results);
                setNumOfPages(data.info.pages);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
                setIsNotFound(true);
            } finally {
                setIsload(false);
            }
        };
        localStorage.setItem("RMnumPage", numPage.toString());
        fetchLocations();
    }, [numPage]);

    return (
        <Container>
            {(isLoad && <Loading />) || (isNotFound && <NotFound />) || (
                <>
                    <Pagination
                        setPage={setNumPage}
                        numPage={numPage}
                        numOfPages={numOfPages}
                    />
                    <SectionCard>
                        {locations?.map((location, index) => {
                            return (
                                <LocationCard key={index} location={location} />
                            );
                        })}
                    </SectionCard>
                </>
            )}
        </Container>
    );
};
