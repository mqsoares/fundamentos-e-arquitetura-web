import { Navbar } from "./components/nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import { CharactersCard } from "./pages";

function App() {
    return (
        <>
            <Navbar />
            <CharactersCard />
        </>
    );
}

export default App;
