import React from 'react';
import "./style.css";
import { StormDay } from "../../icons/StormDay"
import { RainDay } from '../../icons/RainDay';
import { FewCloudsDay } from '../../icons/FewCloudsDay';
import { CloudsDay } from '../../icons/CloudsDay';
import { ClearDay } from '../../icons/ClearDay';

export const NextDays: React.FC = () => {
    const data = [
        { weather: <StormDay />, day: "Mon", value1: "32°c", value2: "26°c" },
        { weather: <RainDay />, day: "Tue", value1: "32°c", value2: "26°c" },
        { weather: <FewCloudsDay />, day: "Wed", value1: "32°c", value2: "26°c" },
        { weather: <CloudsDay />, day: "Thu", value1: "32°c", value2: "26°c" },
        { weather: <ClearDay />, day: "Sun", value1: "32°c", value2: "26°c" }
    ]

    return (
        <div className="next-days-container">
            {data.map((item, index) => (
                <>
                    <div key={index}>
                        <p className="day heading-xs">{item.day}</p>
                        <div className="next-days-weather">{item.weather}</div>
                        <p className="temperature-1 heading-xs">32°c</p>
                        <p className="temperature-2 heading-xs">26°c</p>
                    </div>
                </>
            ))}
        </div>
    );
};
