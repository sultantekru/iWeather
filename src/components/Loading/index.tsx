import React, { useEffect, useState } from 'react'
import './style.css'
import { SpinnerGap } from "@phosphor-icons/react";

export const Loading: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [])
    return (
        <div className='loading'>
            {
                loading && (
                    <div className='overlay'>
                        <div className='loading-icon'>
                            <SpinnerGap size={32} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

