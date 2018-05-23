import React from 'react';
import Sunny from '../Weathers/Sunny';
import Overcast from '../Weathers/Overcast';
import Rainy from '../Weathers/Rainy';
import Thunderstorm from '../Weathers/Thunderstorm';

const weatherCard = (props) => {
    if (props.weather==='sunny')
        return <Sunny max={props.max} min={props.min} name={props.name} clicked={props.clicked} />
    if (props.weather==='overcast')
        return <Overcast max={props.max} min={props.min} min={props.min} name={props.name} clicked={props.clicked}/>
    if (props.weather==='rainy')
        return <Rainy max={props.max} min={props.min} min={props.min} name={props.name} clicked={props.clicked}/>
    if (props.weather==='thunderstorm')
        return <Thunderstorm max={props.max} min={props.min} min={props.min} name={props.name} clicked={props.clicked}/>
}

export default weatherCard;