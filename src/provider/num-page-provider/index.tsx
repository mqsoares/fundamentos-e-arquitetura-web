import { ReactNode, useState } from "react";

import { NumPageContext } from "../../context/num-page-context";

interface IProviderProps {
    children: ReactNode;
}

export const NumPageProvider = ({ children }: IProviderProps) => {
    const [numPage, setNumPage] = useState<number>(1);

    return (
        <NumPageContext.Provider value={{ numPage, setNumPage }}>
            {children}
        </NumPageContext.Provider>
    );
};
