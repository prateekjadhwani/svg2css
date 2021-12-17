import React, { useContext } from "react";
import './main-container.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faQuestion, faSave } from '@fortawesome/free-solid-svg-icons';
import CodeEditor from "../code-editor/code-editor.jsx";
import CodeContext from "../../contexts/CodeContext.jsx";
import ControlButtons from "../control-buttons/control-buttons.jsx";
import SVGKeyFrames from "../svg-keyframes/svg-keyframes.jsx";
import CSSPreview from "../css-preview/css-preview.jsx";

class  MainContainer extends React.Component {

    static contextType = CodeContext;

    constructor(props) {
        super(props);

        this.state = {
            showPreview: false
        };
    }

    componentDidMount() {
        window.addEventListener('SHOW_CSS_PREVIEW', () => {
            this.setState({
                showPreview: true
            })
        });

        window.addEventListener('HIDE_CSS_PREVIEW', () => {
            this.setState({
                showPreview: false
            })
        });
    }
    
    render() {
        const {cssString, htmlString} = this.context;
        
        return (
            <div className="svg2css__main-container">
                <div className="svg2css__main-container__demo-container">
                    <div className="svg2css__main-container__demo-container__grid-background">
                        <style>{cssString}</style>
                        {this.renderKeyFrameCss()}
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
                {this.renderCSSPreview()}
            </div>
            
        )
    }

    renderCSSPreview() {
        if (this.state.showPreview) {
            return (
                <CSSPreview></CSSPreview>
            );
        }
    }

    renderKeyFrameCss() {
        const {builtKeyFrames} = this.context;

        return (
            <style>
                {builtKeyFrames.map(builtKeyFrame => {
                    return builtKeyFrame.builtCSS
                })}
            </style>
        );
    }
}

// MainContainer.contextType = CodeContext;
export default MainContainer;