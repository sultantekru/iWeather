import React, { useState, useEffect } from 'react'
import './style.css'
import { Card } from '../../components/Card';
import { WeatherDetails } from "../../components/WeatherDetails";
import { NextDays } from "../../components/NextDays";
import { Loading } from '../../components/Loading';
import { useNavigate } from "react-router-dom";
import { LocalStorageRepository } from '../../data/repositories/LocalStorageRepository';
import { FindResponseDTO } from '../../types/FindResponseDTO';
import { OpenWeatherMapService } from '../../data/services/OpenWeatherMapService';
import { FindWeatherResponseDTO } from '../../types/FindWeatherResponseDTO';

let localStorageRepository = new LocalStorageRepository();
let openWeatherMapService = new OpenWeatherMapService();

export const Home: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [locationInfo, setLocationInfo] = useState<FindResponseDTO>()
    const [weatherInfo, setWeatherInfo] = useState<FindWeatherResponseDTO>()
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        let data = localStorageRepository.getData();
        if (data) {
            openWeatherMapService.findWeather(data.lat, data.lon).then((response: FindWeatherResponseDTO) => {
                setWeatherInfo(response)

                if (data) setLocationInfo(data);
                setLoading(false);
            })
        }
        else {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(async function (position) {
                    let data = await openWeatherMapService.findWeather(position.coords.latitude, position.coords.longitude)
                    setLocationInfo({
                        lat: position.coords.latitude,
                        lon: position.coords.latitude,
                        name: data.name
                    });

                    setWeatherInfo(data);
                    setLoading(false);
                }, function (error) {
                    navigate("/location")
                });
            } else {
                navigate("/location")
            }
        }


    }, []);

    return (
        <div>
            {
                loading ? <Loading loading={loading} /> :
                    <>
                        <div className='home-container'>
                            <div className='selected-city' onClick={() => { navigate('/location'); }}>
                                <p className='heading-sm'>{locationInfo?.name}</p>
                            </div>
                        </div>
                        <div className='home-container'>
                            <Card
                                name={weatherInfo?.name}
                                country={weatherInfo?.country}
                                temp={weatherInfo?.temp}
                                feelsTemp={weatherInfo?.feelsTemp}
                                main={weatherInfo?.main}
                            />
                            <WeatherDetails
                                feelsTemp={weatherInfo?.feelsTemp}
                                humidity={weatherInfo?.humidity}
                                rain={weatherInfo?.rain}
                                windSpeed={weatherInfo?.windSpeed}
                            />
                        </div>
                        <div className='home-container'>
                            <NextDays />
                        </div>
                    </>
            }
        </div>
    )
}


