import React, { useContext } from "react";
import './code-editor.scss';
import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import CodeContext from "../../contexts/CodeContext.jsx";

class CodeEditor extends React.Component {
    static contextType = CodeContext;
    
    constructor(props) {
        super(props);
        this.state = {
            cssString:  '/* Add Your CSS */\n' +
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
            htmlString: '<!-- Add Your HTML -->\n<div class="ball"></div>'
        };
    }

    componentDidMount() {
       
        var editor = CodeMirror(document.querySelector('#svg2css__code-editor'),{
            value: this.state.cssString,
            lineWrapping: true,
            lineNumbers: true,
            mode: "text/x-scss", 
            theme: 'monokai'
        }).on('change', editor => {
            this.setState({
                cssString: editor.getValue()
            });
        });

        var editor2 = CodeMirror(document.querySelector('#svg2css__code-editor2'),{
            value: this.state.htmlString,
            lineWrapping: true,
            lineNumbers: true,
            mode: 'text/html', //"text/x-scss", 
            theme: 'monokai'
        }).on('change', editor => {
            this.setState({
                htmlString: editor.getValue()
            });
        });

        window.addEventListener('UPDATE_CANVAS', () => this.handleUpdate());
    }

    handleUpdate() {
        const {setCssString, setHtmlString} = this.context;
        setCssString(this.state.cssString);
        setHtmlString(this.state.htmlString);
    }

    render() {
        return (
            <div className="svg2css__code-editor-container">
                    <div className="svg2css__code-editor-wrapper">
                        <div className="svg2css__code-editor" id="svg2css__code-editor"></div>
                    </div>
                    <div className="svg2css__code-editor-wrapper">
                        <div className="svg2css__code-editor" id="svg2css__code-editor2"></div>
                    </div>
            </div>
        );
    }  
}

export default CodeEditor;