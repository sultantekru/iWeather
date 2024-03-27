import React, { useState, useEffect } from 'react'
import { SpinnerGap } from "@phosphor-icons/react";
import './style.css'

export const SearchBox: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 10000);
        return () => clearTimeout(timer);
    }, [])
    return (
        <div className='search-container'>
            <input type='text'
                id='search-input'
                className='text-md'
                placeholder='Search location'
            />
            {
                loading && (
                    <SpinnerGap className='search-loading-icon' size={32} />
                )
            }
        </div>
    )
}

