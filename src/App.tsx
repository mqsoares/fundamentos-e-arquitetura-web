import { Outlet } from "react-router-dom";

import { Navbar, Footer } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
