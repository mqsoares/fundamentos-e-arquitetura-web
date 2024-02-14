import { ReactNode, useState } from "react";

import { numPageContext } from "../../context/numpage-context";

interface IProviderProps {
    children: ReactNode;
}

export const NumPageProvider = ({ children }: IProviderProps) => {
    const [numPage, setNumPage] = useState<number>(1);

    return (
        <numPageContext.Provider value={{ numPage, setNumPage }}>
            {children}
        </numPageContext.Provider>
    );
};
