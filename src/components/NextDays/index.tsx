import React, { useEffect, useState } from 'react';
import "./style.css";
import { StormDay } from "../../icons/StormDay"
import { RainDay } from '../../icons/RainDay';
import { FewCloudsDay } from '../../icons/FewCloudsDay';
import { CloudsDay } from '../../icons/CloudsDay';
import { ClearDay } from '../../icons/ClearDay';
import { INextDaysProps } from '../../types/INextDaysProps';
import { OpenWeatherMapService } from '../../data/services/OpenWeatherMapService';

let openWeatherMapService = new OpenWeatherMapService();

const icons: any = {
    "Clouds": CloudsDay,
    "Clear": ClearDay,
    "FewClouds": FewCloudsDay,
    "Rain": RainDay,
    "Storm": StormDay
}
export const NextDays: React.FC<INextDaysProps> = (props) => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        openWeatherMapService.findWeeklyWeather(props.name || "").then((res:any) => {
            console.log(icons[res[0].status])
            setData(res.map((item:any) => ({
                day: item.day,
                temp: item.temp,
                night: item.night,
                status: icons[item.status]
            })));
            console.log(data)
        });
    }, [props.name]);

    return (
        <div className="next-days-container">
            {data.map((item: any, index: number) => (
                <div key={index}>
                    <p className="day heading-xs">{item.day}</p>
                    <div className="next-days-weather"><item.status /></div>
                    <p className="temperature-1 heading-xs">{item.temp}°c</p>
                    <p className="temperature-2 heading-xs">{item.night}°c</p>
                </div>
            ))}
        </div>
    );
};
