import React from 'react';
import './DateNames.css';

const dateNames = (props) => {
    console.log(props.dates);
    return (
        <div className="DateNames">
            {props.dates.map((day, index) => {
                return <div className="date" key={index}>
                        {day}
                    </div>
            })}
        </div>
    )
}

export default dateNames;