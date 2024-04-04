import React from 'react';
import { CloudRain, Sun, ThermometerSimple, Wind, Drop } from "@phosphor-icons/react";
import "./style.css";
import { IWeatherDetailsProps } from '../../types/IWeatherDetailsProps';

export const WeatherDetails: React.FC<IWeatherDetailsProps> = (props) => {
    const data = [
        { icon: <ThermometerSimple style={{ color: "var(--gray-500)" }} size={24} />, name: "Thermal sensation", value: `${props.feelsTemp}°c` },
        { icon: <CloudRain style={{ color: "var(--gray-500)" }} size={24} />, name: "Probability of rain", value: `${props.rain}%` },
        { icon: <Wind style={{ color: "var(--gray-500)" }} size={24} />, name: "Wind speed", value: `${props.windSpeed} km/h` },
        { icon: <Drop style={{ color: "var(--gray-500)" }} size={24} />, name: "Humidity", value: `${props.humidity}%` },
        { icon: <Sun style={{ color: "var(--gray-500)" }} size={24} />, name: "UV Index", value: "0" }
    ];
    return (
        <div className="weather-details">
            {data.map((item, index) => (
                <>
                    <div key={index} className={`weather-detail-item ${index !== data.length - 1 ? 'with-border' : ''}`}>
                        <div className="weather-detail-icon">{item.icon}</div>
                        <div className="weather-detail-info">
                            <span className='heading-xs weather-detail-item-name'>{item.name}</span>
                            <span className='heading-sm weather-detail-item-value'>{item.value}</span>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
};
