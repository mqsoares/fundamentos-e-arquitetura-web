import { Outlet } from "react-router-dom";

import { Navbar } from "./components/nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default App;
