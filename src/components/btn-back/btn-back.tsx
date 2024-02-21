import { GrPrevious } from "react-icons/gr";

export const BtnBack = () => {
    return (
        <nav className="pt-4">
            <button onClick={() => history.back()} className="nav-link">
                <GrPrevious />
            </button>
        </nav>
    );
};
