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

let localStorageRepository = new LocalStorageRepository();
let openWeatherMapService = new OpenWeatherMapService();

export const Home: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [locationInfo, setLocationInfo] = useState<FindResponseDTO>()
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        let data = localStorageRepository.getData();
        if (data) {
            setLocationInfo(data);
            setLoading(false);
        }
        else {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(async function (position) {
                    console.log("Konumunuz: Latitude " + position.coords.latitude + ", Longitude " + position.coords.longitude);
                    let name = await openWeatherMapService.findName(position.coords.latitude, position.coords.longitude)
                    setLocationInfo({
                        lat: position.coords.latitude,
                        lon: position.coords.latitude,
                        name: name
                    })
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
                            <Card />
                            <WeatherDetails />
                        </div>
                        <div className='home-container'>
                            <NextDays />
                        </div>
                    </>
            }
        </div>
    )
}


