import React, { useContext } from "react";
import './svg-keyframe-property.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlay, faPlus, faQuestion, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

class  SVGKeyFrameProperty extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            keyframeProperties: [{
                path: "M0 00 C2.45434624 2.17 16.3464551 -8.83 36.7536484 98.48 C57.2239404 44.28 71.8396693 98.48 73.4575634 99.58 C82.7586528 85.31 89.6790662 97.81 91.391449 100 C95.988064 93.37 100 100 100 100",
                property: 'bottom',
                is10: false,
                unit: 'px',
                maxValue: '200',
                minValue: '0',
                strokeColor: '#' + this.generateRandomColor('')
            }
        
            ],
            isOpen: false,
            newKeyframeProperty: {}
        };
    }

    render() {
        return (
            <div className="svg2css__svg-keyframe-property">
                <div className="svg2css__svg-keyframe-property__heading-container">
                    <div className="svg2css__svg-keyframe-property__name">
                        {this.props.keyFrameName}
                    </div>
                    <div className="svg2css__svg-keyframe-property__delete-container">
                        <button
                            className="svg2css__svg-keyframe-property__delete-button"
                            onClick={() => this.handleKeyFrameDelete()}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
                <div className="svg2css__svg-keyframe-property__property-container">
                    <div className="svg2css__svg-keyframe-property__property-svgs">
                        {this.renderSVGCollection()}
                    </div>
                    {this.renderPropertyList()}
                </div>
                {this.renderPropertyAdder()}
                {this.renderOnOffButton()}
            </div>
        )
    }

    renderSVGCollection = () => {
        return (
            <div>
            { this.state.keyframeProperties.map(keyframeProperty => {
                return (
                    <svg
                        key={keyframeProperty.property} 
                        className="svg2css__svg-collection" height="100%" width="100%" fill="none">
                        <path d={keyframeProperty.path}
                            stroke={keyframeProperty.strokeColor}
                            strokeWidth="2"
                            selected10={keyframeProperty.is10.toString()}
                            selectedprop={keyframeProperty.property}
                            selectedunit={keyframeProperty.unit}
                            selectedminvalue={keyframeProperty.minValue}
                            selectedmaxvalue={keyframeProperty.maxValue} />
                    </svg>
                )})
            }
            </div>
        );
    }

    renderPropertyAdder = () => {
        if (this.state.isOpen) {
            return (
                <div className="svg2css__svg-keyframe-property__property-input-container">
                    <div className="svg2css__svg-keyframe-property__property-input-svg-path-container svg2css__svg-keyframe-property__property-input-field-container">
                        <input type="text" 
                            placeholder="SVG Path"
                            name="path"
                            onChange={(e) => this.handleNewPropertyAdd(e)}
                            id="svg2css__svg-keyframe-property__property-input-svg-path"
                            className="svg2css__svg-keyframe-property__property-input-svg-path
                                svg2css__svg-keyframe-property__property-input-field" />
                    </div>
                    
                    <div className="svg2css__svg-keyframe-property__property-input-field-container">
                        <input type="text" 
                            name="property"
                            onChange={(e) => this.handleNewPropertyAdd(e)}
                            placeholder="Property Name"
                            className="svg2css__svg-keyframe-property__property-input-field 
                                svg2css__svg-keyframe-property__property-input-property-name" />
                    </div>

                    <div className="svg2css__svg-keyframe-property__property-input-field-container">
                        <label>Is 1's and 0's</label>
                        <input type="checkbox" 
                            name="is10"
                            onChange={(e) => this.handleNewPropertyAdd(e)}
                            className="svg2css__svg-keyframe-property__property-input-field 
                                svg2css__svg-keyframe-property__property-input-1-0" />
                    </div>
                    
                    <div className="svg2css__svg-keyframe-property__property-input-field-container">
                        <input type="text" 
                            name="unit"
                            onChange={(e) => this.handleNewPropertyAdd(e)}
                            placeholder="Unit (px / %)"
                            className="svg2css__svg-keyframe-property__property-input-field 
                                svg2css__svg-keyframe-property__property-input-unit" />
                    </div>
                    
                    <div className="svg2css__svg-keyframe-property__property-input-field-container">
                        <input type="text" 
                            placeholder="Min value for the property"
                            name="minValue"
                            onChange={(e) => this.handleNewPropertyAdd(e)}
                            className="svg2css__svg-keyframe-property__property-input-field 
                                svg2css__svg-keyframe-property__property-input-min-value" />
                    </div>
                    
                    <div className="svg2css__svg-keyframe-property__property-input-field-container">
                        <input type="text" 
                            placeholder="Max value for the property"
                            name="maxValue"
                            onChange={(e) => this.handleNewPropertyAdd(e)}
                            className="svg2css__svg-keyframe-property__property-input-field 
                                svg2css__svg-keyframe-property__property-input-max-value" />
                    </div>

                    <div className="svg2css__svg-keyframe-property__property-input-field-container">
                        <button 
                            className="svg2css__svg-keyframe-property__property-input-field-button"
                            onClick={() => this.handlePropertyAdd()}>
                                Add Property
                        </button>
                    </div>
                </div>
            );
        }
    }

    renderPropertyList = () => {
        return (
            <div className="svg2css__svg-keyframe-property__property-list">
                { this.state.keyframeProperties.map(keyframeProperty => {
                    return (
                        <div 
                            key={keyframeProperty.property}
                            className="svg2css__svg-keyframe-property__property-name-container">
                            <div className="svg2css__svg-keyframe-property__property-name">
                                {keyframeProperty.property}
                            </div>
                            <div className="svg2css__svg-keyframe-property__property-delete-container">
                                <button
                                    data-name={keyframeProperty.property}
                                    className="svg2css__svg-keyframe-property__delete-button"
                                    onClick={() => this.handlePropertyDelete(keyframeProperty.property)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    )
                }) }
            </div>
        )
    }

    renderOnOffButton = () => {
        if (!this.state.isOpen) {
            return (
                <div className="svg2css__svg-keyframe-property__property-on-off-container">
                    <button
                        className="svg2css__svg-keyframe-property__on-off-button"
                        onClick={() => this.handleOnOffButton()}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            )
        }
    }

    handleNewPropertyAdd = (e) => {
        let newKeyframeProperty = this.state.newKeyframeProperty;
        newKeyframeProperty[e.target.name] = e.target.value;

        if (e.target.name == 'is10') {
            newKeyframeProperty[e.target.name] = e.target.value == 'on' ? true : false;
        }

        this.setState({
            newKeyframeProperty: newKeyframeProperty
        });
    }

    handlePropertyAdd = () => {
        let keyframeProperties = this.state.keyframeProperties;

        let newKeyframeProperty = this.state.newKeyframeProperty;
        newKeyframeProperty['is10'] = newKeyframeProperty['is10'] == 'on';
        newKeyframeProperty['strokeColor'] = '#' + this.generateRandomColor('');

        keyframeProperties.push(this.state.newKeyframeProperty);

        this.setState({
            isOpen: false,
            keyframeProperties: keyframeProperties
        });
    }

    handleOnOffButton = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handlePropertyDelete = (propertyName) => {
        console.log(propertyName, 'to be deleted');
        let updatedKeyframeProperties = this.state.keyframeProperties.filter((keyframeProperty) => {
            return keyframeProperty.property != propertyName;
        });

        this.setState({
            keyframeProperties: updatedKeyframeProperties
        });
    }

    handleKeyFrameDelete = () => {
        this.props.handleDelete(this.props.keyFrameName);
    }

    generateRandomColor = (lor) => {
        return (lor +=
          [3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*13)])
          && (lor.length == 6) ?  lor : this.generateRandomColor(lor);
    }

}

export default SVGKeyFrameProperty;

/*
{
    path: "M100 100 L0 0",
    property: 'left',
    is10: false,
    unit: 'px',
    maxValue: '100',
    minValue: '0',
    strokeColor: '#' + this.generateRandomColor('')
}
*/