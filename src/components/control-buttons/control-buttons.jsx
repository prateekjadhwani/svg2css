import React from "react";
import './control-buttons.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faQuestion, faSave } from '@fortawesome/free-solid-svg-icons';

class  ControlButtons extends React.Component {

    render() {
        return (
            <div className="svg2css__control-buttons__control-buttons-container">
                <div className="svg2css__control-buttons__control-button-container">
                    <button aria-label="play" className="svg2css__control-buttons__control-button" onClick={this.handlePlayButtonClick}>
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                </div>
                <div className="svg2css__control-buttons__control-button-container">
                    <button aria-label="save" className="svg2css__control-buttons__control-button">
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                </div>
                <div className="svg2css__control-buttons__control-button-container">
                    <button aria-label="help" className="svg2css__control-buttons__control-button">
                        <FontAwesomeIcon icon={faQuestion} />
                    </button>
                </div>
            </div>
        )
    }

    handlePlayButtonClick() {
        window.dispatchEvent(new CustomEvent('UPDATE_CANVAS'));
    }
}

export default ControlButtons;