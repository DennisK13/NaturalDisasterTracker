import React from 'react'
import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-mdi/fire'
import windIcon from '@iconify/icons-mdi/weather-windy'


export const LocationMarker = ({lat, lng, onClick}:any) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={fireIcon} className="icon"/>
        </div>
    )
}
