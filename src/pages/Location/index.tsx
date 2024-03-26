import React from 'react'
import { SearchBox } from '../../components/SearchBox'
import './style.css'
import { LocationHeader } from '../../components/LocationHeader'

export const Location: React.FC = () => {
    return (
        <div>
            <LocationHeader />
            <SearchBox />
        </div>
    )
}



