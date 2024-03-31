import React from 'react'
import './style.css'
import {FewCloudsNight} from "../../icons/FewCloudsNight"

export const Card: React.FC = () => {
    return (
        <div className='card-background'>
            <div className='card-container'>
                <div className="card-image">
                <FewCloudsNight/>
                </div>
                <div className="card-location">
                    <p className='location heading-sm'>İstanbul, TR</p>
                    <p className='date text-xs'>Monday,May 15,2023</p>
                    <p className='weather-temperature heading-xl'>28°c</p>
                    <p className='weather-temperature-details heding-sm'>26°c / 32°c</p>
                    <p className='details text-sm'>Few clouds</p>
                </div>
            </div>
        </div>
    )
}

