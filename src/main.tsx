import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { Episodes, Location, Home } from "./pages/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/episodes" element={<Episodes />} />
                    <Route path="/location" element={<Location />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
