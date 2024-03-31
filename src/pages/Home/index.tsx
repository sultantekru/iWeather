import React from 'react'
import './style.css'
import { Card } from '../../components/Card';
import { WeatherDetails } from "../../components/WeatherDetails";
import { NextDays } from "../../components/NextDays";
import { Loading } from '../../components/Loading';

export const Home: React.FC = () => {
    return (
        <div>
            <div className='home-container'>
                <Loading />
                <Card />
                <WeatherDetails />
            </div>
            <div className='home-container'>
                <NextDays />
            </div>
        </div>
    )
}


