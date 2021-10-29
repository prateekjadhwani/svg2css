import React from "react";
import './app.scss';

import Header from "./components/header/header.jsx";
import MainContainer from "./components/main-container/main-container.jsx";

export function App() {
    return (
        <div>
            <Header />
            <MainContainer />
        </div>
    );
}