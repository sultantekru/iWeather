import React from 'react'
import { SearchBox } from '../../components/SearchBox'
import './style.css'
import { LocationHeader } from '../../components/LocationHeader'
import { SearchItem } from '../../components/SearchItem'

let list = ["İstanbul", "Ankara", "Ankara"];

export const Location: React.FC = () => {
    return (
        <div>
            <LocationHeader />
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



