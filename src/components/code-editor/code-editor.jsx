import React, { useContext } from "react";
import './code-editor.scss';
import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import { CodeContext } from "../../contexts/CodeContext.jsx";

class CodeEditor extends React.Component {
    // constructor(props) {
    //     super(props);

        

    //     this.state = {
    //         context: this.context,
    //     };
    // }

    

    componentDidMount() {
        // let {cssString} = this.context;
        var cssString2 = '/* Add Your CSS */\n' +
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

            // console.log(cssString2);
        
        var editor = CodeMirror(document.querySelector('#svg2css__code-editor'),{
            value: cssString2,
            lineWrapping: true,
            lineNumbers: true,
            mode: "text/x-scss", 
            theme: 'monokai'
        });
        var editor2 = CodeMirror(document.querySelector('#svg2css__code-editor2'),{
            value: htmlString,
            lineWrapping: true,
            lineNumbers: true,
            mode: 'text/html', //"text/x-scss", 
            theme: 'monokai'
        });
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

// CodeEditor.contextType = CodeContext;
export default CodeEditor;