import React, { useEffect, useState } from 'react'
import { SearchBox } from '../../components/SearchBox'
import './style.css'
import { SearchItem } from '../../components/SearchItem'
import { OpenWeatherMapService } from '../../data/services/OpenWeatherMapService';
import { FindResponseDTO } from '../../types/FindResponseDTO';

let openWeatherMapService = new OpenWeatherMapService();

export const Location: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [data, setData] = useState<FindResponseDTO[]>([]);

    useEffect(() => {
        if (searchQuery.length !== 0) {
            setLoading(true);
            openWeatherMapService.find(searchQuery).then((data: FindResponseDTO[]) => {
                setData(data);
            }).finally(() => { setLoading(false); })
        }

    }, [searchQuery])

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
            <SearchBox
                loading={loading}
                setSearchQuery={setSearchQuery}
            />
            {
                data.map((item, index) =>
                    <SearchItem
                        key={index}
                        data={item}
                        position={data.length == 1 ? "first-one" : (index == 0 ? "first" : (index == data.length - 1 ? "end" : "middle"))}
                    />)
            }
        </div>
    )
}



