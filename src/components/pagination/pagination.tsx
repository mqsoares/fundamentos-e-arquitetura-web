import { useEffect, useState } from "react";
import * as React from "react";

interface IPropsSetPage {
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: React.FC<IPropsSetPage> = ({ setPage }) => {
    const [nPage, setNpage] = useState<number>(1);

    const handlePrev = () => {
        setPage((n: number) => n - 1);
        setNpage(nPage - 1);
    };

    const handleNext = () => {
        setPage((n: number) => n + 1);
        setNpage(nPage + 1);
    };

    useEffect(() => {
        if (nPage > 1) {
            document
                .querySelector(".page-item-prev")
                ?.classList.remove("disabled");
        } else {
            document
                .querySelector(".page-item-prev")
                ?.classList.add("disabled");
        }
    }, [nPage]);

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-end pt-4 gap-2">
                <li className="page-item page-item-prev ">
                    <button onClick={handlePrev} className="page-link">
                        Anterior
                    </button>
                </li>
                <li className="page-item">
                    <button onClick={handleNext} className="page-link">
                        Próx.
                    </button>
                </li>
            </ul>
        </nav>
    );
};
