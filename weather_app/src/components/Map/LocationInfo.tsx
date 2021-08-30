import React from 'react'

interface Props {
    
}

export const LocationInfo = ({info}:any) => {
    return (
        <div className="location-info">
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>Title: <strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}
