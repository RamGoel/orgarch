import React from 'react'
import { useNavigate } from 'react-router'

import './reviewer.css'

function ConferenceCard({ data }) {
    const navigate = useNavigate()
    return (
        <div className='ConferenceCardContainer'>
            <h3 className='cardTitle'>{data.title}</h3>
            <p className='organizerData'>{data.organizer}</p>
            <div style={{ display: 'flex' }}>
                <p><i className='fa fa-calendar'></i>{data.date}</p>
                <p><i className='fa fa-location'></i>{data.venue}</p>
            </div>
            <button onClick={() => {
                navigate(`/conference/${data.key}`, { id: data.key })
            }}>View Conference <i className='fa fa-angle-right'></i></button>
            <br />

        </div>

        
    )
}

export default ConferenceCard