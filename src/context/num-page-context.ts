import { createContext } from "react";
import React from "react";

interface IContextType {
    numPage: number;
    setNumPage: React.Dispatch<React.SetStateAction<number>>;
}

export const NumPageContext = createContext<IContextType>({
    numPage: 1,
    setNumPage: function (): void {
        throw new Error("Function not implemented.");
    },
});
