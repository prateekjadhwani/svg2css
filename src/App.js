import React, { useState } from "react";
import './app.scss';
import { CodeContextProvider } from "./contexts/CodeContext.jsx";

import Header from "./components/header/header.jsx";
import MainContainer from "./components/main-container/main-container.jsx";

export function App() {
    const cssString = '/* Add Your CSS */\n' +
    '.ball {\n' +
    '	left: 100px;\n' +
    ' 	bottom: 100px;\n' +
    '	height: 20px;\n' +
    '  	width: 20px;\n' +
    '	background: white;\n' +
    '  	border-radius: 50%;\n' +
    ' 	position: absolute;\n' +
    '	animation: dropball 2s infinite;\n' +
    '}',
    htmlString = '<!-- Add Your HTML -->\n<div class="ball"></div>';
    //const {code, setCode} = useState(cssString);
        
    return (
        <CodeContextProvider value={cssString}>
            <div>
                    <Header />
                    <MainContainer />
            </div>
        </CodeContextProvider>
    );
}