import React, { useEffect, useState } from 'react'
import './style.css'
import { ClearDay } from "../../icons/ClearDay";
import { ClearNight } from "../../icons/ClearNight";
import { CloudsDay } from "../../icons/CloudsDay";
import { CloudsNight } from "../../icons/CloudsNight";
import { FewCloudsDay } from "../../icons/FewCloudsDay";
import { FewCloudsNight } from "../../icons/FewCloudsNight";
import { RainDay } from "../../icons/RainDay";
import { RainNight } from "../../icons/RainNight";
import { StormDay } from "../../icons/StormDay";
import { StromNight } from "../../icons/StromNight";
import { ICardProps } from '../../types/ICardProps';

export const Card: React.FC<ICardProps> = (props) => {
    const [imagePath, setImagePath] = useState<string>('');
    const [currentDate, setCurrentDate] = useState<string>('');
    const [cardImage, setCardImage] = useState<any>("");

    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        setCurrentDate(formattedDate);

        const currentHour = new Date().getHours();
        let isDay: boolean = currentHour >= 6 && currentHour < 19;

        if (props.main == "Clear" && isDay) { setImagePath("clear-day"); setCardImage(ClearDay); }
        else if (props.main == "Clear" && !isDay) { setImagePath("clear-night"); setCardImage(ClearNight); }
        else if (props.main == "Clouds" && isDay) { setImagePath("clouds-day"); setCardImage(CloudsDay); }
        else if (props.main == "Clouds" && !isDay) { setImagePath("clouds-night"); setCardImage(CloudsNight); }
        else if (props.main == "Few Clouds" && isDay) { setImagePath("few-clouds-night"); setCardImage(FewCloudsDay); }
        else if (props.main == "Few Clouds" && !isDay) { setImagePath("few-clouds-night"); setCardImage(FewCloudsNight); }
        else if (props.main == "Rain" && isDay) { setImagePath("rain-day"); setCardImage(RainDay); }
        else if (props.main == "Rain" && !isDay) { setImagePath("rain-night"); setCardImage(RainNight); }
        else if (props.main == "Storm" && isDay) { setImagePath("storm-day"); setCardImage(StormDay); }
        else if (props.main == "Storm" && !isDay) { setImagePath("storm-night"); setCardImage(StromNight); }
    }, []);

    return (
        <div className='card-background'>
            <div className='card-container' style={{ backgroundImage: `url('/card-background/${imagePath}.png')` }}>
                <div className="card-image">
                    {cardImage}
                </div>
                <div className="card-location">
                    <p className='location heading-sm'>{`${props.name}, ${props.country}`}</p>
                    <p className='date text-xs'>{currentDate}</p>
                    <p className='weather-temperature heading-xl'>{`${props.temp}°c`}</p>
                    <p className='weather-temperature-details heding-sm'>{`${props.temp}°c / ${props.feelsTemp}°c`}</p>
                    <p className='details text-sm'>{props.main}</p>
                </div>
            </div>
        </div>
    )
}

