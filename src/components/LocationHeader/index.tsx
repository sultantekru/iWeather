import React from 'react'
import './style.css'

export const LocationHeader: React.FC = () => {
    return (
        <div>
            <div className="logo">
                <img src={"/logo.png"} alt='Weather Logo' />
            </div>
            <div className="paragraph">
                <p id='welcome-paragraph' className='heading-md'>Welcome to <span className='color-word'>TypeWeather</span></p>
            </div>
            <div className="paragraph">
                <p id='description-paragraph' className='text-sm'>Choose a location to see the weather forecast</p>
            </div>
        </div>
    )
}

