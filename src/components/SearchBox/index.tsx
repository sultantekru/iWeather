import React from 'react'
import { SpinnerGap } from "@phosphor-icons/react";
import './style.css'
import { ISearchBoxProps } from '../../types/ISearchBoxProps';

export const SearchBox: React.FC<ISearchBoxProps> = (props) => {
    return (
        <div className='search-container'>
            <input type='text'
                id='search-input'
                className='text-md'
                placeholder='Search location'
                onChange={(e) => { props.setSearchQuery(e.target.value) }}
            />
            {
                props.loading && (
                    <SpinnerGap className='search-loading-icon' size={32} />
                )
            }
        </div>
    )
}

