import React from 'react';
import './FiveDays.css';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import DateNames from '../../components/DateNames/DateNames';
import Hourly from '../../components/Hourly/Hourly';

class FiveDays extends React.Component{
    
    state = {
        unit: "celcius",
        clicked: "day1",
        days: {
            day1: {
                max: 36,
                min: 27,
                weather: "sunny",
                hourly: [
                    {hour: '00:00', C: 28.5},
                    {hour: '01:00', C: 28.3},
                    {hour: '02:00', C: 27.8},
                    {hour: '03:00', C: 27},
                    {hour: '04:00', C: 27.4},
                    {hour: '05:00', C: 29.1},
                    {hour: '06:00', C: 29.9},
                    {hour: '07:00', C: 31.2},
                    {hour: '08:00', C: 32.4},
                    {hour: '09:00', C: 32.8},
                    {hour: '10:00', C: 34.5},
                    {hour: '11:00', C: 34.7},
                    {hour: '12:00', C: 35.2},
                    {hour: '13:00', C: 36},
                    {hour: '14:00', C: 35.9},
                    {hour: '15:00', C: 35.7},
                    {hour: '16:00', C: 34.2},
                    {hour: '17:00', C: 32.4},
                    {hour: '18:00', C: 31.1},
                    {hour: '19:00', C: 30.5},
                    {hour: '20:00', C: 29.9},
                    {hour: '21:00', C: 29.4},
                    {hour: '22:00', C: 29.3},
                    {hour: '23:00', C: 28.7},
                ]
            },
            day2: {
                max: 34,
                min: 24,
                weather: "overcast",
                hourly: [
                    {hour: '00:00', C: 25.5},
                    {hour: '01:00', C: 25.3},
                    {hour: '02:00', C: 24.8},
                    {hour: '03:00', C: 24},
                    {hour: '04:00', C: 24.4},
                    {hour: '05:00', C: 26.1},
                    {hour: '06:00', C: 26.9},
                    {hour: '07:00', C: 28.2},
                    {hour: '08:00', C: 32.4},
                    {hour: '09:00', C: 32.8},
                    {hour: '10:00', C: 34},
                    {hour: '11:00', C: 29.4},
                    {hour: '12:00', C: 32.2},
                    {hour: '13:00', C: 31.4},
                    {hour: '14:00', C: 28.9},
                    {hour: '15:00', C: 30.7},
                    {hour: '16:00', C: 33.2},
                    {hour: '17:00', C: 32.4},
                    {hour: '18:00', C: 31.1},
                    {hour: '19:00', C: 30.5},
                    {hour: '20:00', C: 29.9},
                    {hour: '21:00', C: 29.4},
                    {hour: '22:00', C: 29.3},
                    {hour: '23:00', C: 28.7},
                ]
            },
            day3: {
                max: 30,
                min: 23,
                weather: "rainy",
                hourly: [
                    {hour: '00:00', C: 27.5},
                    {hour: '01:00', C: 24.3},
                    {hour: '02:00', C: 24.8},
                    {hour: '03:00', C: 23},
                    {hour: '04:00', C: 23.4},
                    {hour: '05:00', C: 24.1},
                    {hour: '06:00', C: 24.9},
                    {hour: '07:00', C: 25.2},
                    {hour: '08:00', C: 25.4},
                    {hour: '09:00', C: 25.8},
                    {hour: '10:00', C: 26.5},
                    {hour: '11:00', C: 27.7},
                    {hour: '12:00', C: 29.2},
                    {hour: '13:00', C: 30},
                    {hour: '14:00', C: 29.9},
                    {hour: '15:00', C: 25.7},
                    {hour: '16:00', C: 24.2},
                    {hour: '17:00', C: 24.4},
                    {hour: '18:00', C: 24.1},
                    {hour: '19:00', C: 23.5},
                    {hour: '20:00', C: 23.9},
                    {hour: '21:00', C: 23.4},
                    {hour: '22:00', C: 23.3},
                    {hour: '23:00', C: 23},
                ]
            },
            day4: {
                max: 24,
                min: 18,
                weather: "thunderstorm",
                hourly: [
                    {hour: '00:00', C: 21.5},
                    {hour: '01:00', C: 21.3},
                    {hour: '02:00', C: 20.8},
                    {hour: '03:00', C: 18},
                    {hour: '04:00', C: 18.4},
                    {hour: '05:00', C: 19.1},
                    {hour: '06:00', C: 19.9},
                    {hour: '07:00', C: 20.2},
                    {hour: '08:00', C: 20.4},
                    {hour: '09:00', C: 20.8},
                    {hour: '10:00', C: 21.5},
                    {hour: '11:00', C: 21.7},
                    {hour: '12:00', C: 22.2},
                    {hour: '13:00', C: 24},
                    {hour: '14:00', C: 23.9},
                    {hour: '15:00', C: 20.7},
                    {hour: '16:00', C: 20.2},
                    {hour: '17:00', C: 19.4},
                    {hour: '18:00', C: 20.1},
                    {hour: '19:00', C: 21.5},
                    {hour: '20:00', C: 21.9},
                    {hour: '21:00', C: 22.4},
                    {hour: '22:00', C: 22.3},
                    {hour: '23:00', C: 23.7},
                ]
            },
            day5: {
                max: 28,
                min: 25,
                weather: "sunny",
                hourly: [
                    {hour: '00:00', C: 25.5},
                    {hour: '01:00', C: 25.3},
                    {hour: '02:00', C: 25.8},
                    {hour: '03:00', C: 25},
                    {hour: '04:00', C: 27.4},
                    {hour: '05:00', C: 27.1},
                    {hour: '06:00', C: 27.9},
                    {hour: '07:00', C: 27.2},
                    {hour: '08:00', C: 27.4},
                    {hour: '09:00', C: 25.8},
                    {hour: '10:00', C: 26.5},
                    {hour: '11:00', C: 26.7},
                    {hour: '12:00', C: 27.2},
                    {hour: '13:00', C: 28},
                    {hour: '14:00', C: 27.9},
                    {hour: '15:00', C: 27.7},
                    {hour: '16:00', C: 26.2},
                    {hour: '17:00', C: 26.4},
                    {hour: '18:00', C: 26.1},
                    {hour: '19:00', C: 25.5},
                    {hour: '20:00', C: 25.9},
                    {hour: '21:00', C: 26.4},
                    {hour: '22:00', C: 26.3},
                    {hour: '23:00', C: 26.7},
                ]
            }
        },
        monthNames: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ],
        colors: {
            "sunny": "#36C8EF",
            "overcast": "#717C80",
            "rainy": "rgba(255,255,255,0.9)",
            "thunderstorm": "rgba(255,255,255,0.9)"
        }
    }

    dateHandler = (offset) => {
        if (offset===0){
            return "TODAY";
        }
        if (offset===1){
            return "TOMORROW";
        }
        let d = new Date();
        d.setDate(d.getDate() + offset);
        return (this.state.monthNames[d.getMonth()] + ' ' + d.getDate());
    }

    onClickHandler = (name) => {
        this.setState({
            clicked: name
        })
    }

    render(){

        let offset = 0;
        this.toSend = []
        return (
            <React.Fragment>
                <div className="days-container">
                    {Object.keys(this.state.days).map((day) => {
                        this.toSend.push(this.dateHandler(offset));
                        offset += 1;
                        return(
                            <WeatherCard
                                key={day}
                                name={day}
                                clicked={this.onClickHandler}
                                max={this.state.days[day].max}
                                min={this.state.days[day].min}
                                weather={this.state.days[day].weather}
                            />
                    )})}
                </div>
                <DateNames dates={this.toSend} />
                <Hourly data={this.state.days[this.state.clicked].hourly}
                        color={this.state.colors[this.state.days[this.state.clicked].weather]} />
                <div className="description">
                    Hourly Temperatures for <u>{
                        (this.state.clicked==='day1')?this.toSend[0]:
                        (this.state.clicked==='day2')?this.toSend[1]:
                        (this.state.clicked==='day3')?this.toSend[2]:
                        (this.state.clicked==='day4')?this.toSend[3]:
                        (this.state.clicked==='day5')?this.toSend[4]:null
                    }</u>
                </div>
            </React.Fragment>
        )
    }
}

export default FiveDays;