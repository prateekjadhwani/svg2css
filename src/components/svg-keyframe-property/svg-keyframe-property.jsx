import React, { useContext } from "react";
import './svg-keyframe-property.scss';

import CodeContext from "../../contexts/CodeContext.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlay, faPlus, faQuestion, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

class  SVGKeyFrameProperty extends React.Component {

    static contextType = CodeContext;

    constructor(props) {
        super(props);

        this.rawCss = {};
        this.transformProperties = [
            'translateX',
            'translateY',
            'translateZ',
            'scale',
            'scaleX',
            'scaleY',
            'scaleZ',
            'rotate',
            'rotateX',
            'rotateY',
            'rotateZ',
            'skew',
            'skewX',
            'skewY',
            'perspective'
        ];
        this.filterProperties = [
            'blur',
            'brightness',
            'contrast',
            'grayscale',
            'hue-rotate',
            'invert',
            'opacity',
            'saturate',
            'sepia'
        ];
          

        this.svgCollectionContainer = React.createRef();

        this.state = {
            builtCss: '',
            keyframeProperties: [{
                path: "M0 00 C2.45434624 2.17 16.3464551 -8.83 36.7536484 98.48 C57.2239404 44.28 71.8396693 98.48 73.4575634 99.58 C82.7586528 85.31 89.6790662 97.81 91.391449 100 C95.988064 93.37 100 100 100 100",
                property: 'bottom',
                is10: false,
                unit: 'px',
                maxValue: '200',
                minValue: '0',
                strokeColor: '#' + this.generateRandomColor('')
            }],
            isOpen: false,
            newKeyframeProperty: {}
        };
    }

    componentDidMount() {
        window.addEventListener('UPDATE_CANVAS', () => this.handleUpdate());
        this.generateCSS();
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
                    <div className="svg2css__svg-keyframe-property__property-svgs"
                        ref={this.svgCollectionContainer}>
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
                        key={keyframeProperty.property + '-' + Math.random()} 
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
                        <input type="checkbox" 
                            name="is10"
                            onChange={(e) => this.handleNewPropertyAdd(e)}
                            className="svg2css__svg-keyframe-property__property-input-field 
                                svg2css__svg-keyframe-property__property-input-1-0" />
                            <label className="svg2css__svg-keyframe-property__property-input-field-label">Is 1's and 0's</label>
                        
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

        let newKeyframeProperty = {
            path: this.state.newKeyframeProperty.path,
            property: this.state.newKeyframeProperty.property,
            is10: this.state.newKeyframeProperty['is10'] == 'on',
            unit: this.state.newKeyframeProperty.unit,
            maxValue: this.state.newKeyframeProperty.maxValue,
            minValue: this.state.newKeyframeProperty.minValue,
            strokeColor: '#' + this.generateRandomColor('')
        };

       

        keyframeProperties.push(newKeyframeProperty);

        this.setState({
            isOpen: false,
            keyframeProperties: keyframeProperties
        }, () => {
            this.generateCSS();
        });
    }

    generateCSS = () => {
        this.rawCss = {};
        this.generateKeyFrames();
        this.generateBuiltCss();
    }

    generateKeyFrames = () => {
        let paths = this.svgCollectionContainer.current.querySelectorAll('path');
        
        for (let i=0; i < paths.length; i++) {
            let pathLength = paths[i].getTotalLength(),
                increments   = pathLength / 100,
                is10         = paths[i].hasAttribute('selected10') && paths[i].getAttribute('selected10') == 'true',
                property     = paths[i].getAttribute('selectedprop'),
                unit         = paths[i].getAttribute('selectedunit'),
                minValue     = paths[i].getAttribute('selectedminvalue'),
                maxValue     = paths[i].getAttribute('selectedmaxvalue');

            let isTransformProperty = false,
                isFilterProperty = false;
      
            isTransformProperty = this.transformProperties.find((element, index)=> {
                if(element == property) {
                    return true;
                }
            });
      
            isFilterProperty = this.filterProperties.find((element, index)=> {
                if(element == property) {
                    return true;
                }
            });

            for (var start = 0; start < pathLength; start += increments) {
                var svgPoint = paths[i].getPointAtLength(start);

                if (!this.rawCss[Math.round(svgPoint.x) + '%']) {
                    this.rawCss[Math.round(svgPoint.x) + '%'] =
                    new Object();
                }

                if(!!isTransformProperty || !!isFilterProperty) {
                    var type = !!isTransformProperty ? 'transform' : 'filter'
                    if (!this.rawCss[Math.round(svgPoint.x) + '%'][type]) {
                        this.rawCss[Math.round(svgPoint.x) + '%'][type] = '';
                    }

                    maxValue = Number(maxValue);
                    minValue = Number(minValue);
                    this.rawCss[Math.round(svgPoint.x) + '%'][type] +=
                        property + '(' +((((100-svgPoint.y)/100) * (maxValue-minValue) + minValue)) + unit + ') ';
                }
                else {
                    if (!this.rawCss[Math.round(svgPoint.x) + '%'][property]) {
                        this.rawCss[Math.round(svgPoint.x) + '%'][property] =
                            new Object();
                    }

                    if(is10) {
                        this.rawCss[Math.round(svgPoint.x) + '%'][property] =
                        (svgPoint.y > 50 ? maxValue : minValue) + unit;
                    } else {
                        maxValue = Number(maxValue);
                        minValue = Number(minValue);
                        this.rawCss[Math.round(svgPoint.x) + '%'][property] =
                            ((((100-svgPoint.y)/100) * (maxValue-minValue) + minValue)) + unit;
                    }
                }
            }
        }
    }

    generateBuiltCss = () => {
        let css = "@keyframes " + this.props.keyFrameName + ' {\n';
        for (let percentage in this.rawCss) {
            css += '\t' + percentage + ' {\n';
            for (let prop in this.rawCss[percentage]) {
                css += '\t\t' + prop + ': ' +
                    this.rawCss[percentage][prop] +
                    ';\n'
            }
            css += '\t}\n';
        }
        css += '}\n';

        this.setState({
            builtCss: css
        }, () => {
            this.props.updateKeyFrame(this.props.keyFrameName, this.state.keyframeProperties);
        })
    }

    handleUpdate = () => {
        const {setBuiltKeyFrames} = this.context;
        setBuiltKeyFrames({
            'keyFrameName': this.props.keyFrameName,
            'builtCSS': this.state.builtCss
        });
    }

    handleOnOffButton = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handlePropertyDelete = (propertyName) => {
        let updatedKeyframeProperties = this.state.keyframeProperties.filter((keyframeProperty) => {
            return keyframeProperty.property != propertyName;
        });

        this.setState({
            keyframeProperties: updatedKeyframeProperties
        }, () => {
            this.generateCSS();
            
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