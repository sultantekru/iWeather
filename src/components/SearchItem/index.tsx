import React, { useEffect, useState } from 'react'
import './style.css'
import { ISearchItemProps } from '../../types/ISearchItemProps'

export const SearchItem: React.FC<ISearchItemProps> = (props) => {
    const [borderRadius, setBorderRadius] = useState<string>("")
    useEffect(()=>{
       if (props.position == "first") setBorderRadius("8px 8px 0px 0px");
       else if(props.position == "first-one") setBorderRadius("8px 8px 8px 8px");
       else if(props.position == "middle") setBorderRadius("0px 0px 0px 0px");
       else if(props.position == "end") setBorderRadius("0px 0px 8px 8px");  
    }) 
    return (
        <div className='search-item-container' style={{borderRadius: borderRadius}}>
            <p className='item-content text-md'>{props.content}</p>
        </div>
    )
}


