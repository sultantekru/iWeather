import React from 'react'
import './style.css'

export const SearchBox: React.FC = () => {
    return (
        <div className='search-container'>
            <input type='text'
                id='search-input'
                className='text-md'
                placeholder='Search location'
            />
        </div>
    )
}

