import React, { useContext } from "react";
import './main-container.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faQuestion, faSave } from '@fortawesome/free-solid-svg-icons';
import CodeEditor from "../code-editor/code-editor.jsx";
import CodeContext from "../../contexts/CodeContext.jsx";
import ControlButtons from "../control-buttons/control-buttons.jsx";
import SVGKeyFrames from "../svg-keyframes/svg-keyframes.jsx";

class  MainContainer extends React.Component {

    static contextType = CodeContext;

    componentDidMount() {
        const msg = this.context;
        console.log(msg);
        
    }
    
    render() {
        const {cssString, htmlString} = this.context;
        
        return (
            <div className="svg2css__main-container">
                <div className="svg2css__main-container__demo-container">
                    <div className="svg2css__main-container__demo-container__grid-background">
                        <style>{cssString}</style>
                        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
                    </div>
                </div>
                <div className="svg2css__main-container__code-container">
                    <div className="svg2css__main-container__code-editor-container">
                        <CodeEditor />
                    </div>
                    <div className="svg2css__main-container__svg-keyframes-container">
                        <SVGKeyFrames />
                    </div>
                    <ControlButtons />
                </div>
            </div>
            
        )
    }
}

// MainContainer.contextType = CodeContext;
export default MainContainer;