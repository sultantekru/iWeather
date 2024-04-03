import React, { useState } from 'react'
import './style.css'
import { Card } from '../../components/Card';
import { WeatherDetails } from "../../components/WeatherDetails";
import { NextDays } from "../../components/NextDays";
import { Loading } from '../../components/Loading';
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <div>
            <div className='home-container'>
                <div className='selected-city' onClick={() => { navigate('/location'); }}>
                    <p className='heading-sm'>Istanbul </p>
                </div>
            </div>
            <div className='home-container'>
                <Loading
                    loading={loading}
                />
                <Card />
                <WeatherDetails />
            </div>
            <div className='home-container'>
                <NextDays />
            </div>
        </div>
    )
}


