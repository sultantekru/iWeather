import React from 'react'
import { SearchBox } from '../../components/SearchBox'
import './style.css'
import { SearchItem } from '../../components/SearchItem'

let list = ["İstanbul", "Ankara", "Ankara"];

export const Location: React.FC = () => {
    return (
        <div className='location-container'>
            <div className="logo">
                <img src={"/logo.png"} alt='Weather Logo' />
            </div>
            <div className="paragraph">
                <p id='welcome-paragraph' className='heading-md'>Welcome to <span className='color-word'>TypeWeather</span></p>
            </div>
            <div className="paragraph">
                <p id='description-paragraph' className='text-sm'>Choose a location to see the weather forecast</p>
            </div>
            <SearchBox />
            {
                list.map((item, index) =>
                    <SearchItem
                        key={index}
                        content={item}
                        position={list.length == 1 ? "first-one" : (index == 0 ? "first" : (index == list.length - 1 ? "end" : "middle"))}
                    />)
            }
        </div>
    )
}



