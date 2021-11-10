import React, { useContext } from "react";
import './svg-keyframes.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faQuestion, faSave } from '@fortawesome/free-solid-svg-icons';
import CodeContext from "../../contexts/CodeContext.jsx";

class  SVGKeyFrames extends React.Component {

    static contextType = CodeContext;

    constructor(props) {
        super(props);

        this.state = {
            newKeyframeName: '',
            newKeyframeOpen: false,
            keyFrames: []
        };
    }

    render() {
        const {cssString, htmlString} = this.context;
        
        return (
            <div className="svg2css__svg-keyframes">
                <div className="svg2css__svg-keyframes-collection">
                    {this.renderKeyFramesCollection()}
                </div>
                <div className="svg2css__svg-keyframes__add-button-container">
                    <button className="svg2css__svg-keyframes__add-button"
                        onClick={() => this.handleAddNewKeyframesButton()}>
                        Add New Keyframes
                    </button>
                </div>
                {this.renderNewKeyFrameContainer()}
            </div>
            
        )
    }

    renderKeyFramesCollection() {
        return (
            <div>
                {this.state.keyFrames.map((keyFrame) => {
                    return <div>{keyFrame.keyFrameName}</div>
                })}
            </div>
        );
    }

    renderNewKeyFrameContainer() {
        if (this.state.newKeyframeOpen) {
            return (
                <div 
                    className="svg2css__svg-keyframes__new-keyframe-container">
                    <div className="svg2css__svg-keyframes__new-keyframe-inner-container">
                        <p className="svg2css__svg-keyframes__new-keyframe__text">Add a name for your KeyFrame</p>
                        <input type="text"
                            placeholder="KeyFrame Name"
                            className="svg2css__svg-keyframes__new-keyframe__input-field"
                            value={this.state.newKeyframeName} 
                            onChange={(e) => this.handleNewKeyframeNameChange(e)} />
                        <div className="svg2css__svg-keyframes__new-keyframe__buttons-container">
                            <button 
                                onClick={() => this.handleCancelClick()}
                                className="svg2css__svg-keyframes__new-keyframe__cancel-button">
                                Cancel
                            </button>
                            <button 
                                onClick={() => this.handleAddClick()}
                                className="svg2css__svg-keyframes__new-keyframe__add-button">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    }

    handleNewKeyframeNameChange(e) {
        this.setState({
            newKeyframeName: e.target.value
        });
    }

    handleAddNewKeyframesButton() {
        this.setState({
            newKeyframeOpen: true
        });
    }

    handleCancelClick() {
        this.setState({
            newKeyframeOpen: false,
            newKeyframeName: ''
        });
    }

    handleAddClick() {
        let keyFrames = this.state.keyFrames;
        let newKeyFrame = {
            keyFrameName: this.state.newKeyframeName
        };
        keyFrames.push(newKeyFrame);

        this.setState({
            newKeyframeOpen: false,
            keyFrames: keyFrames,
            newKeyframeName: ''
        });
    }
}

export default SVGKeyFrames;