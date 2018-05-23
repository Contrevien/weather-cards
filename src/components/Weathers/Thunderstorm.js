import React from 'react';
import './Weathers.css';

const back = {
    'background': 'rgb(6,48,72)'
}

const min = {
    'color': 'rgba(0,0,0,0.6)'
}

const max = {
    'color': '#fff',
    'opacity': '0.9'
}

const overcast = (props) => {
    return (
        <div className="Card" style={back} onClick={() => props.clicked(props.name)}>
            <div className="image">
                <svg>
                    <g id="Cloud_6">
                        <g id="White_cloud_6">
                            <path id="XMLID_81_" className="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"/>
                            <circle id="XMLID_80_" className="white" cx="17.4" cy="22.8" r="9.3"/>
                            <circle id="XMLID_77_" className="white" cx="34.5" cy="21.1" r="15.6"/>
                        </g>
                        <g id="Gray_cloud_6">
                            <path id="XMLID_75_" className="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"/>
                            <circle id="XMLID_74_" className="gray" cx="45.7" cy="10.7" r="10.7"/>
                        <animateTransform attributeName="transform"
                        attributeType="XML"
                        dur="6s"
                        keyTimes="0;0.5;1"
                        repeatCount="indefinite"
                        type="translate"
                        values="0;-3;0"
                        calcMode="linear">
                        </animateTransform>
                    </g>
                        <g id="Lightning_6">
                            <path id="XMLID_94_" className="yellow" d="M43.6,22.7c-0.2,0.6-0.4,1.3-0.6,1.9c-0.2,0.6-0.4,1.2-0.7,1.8c-0.4,1.2-0.9,2.4-1.5,3.5
                        c-1,2.3-2.2,4.6-3.4,6.8l-1.7-2.9c3.2-0.1,6.3-0.1,9.5,0l3,0.1l-1.3,2.5c-1.1,2.1-2.2,4.2-3.5,6.2c-0.6,1-1.3,2-2,3
                        c-0.7,1-1.4,2-2.2,2.9c0.2-1.2,0.5-2.4,0.8-3.5c0.3-1.2,0.6-2.3,1-3.4c0.7-2.3,1.5-4.5,2.4-6.7l1.7,2.7c-3.2,0.1-6.3,0.2-9.5,0
                        l-3.4-0.1l1.8-2.8c1.4-2.1,2.8-4.2,4.3-6.2c0.8-1,1.6-2,2.4-3c0.4-0.5,0.8-1,1.3-1.5C42.7,23.7,43.1,23.2,43.6,22.7z"/>
                        <animate attributeType="CSS"
                        attributeName="opacity"
                        attributeType="XML"
                        dur="1.5s"
                        keyTimes="0;0.5;1"
                        repeatCount="indefinite"
                        values="1;0;1"
                        calcMode="linear"/>
                        </g>
                        <g id="Rain_6">
                            <path id="Rain_6_right" className="white" d="M36.3,51.9c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S36.3,50.2,36.3,51.9z"/>
                            <path id="Rain_6_mid" className="white" d="M26.4,51.9c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S26.4,50.2,26.4,51.9z"/>
                            <path id="Rain_6_left" className="white" d="M15.7,51.9c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S15.7,50.2,15.7,51.9z"/>
                        <animateTransform attributeName="transform"
                        attributeType="XML"
                        dur="1s"
                        keyTimes="0;1"
                        repeatCount="indefinite"
                        type="translate"
                        values="0 0;0 10"
                        calcMode="linear">
                        </animateTransform>
                        <animate attributeType="CSS"
                        attributeName="opacity"
                        attributeType="XML"
                        dur="1s"
                        keyTimes="0;1"
                        repeatCount="indefinite"
                        values="1;0"
                        calcMode="linear"/>
                        </g>
                    </g>
                </svg>
            </div>
            <span className="max" style={max}>{props.max}</span>
            <span className="min" style={min}>{props.min}</span>
        </div>
    )
}

export default overcast;