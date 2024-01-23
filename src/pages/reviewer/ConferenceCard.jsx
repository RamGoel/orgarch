import React from 'react'
import { useNavigate } from 'react-router'
import moment from 'moment'

function ConferenceCard({ data }) {
    const navigate = useNavigate()
    return (
        <div className='p-4 border-2 rounded-md my-3 w-fit '>
            <h3 className='font-semibold text-xl'>{data.title}</h3>
            <p className='text-sm'>Organizer: {data.organizer}</p>
            <div className='flex items-center justify-between my-2'>
                <p className='text-sm mr-2'><i className='fa fa-calendar'></i> {moment(data.date).format('DD MMM YYYY')}</p>
                <p className='text-sm ml-2'><i className='fa fa-map'></i> {data.venue}</p>
            </div>
            <button className='bg-black text-white text-[10px] py-1 px-4 rounded-lg' onClick={() => {
                navigate(`/conference/${data.key}`, { id: data.key })
            }}>View Conference Page <i className='fa fa-angle-right'></i></button>
            <br />

        </div>

        
    )
}

export default ConferenceCard