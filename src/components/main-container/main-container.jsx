import React, { useContext } from "react";
import './main-container.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faQuestion, faSave } from '@fortawesome/free-solid-svg-icons';
import CodeEditor from "../code-editor/code-editor.jsx";
import CodeContext from "../../contexts/CodeContext.jsx";

class  MainContainer extends React.Component {

    static contextType = CodeContext;

    constructor(props) {
        super(props);
        // this.state = {
        //     msgState: 'defalt'
        // };
    }

    componentDidMount() {
        const msg = this.context;
        console.log(msg);
        
    }
    
    render() {
        const msg = this.context;
        console.log(msg);
        return (
        
            

                
            <div className="svg2css__main-container">
                <div className="svg2css__main-container__demo-container">
                    <div className="svg2css__main-container__demo-container__grid-background">
                    {msg}
                    </div>
                </div>
                <div className="svg2css__main-container__code-container">
                    <div className="svg2css__main-container__code-editor-container">
                        <CodeEditor  />
                    </div>
                    <div className="svg2css__main-container__code-container__control-buttons-container">
                        <div className="svg2css__main-container__code-container__control-button-container">
                            <button aria-label="play" className="svg2css__main-container__code-container__control-button">
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </div>
                        <div className="svg2css__main-container__code-container__control-button-container">
                            <button aria-label="save" className="svg2css__main-container__code-container__control-button">
                                <FontAwesomeIcon icon={faSave} />
                            </button>
                        </div>
                        <div className="svg2css__main-container__code-container__control-button-container">
                            <button aria-label="help" className="svg2css__main-container__code-container__control-button">
                                <FontAwesomeIcon icon={faQuestion} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

// MainContainer.contextType = CodeContext;
export default MainContainer;