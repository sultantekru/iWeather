import React from 'react'
import './style.css'
import { SpinnerGap } from "@phosphor-icons/react";
import { ILoadingProps } from '../../types/ILoadingProps';

export const Loading: React.FC<ILoadingProps> = (props) => {
    return (
        <div className='loading'>
            {
                props.loading && (
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

