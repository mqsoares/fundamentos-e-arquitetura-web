import { useContext } from "react";

import { NumPageContext } from "../../context/num-page-context";

export const BtnBack = () => {
    const { numPage } = useContext(NumPageContext);
    return (
        <nav className="pt-4">
            <button onClick={() => history.back()} className="nav-link">
                Voltar para Pág. {numPage}
            </button>
        </nav>
    );
};
