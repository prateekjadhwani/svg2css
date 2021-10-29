import React from "react";
import './app.scss';

import Header from "./components/header/header.jsx";
import MainContainer from "./components/main-container/main-container.jsx";

export function App() {
    let code = '';
    return (
        <div>
                <Header />
                <MainContainer />
        </div>
    );
}