import React from "react";
import './main-container.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlay, faQuestionCircle, faSave } from '@fortawesome/free-solid-svg-icons';

class MainContainer extends React.Component {
    render() {
        return (
            <div className="svg2css__main-container">
                <div className="svg2css__main-container__demo-container">
                    <div className="svg2css__main-container__demo-container__grid-background">
                    
                    </div>
                </div>
                <div className="svg2css__main-container__code-container">
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
                                <FontAwesomeIcon icon={faQuestionCircle} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;