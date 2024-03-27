import React, { useEffect, useState } from 'react'
import { SpinnerGap } from "@phosphor-icons/react";
import './style.css'

export const Home: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [])
    return (
        <div>
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


