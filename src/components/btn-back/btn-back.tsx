export const BtnBack = () => {
    return (
        <nav className="pt-4">
            <button onClick={() => history.back()} className="nav-link">
                Voltar
            </button>
        </nav>
    );
};
