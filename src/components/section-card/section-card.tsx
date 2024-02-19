import React from "react";

interface IPropsSectionCard {
    children: React.ReactNode;
}

export const SectionCard = ({ children }: IPropsSectionCard) => {
    return <div className="cards row mt-4">{children}</div>;
};
