import React from 'react'
import { useNavigate } from 'react-router'

function ConferenceCard({ data }) {
    const navigate = useNavigate()
    return (
        <div>
            <h3>{data.title}</h3>
            <p>{data.organizer}</p>
            <div style={{ display: 'flex' }}>
                <p><i className='fa fa-calendar'></i>{data.date}</p>
                <p><i className='fa fa-location'></i>{data.venue}</p>
            </div>
            <button onClick={() => {
                navigate(`/conference/${data.key}`, { id: data.key })
            }}>View Conference <i className='fa fa-angle-right'></i></button>

        </div>
    )
}

export default ConferenceCard