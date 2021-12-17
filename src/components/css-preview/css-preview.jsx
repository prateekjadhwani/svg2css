import React from "react";
import './css-preview.scss';


import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css';
import CodeContext from "../../contexts/CodeContext.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class  CSSPreview extends React.Component {

    static contextType = CodeContext;

    componentDidMount() {
        const {builtKeyFrames} = this.context;
        const textToShow = builtKeyFrames.map(builtKeyFrame => {
            return builtKeyFrame.builtCSS
        });

        let preTextToShow = `/* SVG To CSS \n * copy the code and save it in a file \n*/\n`;

        var editor = CodeMirror(document.querySelector('.svg2css__css-preview_code-container'),{
            value: preTextToShow + (textToShow[0] || ''),
            lineWrapping: true,
            lineNumbers: true,
            mode: "text/x-scss", 
            theme: 'monokai'
        })
    }

    render() {
        return (
            <div className="svg2css__css-preview">
                <div className="svg2css__css-preview_opacity-container"></div>
                <div className="svg2css__css-preview_code-container"></div>
                <div className="svg2css__css-preview_close-button-container">
                    <button aria-label="close" 
                        onClick={this.handleCloseButtonClick}
                        className="svg2css__css-preview_close-button">
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                </div>
            </div>
        )
    }

    handleCloseButtonClick() {
        window.dispatchEvent(new CustomEvent('HIDE_CSS_PREVIEW'));
    }
}

export default CSSPreview;