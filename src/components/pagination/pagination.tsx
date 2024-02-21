import { useState } from "react";
import * as React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { LiaClipboardListSolid } from "react-icons/lia";

interface IPropsSetPage {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    numPage: number;
    numOfPages: number;
    title?: string;
}

export const Pagination: React.FC<IPropsSetPage> = ({
    setPage,
    numOfPages,
    numPage,
    title,
}) => {
    const [nPage, setNpage] = useState<number>(1);

    const handlePageOne = () => {
        setPage(1);
        setNpage(1);
    };

    const handlePrev = () => {
        setPage((n: number) => n - 1);
        setNpage(nPage - 1);
    };

    const handleNext = () => {
        setPage((n: number) => n + 1);
        setNpage(nPage + 1);
    };

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-between align-items-center pt-4 flex-wrap gap-2">
                <div className="display-title-pag fs-5 d-flex align-items-center gap-1">
                    <LiaClipboardListSolid />
                    <strong>{title}</strong>
                </div>
                <section className="d-flex justify-content-end align-items-center gap-2">
                    {numPage !== 1 && (
                        <>
                            <li className="page-item page-item-prev px-4">
                                <button
                                    onClick={handlePageOne}
                                    className="page-link"
                                >
                                    <span className="fs-6 text-nowrap">
                                        Pág. 1
                                    </span>
                                </button>
                            </li>
                            <li className="page-item page-item-prev ">
                                <button
                                    onClick={handlePrev}
                                    className="page-link"
                                >
                                    <GrPrevious />
                                </button>
                            </li>
                        </>
                    )}
                    <div className="display-num-pag">
                        <strong>
                            Pág. {numPage} / {numOfPages}
                        </strong>
                    </div>
                    {numPage < numOfPages && (
                        <li className="page-item">
                            <button onClick={handleNext} className="page-link">
                                <GrNext />
                            </button>
                        </li>
                    )}
                </section>
            </ul>
        </nav>
    );
};
