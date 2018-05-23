import React from 'react';
import './Hourly.css';
import {AreaChart, Area, XAxis, YAxis, Label, Tooltip} from 'recharts';

const hourly = (props) => {
    return (
        <div className="hourly">
            <AreaChart width={1000} height={300} data={props.data}
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="hour" stroke="rgba(255,255,255,0.9)"/>
                <YAxis type="number" domain={[25, 38]} stroke="rgba(255,255,255,0.9)" />
                <Tooltip
                    itemStyle={{ fontSize:'11px', color:'rgba(0,0,0,0.8)', fontWeight: 'bold' }}
                    labelStyle={{ display: 'none' }}
                    cursor={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 2 }}
                    wrapperStyle={{ padding: '3px 3px', width: 'auto', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '3px', border: 'none' }}/>
                <Area type='monotone' dataKey='C' stroke={props.color} fill={props.color} fillOpacity="1" />
            </AreaChart>
        </div>
    )
}

export default hourly;