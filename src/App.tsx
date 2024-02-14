import { Outlet } from "react-router-dom";

import { Navbar, Footer } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { NumPageProvider } from "./provider/num-page-provider";

function App() {
    return (
        <>
            <Navbar />
            <NumPageProvider>
                <Outlet />
            </NumPageProvider>
            <Footer />
        </>
    );
}

export default App;
